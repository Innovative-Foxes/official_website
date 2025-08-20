import { Button, Link } from "@chakra-ui/react";

interface PrimaryButtonProps {
  icon?: React.ReactNode;
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
    >
      <Link
        _hover={{ gap: "8px", scale: "105%" }}
        animation={"ease-in-out"}
        animationDuration={"fastest"}
        display={"flex"}
        gap={1}
        href={url}
        minH={`${minHeight}px`}
        px={`${px}px`}
        py={`${py}px`}
        transition={"all"}
      >
        {label}
        {icon}
      </Link>
    </Button>
  );
};
