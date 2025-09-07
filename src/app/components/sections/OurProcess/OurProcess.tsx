"use client";
import {
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

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

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
          alignItems={"center"}
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 8, md: 12 }}
          justifyContent={"space-between"}
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
            </VStack>
          </Box>

          {/* Right Section - Steps Container */}
          <Box flex="1" maxW={{ base: "100%", lg: "55%" }}>
            <Box>
              <>
                <Swiper
                  className="mySwiper"
                  modules={[Pagination, Navigation]}
                  navigation={true}
                  pagination={{
                    type: "progressbar",
                  }}
                >
                  {processSteps.map((step, index) => (
                    <SwiperSlide key={index}>
                      <Box p={4}>
                        <VStack align="start" gap={{ base: 2, md: 4 }}>
                          <Heading
                            as="h3"
                            color="orangeCustom"
                            fontFamily="poppins"
                            fontSize={{ base: "2xl", md: "3xl" }}
                            fontWeight="semibold"
                          >
                            {step.step}
                          </Heading>

                          <Heading
                            as="h4"
                            color="darkBlueCustom"
                            fontFamily="poppins"
                            fontSize={{ base: "lg", md: "xl" }}
                            fontWeight="medium"
                          >
                            {step.title}
                          </Heading>

                          <Text
                            color="darkBlueCustom"
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
                                      color="darkBlueCustom"
                                      fontSize={"sm"}
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
                              />
                            </Box>
                          )}
                        </VStack>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            </Box>
          </Box>
        </Flex>
      </CustomContainer>
    </Box>
  );
};

export default OurProcess;
