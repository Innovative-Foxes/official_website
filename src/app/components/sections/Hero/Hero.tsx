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
      <VStack justifyContent="center" mt={20}>
        <Link
          _hover={{ scale: "105%" }}
          animation={"ease-in-out"}
          animationDuration={"fastest"}
          href="#"
          outline={"none"}
          transition={"all"}
        >
          <Image
            alt="Logo"
            maxW={{ base: "60px", md: "80px" }}
            src="/images/svgs/hero-logo.svg"
            w="100%"
          />
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
          <Text fontSize={"2xl"}>
            Launch faster, build better, and crush those marketing goals.
          </Text>
        </Box>
        <HStack gap={4} mt={4}>
          <PrimaryButton
            label="View Our Packages"
            url="#"
            variation="secondary"
          />
          <PrimaryButton
            icon={
              <Icon h={4}>
                <FaChevronRight />
              </Icon>
            }
            label={"Book A Free Intro Call"}
            url="#"
          />
        </HStack>
        <HStack mt={10}>
          <StatusPing />
          <Text fontSize={"md"} textTransform={"uppercase"}>
            Now booking projects for {monthNameLocale}
          </Text>
        </HStack>
      </VStack>
    </CustomContainer>
  );
};

export default Hero;
