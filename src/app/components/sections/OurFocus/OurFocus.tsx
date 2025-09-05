"use client";
import {
  Box,
  Grid,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCheck, FaHeart, FaTimes } from "react-icons/fa";
import CustomContainer from "../../ui/Container/Container";

const OurFocus = () => {
  const comparisons = [
    "High quality at a comfortable price",
    "Locally run, focusing on only one project at a time",
    "Direct line of communication with consistent updates",
    "No hidden costs or fees with a focus on hitting deadlines",
  ];

  const otherAgenciesText = [
    "Varying quality with expensive pricing",
    "Offshoring and managing many projects all at once",
    "No clear communication lacking consistent updates",
    "Surprise costs and fees with inconsistent deadlines",
  ];

  return (
    <CustomContainer>
      <VStack
        alignItems={"flex-start"}
        mb={{ base: 6, md: 8 }}
        mt={{ base: 8, md: 12 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading
          alignItems={"center"}
          as="h2"
          color="navy.800"
          display={"flex"}
          flexWrap="wrap"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          gap={{ base: 2, md: 4 }}
          justifyContent={{ base: "center", md: "flex-start" }}
          lineHeight="shorter"
          textTransform={"uppercase"}
        >
          All our focus is on you{" "}
          <Icon fill={"orangeCustom"}>
            <FaHeart />
          </Icon>
        </Heading>
        <Text color="gray.600" fontSize={{ base: "lg", md: "xl" }} maxW="600px">
          See why we are our client&apos;s first choice
        </Text>
      </VStack>

      <Box
        bg="gray.100"
        borderRadius="2xl"
        maxW="1200px"
        mx="auto"
        p={{ base: 4, md: 8 }}
      >
        {/* Header Row - Desktop Only */}
        <Grid
          display={{ base: "none", md: "grid" }}
          gap={0}
          mb={6}
          templateColumns="1fr 1fr"
        >
          <HStack justifyContent="flex-start" pl={0}>
            <Image
              alt="Logo"
              maxW="180px"
              src="/images/svgs/our-focus-logo.svg"
              w="100%"
            />
          </HStack>
          <HStack alignItems={"flex-end"} justifyContent="flex-start" pl={0}>
            <Text color="gray.700" fontSize="xl" fontWeight="semibold">
              Large Agencies
            </Text>
          </HStack>
        </Grid>

        {/* Mobile Layout */}
        <Box display={{ base: "block", md: "none" }}>
          {/* Innovative Foxes Section */}
          <VStack align="start" gap={4} mb={8}>
            <HStack justifyContent="center" w="full">
              <Image
                alt="Logo"
                maxW="120px"
                src="/images/svgs/our-focus-logo.svg"
                w="100%"
              />
            </HStack>
            <VStack align="stretch" gap={3} w="full">
              {comparisons.map((comparison, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  bg="green.50"
                  borderRadius="md"
                  gap={3}
                  p={3}
                >
                  <Icon
                    as={FaCheck}
                    boxSize={3}
                    fill={"orangeCustom"}
                    flexShrink={0}
                  />
                  <Text color="gray.700" fontSize="sm" lineHeight="tall">
                    {comparison}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>

          {/* Large Agencies Section */}
          <VStack align="start" gap={4}>
            <HStack justifyContent="center" w="full">
              <Text color="gray.700" fontSize="lg" fontWeight="semibold">
                Large Agencies
              </Text>
            </HStack>
            <VStack align="stretch" gap={3} w="full">
              {otherAgenciesText.map((item, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  bg="red.100"
                  borderRadius="md"
                  gap={3}
                  p={3}
                >
                  <Icon
                    as={FaTimes}
                    boxSize={3}
                    fill="red.500"
                    flexShrink={0}
                  />
                  <Text color="gray.700" fontSize="sm" lineHeight="tall">
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Box>

        {/* Desktop Layout */}
        <VStack display={{ base: "none", md: "flex" }} gap={4}>
          {comparisons.map((comparison, index) => (
            <Grid
              key={index}
              borderBottom={
                index === comparisons.length - 1 ? "none" : "1px solid"
              }
              borderColor="gray.200"
              gap={0}
              pb={4}
              templateColumns="1fr 1fr"
              w="full"
            >
              <HStack alignItems="center" gap={3}>
                <Icon as={FaCheck} boxSize={3} fill={"orangeCustom"} />
                <Text color="gray.700" flex="1" fontSize="md" lineHeight="tall">
                  {comparison}
                </Text>
              </HStack>

              <HStack alignItems="center" gap={3}>
                <Icon as={FaTimes} boxSize={3} fill="red.500" />
                <Text color="gray.700" flex="1" fontSize="md" lineHeight="tall">
                  {otherAgenciesText[index]}
                </Text>
              </HStack>
            </Grid>
          ))}
        </VStack>
      </Box>
    </CustomContainer>
  );
};

export default OurFocus;
