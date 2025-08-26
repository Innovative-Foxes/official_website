"use client";
import { useEffect, useState } from "react";

interface ClockProps {
  /**
   * Timezone string (e.g., "US/Pacific", "US/Eastern", "Europe/London", "UTC")
   */
  timezone: string;
  /**
   * Time format string (default: "HH:mm:ss")
   * Examples: "HH:mm:ss", "HH:mm", "h:mm:ss A", "MMM DD, YYYY HH:mm:ss"
   */
  format?: string;
  /**
   * Whether the clock should tick/update automatically (default: true)
   */
  ticking?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Placeholder text to show during server-side rendering (default: "--:--:--")
   */
  placeholder?: string;
}

/**
 * Format a date according to the specified format string
 */
const formatTime = (date: Date, format: string): string => {
  const pad = (num: number): string => num.toString().padStart(2, '0');
  
  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours24 >= 12 ? 'PM' : 'AM';
  
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  return format
    .replace(/HH/g, pad(hours24))
    .replace(/H/g, hours24.toString())
    .replace(/hh/g, pad(hours12))
    .replace(/h/g, hours12.toString())
    .replace(/mm/g, pad(minutes))
    .replace(/m/g, minutes.toString())
    .replace(/ss/g, pad(seconds))
    .replace(/s/g, seconds.toString())
    .replace(/A/g, ampm)
    .replace(/a/g, ampm.toLowerCase())
    .replace(/MMM/g, monthNames[month])
    .replace(/MM/g, pad(month + 1))
    .replace(/M/g, (month + 1).toString())
    .replace(/DD/g, pad(day))
    .replace(/D/g, day.toString())
    .replace(/YYYY/g, year.toString())
    .replace(/YY/g, year.toString().slice(-2));
};

/**
 * A client-side only Clock component that prevents hydration mismatches.
 * Renders a placeholder during SSR and shows the actual clock after client hydration.
 */
const Clock = ({
  timezone,
  format = "HH:mm:ss",
  ticking = true,
  className,
  placeholder = "--:--:--",
}: ClockProps) => {
  const [isClient, setIsClient] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setIsClient(true);
    
    const updateTime = () => {
      try {
        const now = new Date();
        const timeInTimezone = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
        setTime(formatTime(timeInTimezone, format));
      } catch (error) {
        // Fallback if timezone is invalid
        console.warn(`Invalid timezone: ${timezone}`, error);
        setTime(formatTime(new Date(), format));
      }
    };

    // Update time immediately
    updateTime();

    // Set up interval if ticking is enabled
    let interval: NodeJS.Timeout | undefined;
    if (ticking) {
      interval = setInterval(updateTime, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timezone, format, ticking]);

  if (!isClient) {
    return <span className={className}>{placeholder}</span>;
  }

  return <span className={className}>{time}</span>;
};

export default Clock;
