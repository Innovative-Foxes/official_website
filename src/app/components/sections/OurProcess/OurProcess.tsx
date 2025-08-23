"use client";
import {
  Box,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";
import { FaChevronRight } from "react-icons/fa";
import { PrimaryButton } from "../../ui/Button/Button";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  showButton?: boolean;
  subItems?: string[];
  additionalSections?: Array<{
    title: string;
    description: string;
    subItems?: string[];
  }>;
}

const OurProcess = () => {
  const processSteps: ProcessStep[] = [
    {
      step: "1. Intro",
      title: "Free intro call",
      description:
        "We&apos;ll hop on a quick call to get to know each other, talk through your Marketo goals, and see if we&apos;re a good fit.",
      showButton: true,
    },
    {
      step: "2. Pricing",
      title: "Straightforward pricing &amp; quote",
      description:
        "We&apos;ll walk you through our pricing options and send over a transparent, no-strings-attached quote for your project.",
    },
    {
      step: "3. Kickoff",
      title: "Getting started",
      description: "We&apos;ll gather what we need from you:",
      subItems: [
        "If we&apos;re designing, we&apos;ll grab your brand guidelines and custom fonts.",
        "If we&apos;re developing, we&apos;ll take your design file.",
        "We&apos;ll also request a single Marketo login so we can start building.",
      ],
      additionalSections: [
        {
          title: "Communication",
          description:
            "We&apos;ll set up clear communication channels for weekly check-ins and feedback, so your team always knows where things stand.",
        },
      ],
    },
    {
      step: "4. Execution",
      title: "Design &amp; development",
      description:
        "Need design? We&apos;ll create a custom template tailored to your brand, with up to 3 rounds of feedback. Once approved, we&apos;ll code your template for top performance in Marketo.",
      additionalSections: [
        {
          title: "Testing",
          description: "We&apos;ll put your template through the wringer:",
          subItems: [
            "Email templates are tested with platforms like Litmus and Email on Acid.",
            "Landing pages are tested across browsers, devices, and screen sizes to ensure a flawless experience.",
          ],
        },
        {
          title: "User testing (UAT)",
          description:
            "Your team gets time to test the template too. We&apos;ll capture your feedback and make any necessary tweaks.",
        },
      ],
    },
    {
      step: "5. Handoff &amp; Training",
      title: "Handoff",
      description:
        "We&apos;ll deliver links to all your new Marketo assets&mdash;templates, snippets, and more.",
      additionalSections: [
        {
          title: "Training",
          description:
            "We&apos;ll host a complimentary training call to walk your team through using the new template with real-world examples. (We&apos;ll record it too, so you can revisit it anytime.)",
        },
        {
          title: "Support",
          description:
            "Need help after launch? We&apos;ve got you covered. Post-handoff support includes bug fixes at no extra cost, plus answers to any questions that pop up.",
        },
      ],
    },
  ];

  return (
    <Box bgColor="darkBlue" color="offWhite" mt="180px">
      <CustomContainer>
        <VStack align="center" gap={12} py={20}>
          {/* Header Section */}
          <Box textAlign="center" maxW="800px">
            <Heading
              as="h2"
              fontFamily="poppins"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="semibold"
              lineHeight="100%"
              mb={6}
            >
              <Text alignItems="center" as="span" display="flex" gap={4} justifyContent="center">
                Our
                <Image
                  alt="Logo"
                  maxW={{ base: "50px", md: "70px" }}
                  src="/images/svgs/process-logo.svg"
                  w="100%"
                />
              </Text>
              <Text as="span" color="orange" fontWeight="semibold">
                Process
              </Text>
            </Heading>
            <Text fontSize={{ base: "lg", md: "2xl" }}>
              We strive to make your journey as smooth &amp; easy as possible
            </Text>
          </Box>

          {/* Process Steps */}
          {processSteps.map((step, index) => (
            <Box key={index} w="full" maxW="800px">
              <VStack align="start" gap={6} w="full">
                <Heading
                  as="h3"
                  fontFamily="poppins"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="semibold"
                  color="orange"
                >
                  {step.step}
                </Heading>

                <Heading
                  as="h4"
                  fontFamily="poppins"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="medium"
                  color="offWhite"
                >
                  {step.title}
                </Heading>

                <Text 
                  fontSize={{ base: "md", md: "lg" }} 
                  color="offWhite"
                  lineHeight="1.6"
                >
                  {step.description}
                </Text>

                {step.subItems && (
                  <VStack align="start" gap={3} w="full">
                    {step.subItems.map((item, itemIndex) => (
                      <Text
                        key={itemIndex}
                        fontSize={{ base: "sm", md: "md" }}
                        color="offWhite"
                        pl={6}
                        borderLeft="3px solid"
                        borderColor="orange"
                        lineHeight="1.5"
                      >
                        {item}
                      </Text>
                    ))}
                  </VStack>
                )}

                {step.additionalSections?.map((section, sectionIndex) => (
                  <Box key={sectionIndex} w="full" mt={6}>
                    <Heading
                      as="h4"
                      fontFamily="poppins"
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="medium"
                      mb={4}
                      color="orange"
                    >
                      {section.title}
                    </Heading>

                    <Text 
                      fontSize={{ base: "sm", md: "md" }} 
                      mb={4}
                      color="offWhite"
                      lineHeight="1.6"
                    >
                      {section.description}
                    </Text>

                    {section.subItems && (
                      <VStack align="start" gap={3} w="full">
                        {section.subItems.map((item, itemIndex) => (
                          <Text
                            key={itemIndex}
                            fontSize={{ base: "sm", md: "md" }}
                            color="offWhite"
                            pl={6}
                            borderLeft="3px solid"
                            borderColor="orange"
                            lineHeight="1.5"
                          >
                            {item}
                          </Text>
                        ))}
                      </VStack>
                    )}
                  </Box>
                ))}

                {step.showButton && (
                  <Box mt={6}>
                    <PrimaryButton
                      fontSize="medium"
                      icon={
                        <Icon h={3}>
                          <FaChevronRight />
                        </Icon>
                      }
                      label="Book A Call Now"
                      minHeight={50}
                      px={24}
                      url="#"
                    />
                  </Box>
                )}
              </VStack>
            </Box>
          ))}
        </VStack>
      </CustomContainer>
    </Box>
  );
};

export default OurProcess;
