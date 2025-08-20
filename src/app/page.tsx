import { Box, Flex } from "@chakra-ui/react";
import ChooseUs from "./components/sections/ChooseUs/ChooseUs";
import Hero from "./components/sections/Hero/Hero";
import Packages from "./components/sections/Packages/Packages";

export default function Home() {
  return (
    <Box as={"main"}>
      <Flex align="center" direction="column" gap={4}>
        <Hero />
        <Box bg="orange" height="25vh" my={8} width="1px" />
      </Flex>
      <ChooseUs />
      <Packages />
    </Box>
  );
}
