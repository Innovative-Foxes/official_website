"use client";
import {
  Box,
  Button,
  Card,
  Grid,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";

import { FaChevronRight, FaDesktop } from "react-icons/fa";
import { PrimaryButton } from "../../ui/Button/Button";
import StatusPing from "../../ui/StatusPing/StatusPing";
import { useState } from "react";

import ReactFlipCard from "reactjs-flip-card";

import { FaBoltLightning } from "react-icons/fa6";

const Packages = () => {
  const [activePackage, setActivePackage] = useState<"design" | "design-dev">(
    "design",
  );

  const designPackage = {
    title: "Design",
    description:
      "You bring the requirements, we bring the design. A fully custom template design ready to be implemented by your development team.",
    benefits: [
      "Custom template design based on your brand",
      "Modern, conversion-optimized layouts",
      "Mobile-first responsive design",
      "Branded custom styled forms",
      "Design system and component library",
      "Figma files with developer handoff",
      "Design review and iteration rounds",
    ],
    turnAround: "2-3 weeks",
    // price: "Starting from $3,500",
    slot: 3,
  };

  const designDevPackage = {
    title: "Design & Development",
    description:
      "Complete end-to-end solution. Our expert team will design and develop a fully functional, marketer-ready template.",
    benefits: [
      "Custom template design based on your brand",
      "Modern, conversion-optimized layouts",
      "Up to 40 custom modules to fit marketing needs",
      "Easily edit all content on the template",
      "Customize by moving & hiding sections",
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
                Packages
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
                icon={<FaBoltLightning fill="darkBlue" />}
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
            <HStack
              bg="gray.100"
              borderRadius="full"
              gap={1}
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
                fontWeight="semibold"
                px={8}
                py={3}
                shadow={activePackage === "design" ? "sm" : "none"}
                transition="all 0.2s ease"
                onClick={() => setActivePackage("design")}
              >
                Design
              </Button>
              <Button
                _hover={{
                  bg: activePackage === "design-dev" ? "white" : "gray.50",
                }}
                bg={activePackage === "design-dev" ? "white" : "transparent"}
                borderRadius="full"
                color={activePackage === "design-dev" ? "gray.800" : "gray.600"}
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
            <FlippingPackageCard
              isActive={activePackage === "design-dev"}
              package={
                activePackage === "design" ? designPackage : designDevPackage
              }
            />
          </VStack>
        </Grid>

        {/* Mobile Layout */}
        <VStack display={{ base: "flex", lg: "none" }} gap={12}>
          {/* Title Section */}
          <Box textAlign="center" w="100%">
            <Text
              color="orange"
              fontSize="sm"
              fontWeight="medium"
              letterSpacing="wide"
              mb={2}
              textTransform="uppercase"
            >
              Packages
            </Text>
            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="medium"
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
                Design
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
            <FlippingPackageCard
              isActive={activePackage === "design-dev"}
              package={
                activePackage === "design" ? designPackage : designDevPackage
              }
            />
          </Box>

          {/* Info Cards */}
          <VStack gap={4} px={4} w="100%">
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

interface PackageData {
  title: string;
  description: string;
  benefits: string[];
  turnAround: string;
  price?: string;
  slot: number;
}

interface FlippingPackageCardProps {
  package: PackageData;
  isActive: boolean;
}

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
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="sm"
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

const FlippingPackageCard = ({
  package: pkg,
  isActive,
}: FlippingPackageCardProps) => {
  // Front face (Design) - always light colors
  const frontBgColor = "#f8f9fa";
  const frontTextColor = "gray.800";
  const frontSecondaryTextColor = "gray.600";

  // Back face (Design & Development) - always dark colors
  const backBgColor = "#1a1a1a";
  const backTextColor = "white";
  const backSecondaryTextColor = "gray.300";

  const containerStyles = {
    width: "100%",
    height: "auto",
    minHeight: "500px",
  };

  const flipCardStyles = {
    width: "100%",
    height: "100%",
    transition: "transform 0.2s",
  };

  const frontStyles = {
    background: frontBgColor,
    color: frontTextColor,
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    padding: "24px",
    width: "100%",
    height: "100%",
    minHeight: "500px",
    boxSizing: "border-box" as const,
  };

  const backStyles = {
    background: backBgColor,
    color: backTextColor,
    borderRadius: "16px",
    border: "1px solid #4a5568",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    padding: "24px",
    width: "100%",
    height: "100%",
    minHeight: "500px",
    boxSizing: "border-box" as const,
  };

  const CardContent = ({ isBack = false }) => {
    const textColor = isBack ? backTextColor : frontTextColor;
    const secondaryTextColor = isBack
      ? backSecondaryTextColor
      : frontSecondaryTextColor;
    const accentColor = isBack ? "white" : "blue";
    const buttonVariation = isBack ? "secondary" : "primary";
    const iconFilter = isBack ? "brightness(0) invert(1)" : "none";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          gap: "20px",
          minHeight: "450px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Text color={secondaryTextColor} fontSize="sm" fontStyle="italic">
            {pkg.turnAround} turn around 🚀
          </Text>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Heading
              color={textColor}
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
            >
              {pkg.title}
            </Heading>

            <Text color={secondaryTextColor} fontSize="lg" lineHeight="tall">
              {pkg.description}
            </Text>
          </div>

          <Box bg={accentColor} borderRadius="full" h="2px" w="60px" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            {pkg.benefits.map((benefit: string, idx: number) => (
              <HStack key={idx} alignItems="center" gap={2}>
                <Image
                  alt="Check"
                  filter={iconFilter}
                  h={3}
                  src="/images/svgs/check-orange.svg"
                  w={3}
                />
                <Text color={textColor} fontSize="sm" lineHeight="tall">
                  {benefit}
                </Text>
              </HStack>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              flex: "1",
            }}
          >
            <Text color={textColor} fontSize="2xl" fontWeight="bold">
              {pkg.price}
            </Text>
            <HStack>
              <StatusPing />
              <Text color={secondaryTextColor} fontSize="sm">
                {pkg.slot} {pkg.slot > 1 ? "slots" : "slot"} left
              </Text>
            </HStack>
          </div>

          <div style={{ flex: "0 0 auto" }}>
            <PrimaryButton
              fontSize="base"
              icon={
                <Icon h={3}>
                  <FaChevronRight />
                </Icon>
              }
              label="Get Started"
              minHeight={50}
              px={24}
              trackConversion={true}
              url="https://cal.com/innovativefoxes/innovative-foxes-introduction"
              variation={buttonVariation}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Box w={{ base: "100%", md: "700px" }}>
      <ReactFlipCard
        backComponent={<CardContent isBack={true} />}
        backStyle={backStyles}
        containerStyle={containerStyles}
        direction="vertical"
        flipByProp={isActive}
        flipCardStyle={flipCardStyles}
        flipTrigger="disabled"
        frontComponent={<CardContent isBack={false} />}
        frontStyle={frontStyles}
      />
    </Box>
  );
};

export default Packages;
