import { Badge, Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import FixedNavbar from "../../components/ui/FixedNavbar/FixedNavbar";
import Footer from "../../components/sections/Footer/Footer";
import MacbookMockup from "../components/MacbookMockup/MacbookMockup";

const scopeItems = [
  "Email Development",
  "Landing Pages",
  "Marketo",
  "Design System",
  "Front-end Development",
];

export default function WorktechPage() {
  return (
    <Box>
      <FixedNavbar />
      <Box as="main" pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }}>
        <Box maxW="1000px" mx="auto" px={{ base: 4, lg: 4, xl: 0 }}>
          <Box>
            <Link
              href="/"
              display="inline-flex"
              alignItems="center"
              gap={2}
              fontSize="sm"
              color="gray.500"
              mb={6}
              _hover={{ color: "gray.800" }}
              transition="color 0.2s ease"
            >
              <FiArrowLeft />
              Back to home
            </Link>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              lineHeight="shorter"
              textTransform="uppercase"
              mb={4}
            >
              Worktech
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              lineHeight="tall"
            >
              A placeholder description for the Worktech project. This will be
              updated with real project details — the story behind the work, the
              challenges solved, and the outcomes delivered.
            </Text>
            {/* Scope */}
            <Box mt={8}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="0.1em"
                textTransform="uppercase"
                mb={3}
              >
                Scope
              </Text>
              <Flex wrap="wrap" gap={2}>
                {scopeItems.map((item) => (
                  <Badge fontSize="xs" p={2} py={1} key={item} variant="subtle">
                    {item}
                  </Badge>
                ))}
              </Flex>
            </Box>
          </Box>
          {/* Feature callout */}
          <Box mt={{ base: 16, md: 24 }}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              lineHeight="1.2"
              letterSpacing="-0.02em"
              mb={4}
            >
              Add your feature
              <Box as="span" color="orangeCustom">
                {" "}
                heading{" "}
              </Box>
              here
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.500"
              lineHeight="1.75"
              maxW="520px"
            >
              Describe the feature shown in the mockup below. What problem does
              it solve? What makes it stand out?
            </Text>
          </Box>
          {/* MacBook mockup 1 */}
          <Box mt={{ base: 16, md: 24 }}>
            <MacbookMockup>
              <Image
                src="/images/jpg/showcase-1-hero.jpg"
                alt="Project preview"
                w="100%"
                h="100%"
                objectFit="cover"
                display="block"
              />
            </MacbookMockup>
          </Box>
          {/* MacBook mockup 2 */}
          <Box mt={{ base: 16, md: 24 }}>
            <MacbookMockup>
              <Image
                src="/images/jpg/showcase-1-countdown.jpg"
                alt="Project preview"
                w="100%"
                h="100%"
                objectFit="cover"
                display="block"
              />
            </MacbookMockup>
          </Box>
          {/* MacBook mockup 3 */}
          <Box mt={{ base: 16, md: 24 }}>
            <MacbookMockup>
              <Image
                src="/images/jpg/showcase-1-cards.jpg"
                alt="Project preview"
                w="100%"
                h="100%"
                objectFit="cover"
                display="block"
              />
            </MacbookMockup>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
