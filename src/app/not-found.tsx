import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PrimaryButton } from "./components/ui/Button/Button";

export default function NotFound() {
  return (
    <Box>
      <Box as="main">
        <Flex
          align="center"
          direction="column"
          justify="center"
          minH="100vh"
          px={{ base: 4, md: 8 }}
          textAlign="center"
        >
          <VStack gap={6} maxW="500px">
            <Link
              _hover={{ scale: "105%" }}
              animation={"ease-in-out"}
              animationDuration={"fastest"}
              href="/"
              outline={"none"}
              transition={"all"}
            >
              <Image alt="Logo" src="/images/png/hero-logo.png" w="80px" />
            </Link>

            {/* 404 Number */}
            <Heading
              as="h1"
              color="darkBlueCustom"
              fontSize={{ base: "8xl", md: "9xl" }}
              fontWeight="bold"
              lineHeight="0.8"
            >
              404
            </Heading>

            {/* Error Message */}
            <VStack gap={4}>
              <Heading
                as="h2"
                color="darkBlueCustom"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="semibold"
              >
                Page Not Found
              </Heading>

              <Text
                color="gray.600"
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.6"
              >
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
                It might have been moved, deleted, or you entered the wrong URL.
              </Text>
            </VStack>

            {/* Action Buttons */}
            <HStack
              flexDirection={{ base: "column", md: "row" }}
              gap={4}
              pt={4}
            >
              <PrimaryButton
                externalLink={false}
                label="Go Back Home"
                url="/"
                variation="primary"
              />

              <PrimaryButton
                label="Contact Us"
                url="mailto:hello@innovativefoxes.com"
                variation="secondary"
              />
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
