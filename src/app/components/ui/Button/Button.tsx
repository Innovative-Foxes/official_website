"use client";

import { Button, Link } from "@chakra-ui/react";

interface PrimaryButtonProps {
  icon?: React.ReactNode;
  externalLink?: boolean;
  minHeight?: number;
  label: React.ReactNode | string;
  fontSize?: string;
  url: string;
  variation?: "primary" | "secondary";
  px?: number;
  py?: number;
  mobFW?: boolean;
  trackConversion?: boolean;
}

export const PrimaryButton = ({
  icon,
  minHeight = 52,
  label,
  fontSize = "md",
  px = 30,
  py = 20,
  url,
  externalLink = true,
  variation = "primary",
  trackConversion = false,
  mobFW = false,
}: PrimaryButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      trackConversion &&
      typeof window !== "undefined" &&
      window.gtag_report_conversion
    ) {
      e.preventDefault();
      // Track conversion without the URL parameter to avoid automatic navigation
      window.gtag_report_conversion();
      // Handle navigation manually to respect externalLink setting
      if (externalLink) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <Button
      asChild
      _active={{
        boxShadow: "-0.5px 0.5px 2px 0px rgba(0, 0, 0, 0.4)",
        transform: "translateY(1px)",
      }}
      bgColor={variation === "primary" ? "blueCustom" : "offWhite"}
      borderColor={"transparent"}
      borderRadius={"44px"}
      boxShadow="-1.5px 1.5px 4.5px 0px rgba(0, 0, 0, 0.25)"
      color={variation === "primary" ? "offWhite" : "blueCustom"}
      fontSize={fontSize}
      fontWeight={"medium"}
      maxW={{ base: "300px", md: "100%" }}
      textDecoration={"none"}
      transition="all 0.1s ease"
      w={{ base: mobFW ? "100%" : "fit-content", md: "fit-content" }}
    >
      <Link
        _hover={{ gap: "8px", scale: "105%" }}
        animation={"ease-in-out"}
        animationDuration={"fastest"}
        display={"flex"}
        gap={1}
        href={url}
        justifyContent="center"
        minH={`${minHeight}px`}
        px={{ base: "20px", md: `${px}px` }}
        py={`${py}px`}
        textDecoration={"none"}
        textWrap={"wrap"}
        touchAction="manipulation"
        transition={"all"}
        userSelect="none"
        {...(externalLink && { target: "_blank", rel: "noopener noreferrer" })}
        onClick={handleClick}
      >
        {label}
        {icon}
      </Link>
    </Button>
  );
};
