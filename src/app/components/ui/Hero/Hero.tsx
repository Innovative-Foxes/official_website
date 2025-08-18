"use client";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import CustomContainer from "../Container/Container";
import { PrimaryButton } from "../Button/Button";

const Hero = () => {
  return (
    <CustomContainer>
      <VStack justifyContent="center" mt={20}>
        <Image
          alt="Logo"
          maxW={{ base: "60px", md: "80px" }}
          src="/images/svgs/hero-logo.svg"
          w="100%"
        />
        <Box textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "6xl" }}
            fontWeight={"medium"}
            lineHeight={"shorter"}
            my={4}
            textTransform="uppercase"
          >
            We build really good{" "}
            <Text as="span" color="orange" fontWeight={"semibold"}>
              marketo
            </Text>{" "}
            landing page &amp; email templates
          </Heading>
          <Text fontSize={"2xl"}>
            Launch faster, build better, and crush those marketing goals.
          </Text>
        </Box>
        <Box>
          <PrimaryButton label="View Our Services" url="#" />
        </Box>
      </VStack>
    </CustomContainer>
  );
};

export default Hero;
