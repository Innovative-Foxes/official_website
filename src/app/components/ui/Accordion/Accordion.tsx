"use client";
import React from "react";

import { Accordion, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface TeamMember {
  id: number;
  name: string;
  greeting: string;
  introduction: string;
  description: string[];
  image: string;
  languages: string[];
  specialties: string[];
}

interface AccordionItemProps {
  member: TeamMember;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ member }) => {
  return (
    <Accordion.Item
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="16px"
      mb={6}
      shadow="sm"
      value={member.id.toString()}
    >
      <Accordion.ItemTrigger
        alignItems="center"
        bg="transparent"
        cursor="pointer"
        display="flex"
        justifyContent="space-between"
        px={6}
        py={6}
        w="full"
      >
        <VStack align="start" flex={1} gap={2}>
          <Text color="gray.800" fontSize="2xl" fontWeight="bold">
            {member.greeting}
          </Text>
          <Text color="gray.600" fontSize="lg" fontWeight="medium">
            {member.introduction}
          </Text>
        </VStack>

        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>

      <Accordion.ItemContent bg="transparent">
        <Accordion.ItemBody bg="transparent">
          <Box p={6} pt={0}>
            <VStack align="stretch" gap={6}>
              {/* Profile Image */}
              <Box alignSelf="center" maxW="280px" w="100%">
                <Image
                  alt={`${member.name} profile`}
                  borderRadius="12px"
                  shadow="md"
                  src={member.image}
                  w="100%"
                />
              </Box>

              {/* Description */}
              <VStack align="start" gap={4}>
                {member.description.map((paragraph, index) => (
                  <Text
                    key={index}
                    color="gray.700"
                    fontSize="md"
                    lineHeight="tall"
                  >
                    {paragraph}
                  </Text>
                ))}
              </VStack>

              {/* Specialties Section */}
              <VStack align="start" gap={3}>
                <Text color="gray.800" fontSize="lg" fontWeight="bold">
                  Specialties
                </Text>
                <VStack align="start" gap={3} w="100%">
                  {member.specialties.map((specialty, index) => (
                    <HStack key={index} align="center" gap={3}>
                      <Image
                        alt="Check mark"
                        height="18px"
                        src="/images/svgs/check-orange.svg"
                        width="18px"
                      />
                      <Text color="gray.700" fontSize="md">
                        {specialty}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>

              {/* Languages Section */}
              <VStack align="start" gap={3}>
                <Text color="gray.800" fontSize="lg" fontWeight="bold">
                  Languages
                </Text>
                <HStack flexWrap="wrap" gap={2}>
                  {member.languages.map((language, index) => (
                    <Box
                      key={index}
                      bg="gray.100"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      <Text color="gray.700" fontSize="sm" fontWeight="medium">
                        {language}
                      </Text>
                    </Box>
                  ))}
                </HStack>
              </VStack>
            </VStack>
          </Box>
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  );
};

interface TeamAccordionProps {
  teamMembers: TeamMember[];
}

const TeamAccordion: React.FC<TeamAccordionProps> = ({ teamMembers }) => {
  return (
    <Accordion.Root collapsible>
      {teamMembers.map((member) => (
        <AccordionItem key={member.id} member={member} />
      ))}
    </Accordion.Root>
  );
};

export default TeamAccordion;
