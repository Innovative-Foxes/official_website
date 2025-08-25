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
      <VStack alignItems={"flex-start"} mb={8} mt={12}>
        <Heading
          alignItems={"center"}
          as="h2"
          color="navy.800"
          display={"flex"}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="semibold"
          gap={4}
          lineHeight="shorter"
        >
          All our focus is on you <FaHeart fill="orange" />
        </Heading>
        <Text color="gray.600" fontSize="xl" maxW="600px">
          See why we are our client&apos;s first choice
        </Text>
      </VStack>

      <Box bg="gray.100" borderRadius="2xl" maxW="1200px" mx="auto" p={8}>
        {/* Header Row */}
        <Grid gap={0} mb={6} templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
          <HStack justifyContent="flex-start" pl={0}>
            <Image
              alt="Logo"
              maxW={{ base: "150px", md: "180px" }}
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

        {/* Comparison Rows */}
        <VStack gap={4}>
          {comparisons.map((comparison, index) => (
            <Grid
              key={index}
              borderBottom={
                index === comparisons.length - 1 ? "none" : "1px solid"
              }
              borderColor="gray.200"
              gap={0}
              pb={4}
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              w="full"
            >
              <HStack alignItems="center" gap={3}>
                <Icon as={FaCheck} boxSize={3} fill={"orange"} />
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
