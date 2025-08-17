"use client";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import HeroLogo from "./hero-logo.svg";

const Hero = () => {
  return (
    <VStack justifyContent="center" mt={4}>
      <HeroLogo height={120} width={120} />
      <Box textAlign="center">
        <Heading as="h1" textTransform="uppercase">
          We build really good{" "}
          <Text as="span" color="orange">
            marketo
          </Text>{" "}
          landing page &amp; email templates
        </Heading>
        <Text>
          Launch faster, build better, and crush those marketing goals.
        </Text>
      </Box>
    </VStack>
  );
};

export default Hero;
