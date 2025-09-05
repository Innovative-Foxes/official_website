import {
  Box,
  Container,
  Heading,
  Link,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Innovative Foxes Web Studio",
  description:
    "Privacy policy for Innovative Foxes Web Studio - Learn how we collect, use, and protect your information.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function PrivacyPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={{ base: 12, md: 16 }}>
      <Container m={"auto"} maxW="4xl" px={{ base: 6, md: 8 }}>
        <VStack align="stretch" gap={8}>
          {/* Header */}
          <Box mb={8} textAlign="center">
            <Heading
              as="h1"
              color="gray.800"
              fontFamily="var(--font-poppins)"
              fontWeight="700"
              mb={4}
              size={{ base: "xl", md: "2xl" }}
            >
              Privacy Policy
            </Heading>
            <Text
              color="gray.600"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.6"
              maxW="2xl"
              mx="auto"
            >
              This privacy policy discloses the privacy practices of Innovative
              Foxes Web Studio.
            </Text>
          </Box>

          {/* Content */}
          <Box bg="white" p={{ base: 8, md: 12 }} rounded="xl" shadow="sm">
            <VStack align="stretch" gap={8}>
              {/* Introduction */}
              <Box>
                <Text
                  color="gray.700"
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="1.7"
                  mb={4}
                >
                  This privacy policy applies solely to information collected by
                  this website. It will notify you of the following:
                </Text>
                <VStack align="stretch" gap={2} pl={4}>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    • What personally identifiable information is collected from
                    you through the website, how it is used and with whom it may
                    be shared.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    • What choices are available to you regarding the use of
                    your data.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    • The security procedures are in place to protect against
                    the misuse of your information.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    • How you can correct any inaccuracies in the information.
                  </Text>
                </VStack>
              </Box>

              <Separator />

              {/* Links to Other Websites */}
              <Box>
                <Heading
                  as="h2"
                  color="gray.800"
                  fontFamily="var(--font-poppins)"
                  fontWeight="600"
                  mb={4}
                  size="lg"
                >
                  Links to Other Websites
                </Heading>
                <Text color="gray.700" fontSize="md" lineHeight="1.7">
                  Our website may contain links to other websites of interest.
                  However, once you have used these links to leave our site, you
                  should note that we do not have any control over that other
                  website. Therefore, we cannot be responsible for the
                  protection and privacy of any information which you provide
                  whilst visiting such sites and such sites are not governed by
                  this privacy statement. You should exercise caution and look
                  at the privacy statement applicable to the website in
                  question.
                </Text>
              </Box>

              <Separator />

              {/* Information Collection */}
              <Box>
                <Heading
                  as="h2"
                  color="gray.800"
                  fontFamily="var(--font-poppins)"
                  fontWeight="600"
                  mb={4}
                  size="lg"
                >
                  Information Collection, Use, and Sharing
                </Heading>
                <VStack align="stretch" gap={4}>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    We are the sole owners of the information collected on this
                    site. We only have access to/collect the information you
                    voluntarily give us via email or direct contact from you. We
                    will not sell or rent this information to anyone.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    We will use your information to respond to you regarding why
                    you contacted us. We will not share your information with
                    any third party outside of our organization other than
                    necessary to fulfill your request, e.g., ship an order.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    Unless you ask us not to, we may contact you via email in
                    the future to tell you about specials, new products or
                    services, or changes to this privacy policy.
                  </Text>
                </VStack>
              </Box>

              <Separator />

              {/* Access and Control */}
              <Box>
                <Heading
                  as="h2"
                  color="gray.800"
                  fontFamily="var(--font-poppins)"
                  fontWeight="600"
                  mb={4}
                  size="lg"
                >
                  Your Access to and Control Over Information
                </Heading>
                <Text color="gray.700" fontSize="md" lineHeight="1.7" mb={4}>
                  You may opt out of any future contacts from us at any time.
                  You can do the following at any time by contacting us via the
                  email address or contact form given on our website:
                </Text>
                <VStack align="stretch" gap={2} pl={4}>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    • See what data we have about you if any.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    • Change/correct any data we have about you.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    • Have us delete any data we have about you.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    • Express any concern you have about our use of your data.
                  </Text>
                </VStack>
              </Box>

              <Separator />

              {/* Security */}
              <Box>
                <Heading
                  as="h2"
                  color="gray.800"
                  fontFamily="var(--font-poppins)"
                  fontWeight="600"
                  mb={4}
                  size="lg"
                >
                  Security
                </Heading>
                <VStack align="stretch" gap={4}>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    We take precautions to protect your information. When you
                    submit sensitive information via the website, your
                    information is protected online and offline.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    While we use encryption to protect sensitive information
                    transmitted online, we also protect your information
                    offline. Only employees who need the information to perform
                    a specific job (for example, billing or customer service)
                    are granted access to personally identifiable information.
                    The computers/servers in which we store personally
                    identifiable information are kept in a secure environment.
                  </Text>
                </VStack>
              </Box>

              <Separator />

              {/* Updates */}
              <Box>
                <Heading
                  as="h2"
                  color="gray.800"
                  fontFamily="var(--font-poppins)"
                  fontWeight="600"
                  mb={4}
                  size="lg"
                >
                  Updates
                </Heading>
                <Text color="gray.700" fontSize="md" lineHeight="1.7" mb={4}>
                  Our Privacy Policy may change from time to time, and all
                  updates will be posted on this page.
                </Text>
                <Text color="gray.700" fontSize="md" lineHeight="1.7">
                  If you feel that we are not abiding by this privacy policy,
                  you should contact us immediately via e-mail{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color="blueCustom.600"
                    fontWeight="500"
                    href="mailto:hello@innovativefoxes.com"
                  >
                    hello@innovativefoxes.com
                  </Link>
                  .
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
