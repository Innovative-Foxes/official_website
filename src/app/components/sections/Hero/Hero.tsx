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
  const currentDay = currentDate.getDate();

  // If current day is 20 or greater, show next month, otherwise current month
  let displayDate;
  if (currentDay >= 20) {
    displayDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1,
    );
  } else {
    displayDate = currentDate;
  }

  const monthNameLocale = displayDate.toLocaleString("default", {
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
            We build fully custom{" "}
            <Text as="span" color="orangeCustom" fontWeight={"semibold"}>
              marketo
            </Text>{" "}
            landing page &amp; email templates
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            m="auto"
            maxW={{ base: "auto", md: 900 }}
          >
            Launch faster, build better, and crush those marketing goals with a
            template that is customized to match your brand.
          </Text>
        </Box>
        <VStack gap={4} mt={6} w="full">
          <HStack
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
            w={{ base: "full", md: "auto" }}
          >
            <PrimaryButton
              mobFW
              externalLink={false}
              label="View Our Packages"
              url="#packages"
              variation="secondary"
            />
            <PrimaryButton
              mobFW
              icon={
                <Icon h={4}>
                  <FaChevronRight />
                </Icon>
              }
              label={"Book A Free Intro Call"}
              trackConversion={true}
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
