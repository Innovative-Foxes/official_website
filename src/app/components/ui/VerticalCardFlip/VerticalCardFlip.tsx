"use client";
import React from "react";

import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { PrimaryButton } from "../Button/Button";
import StatusPing from "../StatusPing/StatusPing";
import { motion } from "motion/react";

// Create motion components
const MotionBox = motion(Box);

interface PackageData {
  title: string;
  description: string;
  benefits: string[];
  turnAround: string;
  price?: string;
  slot: number;
}

interface ChakraLargeVerticalCardFlipProps {
  isFlipped: boolean;
  designPackage: PackageData;
  designDevPackage: PackageData;
}

export default function ChakraLargeVerticalCardFlip({
  isFlipped,
  designPackage,
  designDevPackage,
}: ChakraLargeVerticalCardFlipProps) {
  return (
    <Box
      alignItems="center"
      display="flex"
      h="auto"
      justifyContent="center"
      p={0}
      w="full"
    >
      <Box perspective="1000px" w={{ base: "100%", md: "700px" }}>
        <MotionBox
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          h={{ base: "700px", md: "550px" }}
          mx="auto"
          position="relative"
          style={{ transformStyle: "preserve-3d" }}
          transition={{
            duration: 0.15,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          w="full"
        >
          {/* Front Face - Design Package */}
          <Box
            bg="offWhite"
            border="1px"
            borderColor="gray.100"
            borderRadius="2xl"
            h="full"
            inset={0}
            overflow="hidden"
            position="absolute"
            shadow="2xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateX(0deg)",
            }}
            w="full"
          >
            <VStack gap={0} h="full" justify="space-between" p={6}>
              {/* Header */}
              <VStack align="start" gap={4} w="full">
                <Text color="gray.600" fontSize="sm" fontStyle="italic">
                  {designPackage.turnAround} turn around 🚀
                </Text>

                <VStack align="start" gap={3} w="full">
                  <Heading
                    color="gray.900"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                  >
                    {designPackage.title}
                  </Heading>

                  <Text
                    color="gray.600"
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight={{ base: "normal", md: "tall" }}
                  >
                    {designPackage.description}
                  </Text>
                </VStack>

                <Box bg="darkBlueCustom" borderRadius="full" h="2px" w="60px" />

                {/* Benefits */}
                <VStack align="start" gap={3} w="full">
                  {designPackage.benefits.map(
                    (benefit: string, idx: number) => (
                      <HStack key={idx} alignItems="center" gap={3}>
                        <Image
                          alt="Check"
                          h={4}
                          src="/images/svgs/check-orange.svg"
                          w={4}
                        />
                        <Text color="gray.800" fontSize="sm" lineHeight="tall">
                          {benefit}
                        </Text>
                      </HStack>
                    ),
                  )}
                </VStack>
              </VStack>

              {/* Footer */}
              <HStack align="center" justify="space-between" mt={6} w="full">
                <VStack align="start" gap={2}>
                  <Text color="gray.800" fontSize="2xl" fontWeight="bold">
                    {designPackage.price}
                  </Text>
                  <HStack>
                    <StatusPing />
                    <Text color="gray.600" fontSize="sm">
                      {designPackage.slot}{" "}
                      {designPackage.slot > 1 ? "slots" : "slot"} left
                    </Text>
                  </HStack>
                </VStack>

                <PrimaryButton
                  fontSize="base"
                  icon={
                    <Icon h={3}>
                      <FaChevronRight />
                    </Icon>
                  }
                  label="Get Started"
                  minHeight={48}
                  trackConversion={true}
                  url="https://cal.com/innovativefoxes/innovative-foxes-introduction"
                  variation="primary"
                />
              </HStack>
            </VStack>
          </Box>

          {/* Back Face - Design & Development Package */}
          <Box
            bg="darkBlueCustom"
            borderRadius="2xl"
            h="full"
            inset={0}
            overflow="hidden"
            position="absolute"
            shadow="2xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateX(180deg)",
            }}
            w="full"
          >
            <VStack gap={0} h="full" justify="space-between" p={6}>
              {/* Header */}
              <VStack align="start" gap={4} w="full">
                <Text color="gray.300" fontSize="sm" fontStyle="italic">
                  {designDevPackage.turnAround} turn around 🚀
                </Text>

                <VStack align="start" gap={3} w="full">
                  <Heading
                    color="offWhite"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                  >
                    {designDevPackage.title}
                  </Heading>

                  <Text
                    color="offWhite"
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight={{ base: "normal", md: "tall" }}
                  >
                    {designDevPackage.description}
                  </Text>
                </VStack>

                <Box bg="offWhite" borderRadius="full" h="2px" w="60px" />

                {/* Benefits */}
                <VStack align="start" gap={3} w="full">
                  {designDevPackage.benefits.map(
                    (benefit: string, idx: number) => (
                      <HStack key={idx} alignItems="center" gap={3}>
                        <Image
                          alt="Check"
                          h={4}
                          src="/images/svgs/check-white.svg"
                          w={4}
                        />
                        <Text color="offWhite" fontSize="sm" lineHeight="tall">
                          {benefit}
                        </Text>
                      </HStack>
                    ),
                  )}
                </VStack>
              </VStack>

              {/* Footer */}
              <HStack align="center" justify="space-between" mt={6} w="full">
                <VStack align="start" gap={2}>
                  <Text color="white" fontSize="2xl" fontWeight="bold">
                    {designDevPackage.price}
                  </Text>
                  <HStack>
                    <StatusPing />
                    <Text color="gray.300" fontSize="sm">
                      {designDevPackage.slot}{" "}
                      {designDevPackage.slot > 1 ? "slots" : "slot"} left
                    </Text>
                  </HStack>
                </VStack>

                <PrimaryButton
                  fontSize="base"
                  icon={
                    <Icon h={3}>
                      <FaChevronRight />
                    </Icon>
                  }
                  label="Get Started"
                  minHeight={48}
                  trackConversion={true}
                  url="https://cal.com/innovativefoxes/innovative-foxes-introduction"
                  variation="secondary"
                />
              </HStack>
            </VStack>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}
