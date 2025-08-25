import { Box, Flex } from "@chakra-ui/react";
import ChooseUs from "./components/sections/ChooseUs/ChooseUs";
import FAQ from "./components/sections/FAQ/FAQ";
import Footer from "./components/sections/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import MeetTeam from "./components/sections/MeetTeam/MeetTeam";
import OurFocus from "./components/sections/OurFocus/OurFocus";
import OurProcess from "./components/sections/OurProcess/OurProcess";
import Packages from "./components/sections/Packages/Packages";

export default function Home() {
  return (
    <Box>
      <Box as={"main"}>
        <Flex align="center" direction="column" gap={4}>
          <Hero />
          <Box bg="orange" height="25vh" my={8} width="1px" />
        </Flex>
        <ChooseUs />
        <Packages />
        <OurProcess />
        <MeetTeam />
        <OurFocus />
        <FAQ />
      </Box>
      <Footer />
    </Box>
  );
}
