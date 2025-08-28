"use client";
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";
import { FaChevronRight } from "react-icons/fa";
import { PrimaryButton } from "../../ui/Button/Button";
import StatusPing from "../../ui/StatusPing/StatusPing";

const Hero = () => {
  const currentDate = new Date();
  const monthNameLocale = currentDate.toLocaleString("default", {
    month: "long",
  });

  return (
    <CustomContainer>
      <VStack justifyContent="center" mt={{ base: 10, md: 20 }}>
        <Link
          _hover={{ scale: "105%" }}
          animation={"ease-in-out"}
          animationDuration={"fastest"}
          href="/"
          outline={"none"}
          transition={"all"}
        >
          <Image alt="Logo" src="/images/png/hero-logo.png" w="80px" />
        </Link>
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
          <Text fontSize={{ base: "lg", md: "2xl" }}>
            Launch faster, build better, and crush those marketing goals.
          </Text>
        </Box>
        <VStack gap={4} mt={4} w="full">
          <HStack
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
            w={{ base: "full", md: "auto" }}
          >
            <PrimaryButton
              externalLink={false}
              label="View Our Packages"
              url="#packages"
              variation="secondary"
            />
            <PrimaryButton
              icon={
                <Icon h={4}>
                  <FaChevronRight />
                </Icon>
              }
              label={"Book A Free Intro Call"}
              url="https://cal.com/innovativefoxes/innovative-foxes-introduction"
            />
          </HStack>
        </VStack>
        <HStack mt={10} textAlign={{ base: "left", md: "center" }}>
          <StatusPing />
          <Text fontSize={{ base: "sm", md: "md" }} textTransform={"uppercase"}>
            Now booking projects for {monthNameLocale}
          </Text>
        </HStack>
      </VStack>
    </CustomContainer>
  );
};

export default Hero;
