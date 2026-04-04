import { Box, Flex, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export interface TestimonialCardProps {
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
      boxShadow="0 8px 40px rgba(0, 0, 0, 0.10)"
      direction={{ base: "column", md: "row" }}
      gap={0}
      mx="auto"
      p={{ base: 8, md: 12 }}
    >
      {/* Orange accent bar */}
      <Box
        bg="orangeCustom"
        borderRadius="full"
        display={{ base: "none", md: "block" }}
        flexShrink={0}
        width="4px"
      />
      <VStack
        align="flex-start"
        gap={6}
        pl={{ base: 0, md: 12 }}
        pt={{ base: 0, md: 1 }}
      >
        {/* Quote icon */}
        <Icon color="orangeCustom" fontSize={{base: "30px", md: "40px"}}>
          <FaQuoteLeft />
        </Icon>
        {/* Quote text */}
        <Text color="darkBlueCustom" fontSize={{ base: "md", md: "xl" }}>
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
              <Icon key={i} color="orangeCustom" fontSize={{base: "15px", md: "20px"}}>
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
