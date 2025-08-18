import { Button } from "@chakra-ui/react";

interface PrimaryButtonProps {
  label: string;
  url: string;
}

export const PrimaryButton = ({ label, url }: PrimaryButtonProps) => {
  return (
    <Button
      asChild
      bgColor={"offWhite"}
      border={"none"}
      borderRadius={"44px"}
      fontWeight={"medium"}
      px={"38px"}
      py={"20px"}
      shadow={"md"}
    >
      <a href={url}>{label}</a>
    </Button>
  );
};
