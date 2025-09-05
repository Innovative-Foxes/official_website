"use client";
import {
  Accordion,
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";
import { FaChevronRight } from "react-icons/fa";
import { PrimaryButton } from "../../ui/Button/Button";

interface IntroSlide {
  step: string;
  title: string;
  description: string;
  isIntro: boolean;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  showButton?: boolean;
  highlights?: string[];
}

const OurProcess = () => {
  const introSlide: IntroSlide = {
    step: "Our Process",
    title: "A smarter way to build with Marketo.",
    description:
      "From kickoff to launch in five simple steps—fast, focused, and built for measurable results.",
    isIntro: true,
  };

  const processSteps: ProcessStep[] = [
    {
      step: "1. Discovery Call",
      title: "A quick conversation to align",
      description:
        "We'll hop on a 15-minute intro call to learn about your Marketo goals and share how we work. It's a no-pressure space to see if there's a fit.",
      showButton: true,
      highlights: [
        "Clear, open discussion",
        "Your goals, our focus",
        "Fast alignment check",
      ],
    },
    {
      step: "2. Transparent Proposal",
      title: "Clarity from the start",
      description:
        "No vague estimates or mystery line items. You'll get a clear breakdown of scope, pricing, and timelines so you know exactly what to expect.",
      highlights: [
        "Fixed, transparent pricing",
        "Detailed cost breakdown",
        "CFO-friendly clarity",
      ],
    },
    {
      step: "3. Kickoff & Setup",
      title: "Setting the foundation",
      description:
        "Once we're a go, we'll collect everything needed to move quickly—brand assets, design files, and Marketo access. We'll also establish communication channels so you always know where things stand.",
      highlights: [
        "Brand guidelines, fonts, and design files",
        "Secure Marketo login",
        "Weekly check-ins, your way",
      ],
    },
    {
      step: "4. Design & Development",
      title: "Where strategy meets execution",
      description:
        "This is the creative build phase. Our team designs and codes templates that reflect your brand, function seamlessly, and perform at scale.",
      highlights: [
        "Feedback and revision rounds",
        "Pixel-perfect, performance-ready code",
        "Rigorous QA & testing across devices, browsers, and inboxes",
      ],
    },
    {
      step: "5. Delivery & Support",
      title: "From launch to long-term success",
      description:
        "We'll deliver polished, ready-to-use Marketo assets, train your team on implementation, and provide ongoing support to keep things running smoothly.",
      highlights: [
        "Full asset delivery",
        "Live training (with recordings for later)",
        "Post-launch support included",
      ],
    },
  ];

  return (
    <Box
      bgColor="darkBlueCustom"
      color="offWhite"
      mt={{ base: 24, md: 40 }}
      py={{ base: 16, md: 24 }}
    >
      <CustomContainer>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 8, md: 12 }}
          justifyContent={"space-between"}
          minH={{ base: "auto", md: "600px" }}
        >
          {/* Left Section - Intro */}
          <Box flex="1" maxW={{ base: "100%", lg: "40%" }}>
            <VStack align="start" gap={8} h="full">
              <Box>
                <Heading
                  as="h2"
                  fontFamily="poppins"
                  fontSize={{ base: "4xl", md: "6xl" }}
                  fontWeight="semibold"
                  lineHeight="110%"
                  mb={6}
                  textTransform={"uppercase"}
                >
                  <Text
                    alignItems="center"
                    as="span"
                    display="flex"
                    flexWrap="wrap"
                    gap={{ base: 2, md: 4 }}
                  >
                    Our
                    <Image
                      alt="Logo"
                      maxW={{ base: "40px", md: "70px" }}
                      src="/images/svgs/process-logo.svg"
                      w="100%"
                    />
                  </Text>
                  <Text as="span" color="orangeCustom" fontWeight="semibold">
                    Process
                  </Text>
                </Heading>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="semibold"
                  lineHeight="1.2"
                  mb={2}
                >
                  {introSlide.title}
                </Text>
                <Text fontSize={{ base: "md", md: "xl" }} mb={4} opacity={0.9}>
                  {introSlide.description}
                </Text>
              </Box>

              {/* Fox Image */}
              <Box
                alignItems="center"
                display={{ base: "none", md: "flex" }}
                flex="1"
                justifyContent="center"
                w="full"
              >
                <Image
                  alt="Fox in car - Our Process"
                  borderRadius="16px"
                  src="/images/png/our-process-hz.png"
                  w="100%"
                />
              </Box>
            </VStack>
          </Box>

          {/* Right Section - Steps Container */}
          <Box flex="1" maxW={{ base: "100%", lg: "55%" }}>
            {/* Mobile: Styled accordion container */}
            <Box display={{ base: "block", md: "none" }}>
              <Box bg="rgba(255, 255, 255, 0.05)" borderRadius="24px" p={6}>
                <Accordion.Root collapsible>
                  {processSteps.map((step, index) => (
                    <Accordion.Item
                      key={index}
                      bg="transparent"
                      borderBottom={
                        index !== processSteps.length - 1 ? "1px solid" : "none"
                      }
                      borderColor="rgba(255, 255, 255, 0.1)"
                      pb={index !== processSteps.length - 1 ? 6 : 0}
                      pt={index > 0 ? 6 : 0}
                      value={step.step}
                    >
                      <Accordion.ItemTrigger
                        alignItems="center"
                        bg="transparent"
                        cursor={"pointer"}
                        display="flex"
                        justifyContent="space-between"
                        px={0}
                        py={3}
                        w="full"
                      >
                        <Heading
                          as="h3"
                          color="orangeCustom"
                          fontFamily="poppins"
                          fontSize={{ base: "xl", md: "2xl" }}
                          fontWeight="semibold"
                        >
                          {step.step}
                        </Heading>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent bg="transparent">
                        <Accordion.ItemBody bg="transparent">
                          <VStack align="start" gap={4}>
                            <Heading
                              as="h4"
                              color="offWhite"
                              fontFamily="poppins"
                              fontSize={{ base: "lg", md: "xl" }}
                              fontWeight="medium"
                            >
                              {step.title}
                            </Heading>

                            <Text
                              color="offWhite"
                              fontSize={{ base: "sm", md: "md" }}
                              lineHeight="1.6"
                            >
                              {step.description}
                            </Text>

                            {step.highlights && (
                              <VStack align="start" gap={2} mt={2} w="full">
                                {step.highlights.map(
                                  (highlight, highlightIndex) => (
                                    <HStack
                                      key={highlightIndex}
                                      align="center"
                                      gap={3}
                                    >
                                      <Box
                                        bg="orangeCustom"
                                        borderRadius="full"
                                        flexShrink={0}
                                        h={2}
                                        w={2}
                                      />
                                      <Text
                                        color="offWhite"
                                        fontSize={{ base: "xs", md: "sm" }}
                                        fontWeight="medium"
                                      >
                                        {highlight}
                                      </Text>
                                    </HStack>
                                  ),
                                )}
                              </VStack>
                            )}

                            {step.showButton && (
                              <Box mt={4}>
                                <PrimaryButton
                                  fontSize="sm"
                                  icon={
                                    <Icon h={3}>
                                      <FaChevronRight />
                                    </Icon>
                                  }
                                  label="Book A Call Now"
                                  minHeight={40}
                                  px={16}
                                  trackConversion={true}
                                  url="https://cal.com/innovativefoxes/innovative-foxes-introduction"
                                  variation="secondary"
                                />
                              </Box>
                            )}
                          </VStack>
                        </Accordion.ItemBody>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </Box>
            </Box>

            {/* Desktop/Tablet: Scrollable box with styling */}
            <Box
              bg="rgba(255, 255, 255, 0.05)"
              borderRadius="24px"
              css={{
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#FF6B35",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#e55a2b",
                },
              }}
              display={{ base: "none", md: "block" }}
              h={{ base: "auto", lg: "625px" }}
              maxH={{ base: "70vh", lg: "625px" }}
              overflowY="auto"
              p={{ base: 6, md: 8 }}
            >
              <VStack align="stretch" gap={8}>
                {processSteps.map((step, index) => (
                  <Box
                    key={index}
                    borderBottom={
                      index !== processSteps.length - 1 ? "1px solid" : "none"
                    }
                    borderColor="rgba(255, 255, 255, 0.1)"
                    pb={index !== processSteps.length - 1 ? 8 : 0}
                  >
                    <VStack align="start" gap={4}>
                      <Heading
                        as="h3"
                        color="orangeCustom"
                        fontFamily="poppins"
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="semibold"
                      >
                        {step.step}
                      </Heading>

                      <Heading
                        as="h4"
                        color="offWhite"
                        fontFamily="poppins"
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="medium"
                      >
                        {step.title}
                      </Heading>

                      <Text
                        color="offWhite"
                        fontSize={{ base: "sm", md: "md" }}
                        lineHeight="1.6"
                      >
                        {step.description}
                      </Text>

                      {step.highlights && (
                        <VStack align="start" gap={2} mt={2} w="full">
                          {step.highlights.map((highlight, highlightIndex) => (
                            <HStack key={highlightIndex} align="center" gap={3}>
                              <Box
                                bg="orangeCustom"
                                borderRadius="full"
                                flexShrink={0}
                                h={2}
                                w={2}
                              />
                              <Text
                                color="offWhite"
                                fontSize={{ base: "xs", md: "sm" }}
                                fontWeight="medium"
                              >
                                {highlight}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>
                      )}

                      {step.showButton && (
                        <Box mt={4}>
                          <PrimaryButton
                            fontSize="sm"
                            icon={
                              <Icon h={3}>
                                <FaChevronRight />
                              </Icon>
                            }
                            label="Book A Call Now"
                            minHeight={40}
                            px={16}
                            trackConversion={true}
                            url="https://cal.com/innovativefoxes/innovative-foxes-introduction"
                            variation="secondary"
                          />
                        </Box>
                      )}
                    </VStack>
                  </Box>
                ))}
              </VStack>
            </Box>
          </Box>
        </Flex>
      </CustomContainer>
    </Box>
  );
};

export default OurProcess;
