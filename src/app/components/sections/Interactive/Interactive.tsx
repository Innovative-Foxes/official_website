import { Box, Heading, Text } from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";
import InteractiveTemplate from "../../ui/InteractiveTemplate/InteractiveTemplate";

const Interactive = () => {
  return (
    <Box
      bgImage={"url(/images/png/dotgrid.png)"}
      bgRepeat={"repeat"}
      mt={20}
      py={20}
    >
      <CustomContainer>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight={"medium"}
          lineHeight={"shorter"}
          textAlign={"center"}
          textTransform="uppercase"
        >
          Explore a sample of our custom{" "}
          <Text as="span" color="orangeCustom" fontWeight={"semibold"}>
            Marketo template editing
          </Text>{" "}
          capabilities
        </Heading>
        <Text
          fontSize={"lg"}
          fontWeight={"medium"}
          m={"auto"}
          maxW={1000}
          mb={12}
          mt={4}
          textAlign={"center"}
        >
          A small preview — complete templates include full control of all
          colors, editable text &amp; elements, image replacement, and flexible
          layouts. We also have the option for advanced features such as
          interactive sliders, css animations, video players, and full section
          re-ordering.
        </Text>
        <InteractiveTemplate />
      </CustomContainer>
    </Box>
  );
};

export default Interactive;
