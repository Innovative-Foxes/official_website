"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

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

interface CarouselProps {
  slideContent: TeamMember[];
}

const Carousel: React.FC<CarouselProps> = ({ slideContent }) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  // Mobile view - render all content as a simple list
  if (isMobile) {
    return (
      <VStack align="stretch" gap={12} w="100%">
        {slideContent.map((member) => (
          <Box key={member.id} p={4}>
            <Flex direction="column" gap={6} w="100%">
              {/* Content Section */}
              <VStack align="start" gap={4}>
                <Text fontSize="3xl" fontWeight="bold">
                  {member.greeting}
                </Text>

                <Text fontSize="lg" fontWeight="medium">
                  {member.introduction}
                </Text>

                {/* Image Section */}
                <Box w="100%">
                  <Image
                    alt={`${member.name} profile`}
                    borderRadius="16px"
                    maxW="400px"
                    src={member.image}
                    w="100%"
                  />
                </Box>

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
              <VStack align="start" gap={3} w="100%">
                <Text fontSize="lg" fontWeight="bold">
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
                      <Text fontSize="md">{specialty}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>

              {/* Languages Section */}
              <VStack align="start" gap={3} w="100%">
                <Text fontSize="lg" fontWeight="bold">
                  Languages
                </Text>
                <VStack align="start" gap={3} w="100%">
                  <Text fontSize="md">
                    {member.languages.map((language, index) => (
                      <Text key={index} as="span">
                        {language}
                        {member.languages.length > 1 &&
                          index !== member.languages.length - 1 &&
                          ", "}
                      </Text>
                    ))}
                  </Text>
                </VStack>
              </VStack>
            </Flex>
          </Box>
        ))}
      </VStack>
    );
  }

  // Desktop view - use Swiper slider
  return (
    <>
      <Swiper
        className="teamSwiper"
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        slidesPerView={1}
      >
        {slideContent.map((member) => (
          <SwiperSlide key={member.id}>
            <Flex
              alignItems="start"
              direction={{ base: "column", lg: "row" }}
              gap={{ base: 8, lg: 16 }}
              justifyContent="space-between"
              p={{ base: 2, md: 8 }}
            >
              {/* Left Column - Content */}
              <VStack
                alignItems="start"
                gap={4}
                maxW={{ base: "100%", lg: "700px" }}
              >
                <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
                  {member.greeting}
                </Text>

                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                  {member.introduction}
                </Text>

                {member.description.map((paragraph, index) => (
                  <Text
                    key={index}
                    color="gray.700"
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="tall"
                  >
                    {paragraph}
                  </Text>
                ))}
              </VStack>

              <Box
                minW={{ base: "100%", lg: "fit-content" }}
                order={{ base: -1, lg: 0 }}
              >
                {/* Right Column - Image and Specialties */}
                <VStack alignItems={{ base: "start", lg: "start" }} gap={6}>
                  <Image
                    alt={`${member.name} profile`}
                    borderRadius="16px"
                    maxW={{ base: "full", lg: "325px" }}
                    src={member.image}
                    w="100%"
                  />

                  {/* Specialties */}
                  <VStack
                    alignItems="start"
                    display={{ base: "none", md: "flex" }}
                    gap={2}
                    width="100%"
                  >
                    <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="bold">
                      Specialties
                    </Text>
                    <VStack alignItems="start" gap={3} width="100%">
                      {member.specialties.map((specialty, index) => (
                        <HStack key={index} alignItems="center" gap={3}>
                          <Image
                            alt="Check mark"
                            height="18px"
                            src="/images/svgs/check-orange.svg"
                            width="18px"
                          />
                          <Text fontSize={{ base: "sm", md: "md" }}>
                            {specialty}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>

                  {/* Languages */}
                  <VStack
                    alignItems="start"
                    display={{ base: "none", md: "flex" }}
                    gap={2}
                    width="100%"
                  >
                    <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="bold">
                      Languages
                    </Text>
                    <VStack alignItems="start" gap={3} width="100%">
                      <Text as={"span"}>
                        {member.languages.map((language, index) => (
                          <Text
                            key={index}
                            as={"span"}
                            fontSize={{ base: "sm", md: "md" }}
                          >
                            {language}
                            {member.languages.length > 1 &&
                              index !== member.languages.length - 1 &&
                              ", "}
                          </Text>
                        ))}
                      </Text>
                    </VStack>
                  </VStack>
                </VStack>
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
