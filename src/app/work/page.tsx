import { Box, Heading, VStack } from "@chakra-ui/react";
import FixedNavbar from "../components/ui/FixedNavbar/FixedNavbar";
import Footer from "../components/sections/Footer/Footer";
import ShowcaseGrid from "./components/ShowcaseGrid/ShowcaseGrid";

export default function WorkPage() {
  return (
    <Box>
      <FixedNavbar />
      <Box as="main" pt={{ base: 16, md: 24 }} pb={{ base: 16, md: 24 }}>
        <VStack gap={10}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            textAlign="center"
            textTransform="uppercase"
          >
            Our Work
          </Heading>
          <ShowcaseGrid />
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
