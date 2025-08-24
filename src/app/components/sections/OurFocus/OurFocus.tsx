"use client";
import { Box, Grid, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";
import { FaCheck, FaTimes } from "react-icons/fa";

const OurFocus = () => {
  return (
    <CustomContainer>
      <VStack spacing={8} textAlign="center" mb={12}>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="medium"
          lineHeight="shorter"
          color="navy.800"
        >
          All our focus is on you 🧡
        </Heading>
        <Text fontSize="xl" color="gray.600" maxW="600px">
          See why we are our client's first choice
        </Text>
      </VStack>

      <Box
        bg="gray.50"
        borderRadius="2xl"
        p={8}
        maxW="1200px"
        mx="auto"
      >
        <Grid templateColumns={{ base: "1fr", md: "200px 1fr 1fr" }} gap={0}>
          {/* Header Row */}
          <Box></Box>
          <VStack spacing={4} p={6} textAlign="center">
            {/* Placeholder for logo */}
            <Box
              w="120px"
              h="60px"
              bg="gray.200"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="gray.500"
              fontSize="sm"
            >
              Logo Placeholder
            </Box>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              INNOVATIVE<br />FOXES
            </Text>
          </VStack>
          <VStack spacing={4} p={6} textAlign="center">
            <Text fontSize="xl" fontWeight="semibold" color="gray.800">
              Large Agencies
            </Text>
          </VStack>

          {/* Divider */}
          <Box gridColumn="1 / -1" h="1px" bg="gray.200" my={4}></Box>

          {/* Comparison Rows */}
          <ComparisonRow
            feature="High quality at a comfortable price"
            innovativeFoxes={true}
            largeAgencies={false}
            largeAgenciesText="Varying quality with expensive pricing"
          />

          <ComparisonRow
            feature="Locally run, focusing on only one project at a time"
            innovativeFoxes={true}
            largeAgencies={false}
            largeAgenciesText="Offshoring and managing many projects all at once"
          />

          <ComparisonRow
            feature="Direct line of communication with consistant updates"
            innovativeFoxes={true}
            largeAgencies={false}
            largeAgenciesText="No clear communication lacking consistent updates"
          />

          <ComparisonRow
            feature="No hidden costs or fees with a focus on hitting deadlines"
            innovativeFoxes={true}
            largeAgencies={false}
            largeAgenciesText="Surprise costs and fees with inconsistent deadlines"
          />
        </Grid>
      </Box>
    </CustomContainer>
  );
};

interface ComparisonRowProps {
  feature: string;
  innovativeFoxes: boolean;
  largeAgencies: boolean;
  largeAgenciesText: string;
}

const ComparisonRow = ({ 
  feature, 
  innovativeFoxes, 
  largeAgencies, 
  largeAgenciesText 
}: ComparisonRowProps) => {
  return (
    <>
      <Box p={4} display={{ base: "none", md: "block" }}></Box>
      
      <HStack 
        p={4} 
        spacing={3} 
        alignItems="flex-start"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Box
          p={1}
          borderRadius="sm"
          bg={innovativeFoxes ? "orange.50" : "red.50"}
          border="1px solid"
          borderColor={innovativeFoxes ? "orange.200" : "red.200"}
        >
          <Icon
            as={innovativeFoxes ? FaCheck : FaTimes}
            color={innovativeFoxes ? "orange.500" : "red.500"}
            boxSize={3}
          />
        </Box>
        <Text fontSize="sm" color="gray.700" flex="1">
          {feature}
        </Text>
      </HStack>

      <HStack 
        p={4} 
        spacing={3} 
        alignItems="flex-start"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Box
          p={1}
          borderRadius="sm"
          bg={largeAgencies ? "orange.50" : "red.50"}
          border="1px solid"
          borderColor={largeAgencies ? "orange.200" : "red.200"}
        >
          <Icon
            as={largeAgencies ? FaCheck : FaTimes}
            color={largeAgencies ? "orange.500" : "red.500"}
            boxSize={3}
          />
        </Box>
        <Text fontSize="sm" color="gray.700" flex="1">
          {largeAgenciesText}
        </Text>
      </HStack>
    </>
  );
};

export default OurFocus;
