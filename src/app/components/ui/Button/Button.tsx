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
}: PrimaryButtonProps) => {
  return (
    <Button
      asChild
      bgColor={variation === "primary" ? "blue" : "offWhite"}
      borderColor={"transparent"}
      borderRadius={"44px"}
      boxShadow="-1.5px 1.5px 4.5px 0px rgba(0, 0, 0, 0.25)"
      color={variation === "primary" ? "offWhite" : "blue"}
      fontSize={fontSize}
      fontWeight={"medium"}
      maxW={{ base: "300px", md: "100%" }}
      textDecoration={"none"}
      w={{ base: "100%", md: "fit-content" }}
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
        transition={"all"}
        {...(externalLink && { target: "_blank" })}
      >
        {label}
        {icon}
      </Link>
    </Button>
  );
};
