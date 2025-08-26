"use client";
import { useEffect, useState } from "react";
import ReactLiveClock from "react-live-clock";

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

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <span className={className}>{placeholder}</span>;
  }

  return (
    <ReactLiveClock
      className={className}
      format={format}
      ticking={ticking}
      timezone={timezone}
    />
  );
};

export default Clock;
