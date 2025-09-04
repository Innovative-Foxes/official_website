"use client";
import {
  Box,
  Button,
  Card,
  Grid,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";

import { FaChevronRight, FaDesktop } from "react-icons/fa";
import { PrimaryButton } from "../../ui/Button/Button";
import { useState } from "react";

import ChakraLargeVerticalCardFlip from "../../ui/VerticalCardFlip/VerticalCardFlip";

import { FaBoltLightning } from "react-icons/fa6";

const Packages = () => {
  const [activePackage, setActivePackage] = useState<"design" | "design-dev">(
    "design",
  );

  const designPackage = {
    title: "Development",
    description:
      "You bring the designs, we bring the development. A fully custom landing page or email template developed and ready to be implemented by your Marketing team.",
    benefits: [
      "Custom template matched perfectly to your designs",
      "Branded custom styled forms",
      "Up to 40 custom modules to fit marketing needs",
      "Easily edit all content on the template",
      "Fully mobile responsive",
      "Branded custom styled Marketo forms",
      "Training provided on using template",
    ],
    turnAround: "2-3 weeks",
    // price: "Starting from $3,500",
    slot: 3,
  };

  const designDevPackage = {
    title: "Design & Development",
    description:
      "Complete end-to-end solution. Our expert team will design and develop a fully functional, marketer-ready landing page or email template.",
    benefits: [
      "Custom template based on your brand guidelines",
      "Modern, conversion-optimized layouts",
      "Up to 40 custom modules to fit marketing needs",
      "Customize by moving & hiding sections",
      "Easily edit all content on the template",
      "Fully mobile responsive",
      "Branded custom styled Marketo forms",
      "Training provided on using template",
    ],
    turnAround: "4-6 weeks",
    // price: "Starting from $6,500",
    slot: 1,
  };

  return (
    <CustomContainer>
      <Box id="packages" mt={{ base: 16, md: 32 }}>
        {/* Desktop Layout */}
        <Grid
          display={{ base: "none", lg: "grid" }}
          gap={{ base: 8, lg: 16 }}
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        >
          {/* Left Column */}
          <VStack align="start" gap={8}>
            {/* Title Section */}
            <Box>
              <Text
                color="darkBlue"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wide"
                mb={2}
                textTransform="uppercase"
              >
                Our Packages
              </Text>
              <Heading
                as="h2"
                fontSize="4xl"
                fontWeight="bold"
                lineHeight="shorter"
                textTransform="uppercase"
              >
                Our{" "}
                <Text as="span" color="orange" fontWeight="semibold">
                  Marketo
                </Text>{" "}
                Landing Page &amp; Email Packages
              </Heading>
            </Box>

            {/* Info Cards */}
            <VStack gap={4} w="100%">
              <InfoCard
                description="Tailored to your brand guidelines and marketing objectives"
                icon={<FaDesktop fill="darkBlue" />}
                title="Custom Design"
              />
              <InfoCard
                description="Quick turnaround times to keep your campaigns moving"
                icon={<FaBoltLightning fill="orange" />}
                title="Fast Delivery"
              />
            </VStack>

            {/* SFMC/Pardot Section */}
            <Box>
              <Heading as="h3" fontSize="xl" lineHeight="normal" mb={4}>
                Does your team use SFMC or Pardot instead of Marketo?
              </Heading>
              <Text fontSize="md" mb={6}>
                While Marketo is our specialty, we&apos;re also experienced
                across a variety of marketing automation platforms. Schedule a
                call with us, we&apos;ll explore your needs and put together a
                plan that works best for your team.
              </Text>
              <PrimaryButton
                fontSize="base"
                icon={
                  <Icon h={3}>
                    <FaChevronRight />
                  </Icon>
                }
                label="Book A Call Now"
                minHeight={45}
                px={24}
                trackConversion={true}
                url="https://cal.com/innovativefoxes/innovative-foxes-introduction"
              />
            </Box>
          </VStack>

          {/* Right Column - Package Toggle and Card */}
          <VStack align="center" gap={8}>
            {/* Package Toggle */}
            <HStack borderRadius="full" gap={2} p={1} w="fit-content">
              <Button
                _hover={{
                  bg: activePackage === "design" ? "offWhite" : "gray.100",
                }}
                bg={activePackage === "design" ? "offWhite" : "transparent"}
                borderColor={
                  activePackage === "design" ? "transparent" : "gray.200"
                }
                borderRadius="full"
                color={activePackage === "design" ? "darkBlue" : "gray.600"}
                fontWeight="semibold"
                px={8}
                py={3}
                shadow={activePackage === "design" ? "sm" : "none"}
                transition="all 0.2s ease"
                onClick={() => setActivePackage("design")}
              >
                Development
              </Button>
              <Button
                _hover={{
                  bg: activePackage === "design-dev" ? "darkBlue" : "gray.100",
                }}
                bg={activePackage === "design-dev" ? "darkBlue" : "transparent"}
                borderColor={
                  activePackage === "design-dev" ? "transparent" : "gray.200"
                }
                borderRadius="full"
                color={activePackage === "design-dev" ? "offWhite" : "gray.600"}
                fontWeight="semibold"
                px={8}
                py={3}
                shadow={activePackage === "design-dev" ? "sm" : "none"}
                transition="all 0.2s ease"
                onClick={() => setActivePackage("design-dev")}
              >
                Design &amp; Development
              </Button>
            </HStack>

            {/* Package Card */}
            <ChakraLargeVerticalCardFlip
              designDevPackage={designDevPackage}
              designPackage={designPackage}
              isFlipped={activePackage === "design-dev"}
            />
          </VStack>
        </Grid>

        {/* Mobile Layout */}
        <VStack display={{ base: "flex", lg: "none" }} gap={12}>
          {/* Title Section */}
          <Box textAlign="center" w="100%">
            <Text
              color="darkBlue"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="wide"
              mb={2}
              textTransform="uppercase"
            >
              Packages
            </Text>
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              lineHeight="shorter"
              textTransform="uppercase"
            >
              Our{" "}
              <Text as="span" color="orange" fontWeight="semibold">
                Marketo
              </Text>{" "}
              Landing Page &amp; Email Packages
            </Heading>
          </Box>

          {/* Package Toggle */}
          <Box textAlign="center">
            <HStack
              bg="gray.100"
              borderRadius="full"
              gap={0}
              mx="auto"
              p={1}
              w="fit-content"
            >
              <Button
                _hover={{
                  bg: activePackage === "design" ? "white" : "gray.50",
                }}
                bg={activePackage === "design" ? "white" : "transparent"}
                borderRadius="full"
                color={activePackage === "design" ? "gray.800" : "gray.600"}
                fontWeight="medium"
                px={8}
                py={3}
                shadow={activePackage === "design" ? "sm" : "none"}
                transition="all 0.2s ease"
                onClick={() => setActivePackage("design")}
              >
                Development
              </Button>
              <Button
                _hover={{
                  bg: activePackage === "design-dev" ? "white" : "gray.50",
                }}
                bg={activePackage === "design-dev" ? "white" : "transparent"}
                borderRadius="full"
                color={activePackage === "design-dev" ? "gray.800" : "gray.600"}
                fontWeight="medium"
                px={8}
                py={3}
                shadow={activePackage === "design-dev" ? "sm" : "none"}
                transition="all 0.2s ease"
                onClick={() => setActivePackage("design-dev")}
              >
                Design &amp; Development
              </Button>
            </HStack>
          </Box>

          {/* Package Card */}
          <Box px={4} w="100%">
            <ChakraLargeVerticalCardFlip
              designDevPackage={designDevPackage}
              designPackage={designPackage}
              isFlipped={activePackage === "design-dev"}
            />
          </Box>

          {/* Info Cards */}
          <VStack gap={6} px={4} w="100%">
            <InfoCard
              description="Tailored to your brand guidelines and marketing objectives"
              icon={<FaDesktop fill="darkBlue" />}
              title="Custom Design"
            />
            <InfoCard
              description="Quick turnaround times to keep your campaigns moving"
              icon={<FaBoltLightning fill="darkBlue" />}
              title="Fast Delivery"
            />
          </VStack>

          {/* SFMC/Pardot Section */}
          <VStack px={4} textAlign="center" w="100%">
            <Heading as="h3" fontSize="2xl" lineHeight="normal" mb={4}>
              Does your team use SFMC or Pardot instead of Marketo?
            </Heading>
            <Text fontSize="sm" mb={6}>
              While Marketo is our specialty, we&apos;re also experienced across
              a variety of marketing automation platforms. Schedule a call with
              us, we&apos;ll explore your needs and put together a plan that
              works best for your team.
            </Text>
            <PrimaryButton
              fontSize="base"
              icon={
                <Icon h={3}>
                  <FaChevronRight />
                </Icon>
              }
              label="Book A Call Now"
              minHeight={45}
              px={24}
              trackConversion={true}
              url="https://cal.com/innovativefoxes/innovative-foxes-introduction"
            />
          </VStack>
        </VStack>
      </Box>
    </CustomContainer>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <Card.Root
      bg="white"
      border="1px solid"
      borderColor="gray.50"
      borderRadius="lg"
      boxShadow="md"
      p={6}
      transition="all 0.2s ease"
      w="100%"
    >
      <HStack align="start" gap={4}>
        <Box mt={1.5}>{icon}</Box>
        <VStack align="start" gap={2}>
          <Heading color="gray.800" fontSize="lg" fontWeight="semibold">
            {title}
          </Heading>
          <Text color="gray.600" fontSize="sm" lineHeight="tall">
            {description}
          </Text>
        </VStack>
      </HStack>
    </Card.Root>
  );
};

export default Packages;
