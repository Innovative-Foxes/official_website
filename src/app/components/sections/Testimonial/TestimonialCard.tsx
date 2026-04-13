import { Box, Flex, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import { FlexProps } from "@chakra-ui/react";

export interface TestimonialCardProps extends FlexProps {
  quote: string;
  author: string;
  company: string;
  companyLink?: string;
}

const TestimonialCard = ({
  quote,
  author,
  company,
  companyLink,
}: TestimonialCardProps) => {
  return (
    <Flex
      align="stretch"
      bg="white"
      borderRadius="2xl"
      direction={{ base: "column", md: "row" }}
      gap={0}
      mx="auto"
      p={8}
      boxShadow="-10px 20px 36px #00000008, -8px 8px 27px #0000000d, -2px 2px 15px #0000000f"
    >
      {/* Orange accent bar */}
      <Box
        bg="orangeCustom"
        borderRadius="full"
        display={{ base: "none", md: "block" }}
        flexShrink={0}
        width="3px"
      />
      <VStack
        align="flex-start"
        gap={4}
        pl={{ base: 0, md: 6 }}
        pt={{ base: 0, md: 1 }}
      >
        {/* Quote icon */}
        <Icon color="orangeCustom" fontSize={{ base: "30px", md: "30px" }}>
          <FaQuoteLeft />
        </Icon>
        {/* Quote text */}
        <Text color="darkBlueCustom" fontSize="md">
          {quote}
        </Text>
        <VStack align="flex-start" gap={2}>
          {/* Attribution */}
          <Flex align="center" gap={4}>
            <Box bg="orangeCustom" height="2px" width="32px" />
            <Text
              color="darkBlueCustom"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              {author}{" "}
              <Text as="span" color="orangeCustom">
                @{" "}
                {companyLink ? (
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    href={companyLink}
                    target="_blank"
                  >
                    {company}
                  </Link>
                ) : (
                  company
                )}
              </Text>
            </Text>
          </Flex>
          {/* Stars */}
          <Flex gap={1}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                color="orangeCustom"
                fontSize={{ base: "15px", md: "15px" }}
              >
                <FaStar />
              </Icon>
            ))}
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default TestimonialCard;
