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
  title: "Terms & Conditions | Innovative Foxes Web Studio",
  description:
    "Terms of Service for Innovative Foxes Web Studio - Read our terms and conditions for using our services.",
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

export default function TermsPage() {
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
              Terms & Conditions
            </Heading>
            <Text
              color="gray.600"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.6"
              maxW="2xl"
              mx="auto"
            >
              The Innovative Foxes Web Studio Terms of Service
            </Text>
          </Box>

          {/* Content */}
          <Box bg="white" p={{ base: 8, md: 12 }} rounded="xl" shadow="sm">
            <VStack align="stretch" gap={8}>
              {/* Last Modified */}
              <Box>
                <Text color="gray.600" fontSize="md" fontStyle="italic" mb={4}>
                  This Agreement was last modified on November 27, 2023.
                </Text>
                <Text
                  color="gray.700"
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="1.7"
                >
                  Please read these Terms of Service completely using{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color="blue.600"
                    fontWeight="500"
                    href="https://innovativefoxes.com"
                  >
                    https://innovativefoxes.com
                  </Link>
                  , which is owned and operated by Innovative Foxes Web Studio.
                  This Agreement documents the legally binding terms and
                  conditions attached to the use of the Site at{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color="blue.600"
                    fontWeight="500"
                    href="https://innovativefoxes.com"
                  >
                    https://innovativefoxes.com
                  </Link>
                  .
                </Text>
                <Text color="gray.700" fontSize="md" lineHeight="1.7" mt={4}>
                  By using or accessing the Site in any way, viewing or browsing
                  the Site, or adding your content to the Site, you agree to be
                  bound by these Terms of Service.
                </Text>
              </Box>

              <Separator />

              {/* Information */}
              <Box>
                <Heading
                  as="h2"
                  color="gray.800"
                  fontFamily="var(--font-poppins)"
                  fontWeight="600"
                  mb={4}
                  size="lg"
                >
                  Information
                </Heading>
                <Text color="gray.700" fontSize="md" lineHeight="1.7">
                  Innovative Foxes Web Studio provides information on this
                  website &apos;as is&apos;. Efforts are made to ensure the
                  information is accurate and current at the time of
                  publication. However, Innovative Foxes Web Studio accepts no
                  liability for any errors or omissions. Suitable professional
                  advice should be sought when making decisions. Innovative
                  Foxes Web Studio will not be liable for any loss of profits or
                  damage of any kind (including consequential or economic loss)
                  as a result of information contained on this website.
                </Text>
              </Box>

              <Separator />

              {/* Intellectual Property */}
              <Box>
                <Heading
                  as="h2"
                  color="gray.800"
                  fontFamily="var(--font-poppins)"
                  fontWeight="600"
                  mb={4}
                  size="lg"
                >
                  Intellectual Property
                </Heading>
                <Text color="gray.700" fontSize="md" lineHeight="1.7">
                  The Site and its original content are the sole property of
                  Innovative Foxes Web Studio. They are, as such, fully
                  protected by the appropriate international copyright and other
                  intellectual property rights laws.
                </Text>
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
                  Our Site does contain several links to other websites and
                  online resources that are not owned or controlled by
                  Innovative Foxes Web Studio.
                </Text>
                <Text color="gray.700" fontSize="md" lineHeight="1.7" mt={4}>
                  Innovative Foxes Web Studio has no control over, therefore
                  cannot assume responsibility for, the content or general
                  practices of any third-party sites and services. Consequently,
                  we strongly advise you to read the entire terms and conditions
                  and privacy policy of any site that you visit due to following
                  a link that is posted on our site.
                </Text>
              </Box>

              <Separator />

              {/* Changes to Agreement */}
              <Box>
                <Heading
                  as="h2"
                  color="gray.800"
                  fontFamily="var(--font-poppins)"
                  fontWeight="600"
                  mb={4}
                  size="lg"
                >
                  Changes to This Agreement
                </Heading>
                <VStack align="stretch" gap={4}>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    Innovative Foxes Web Studio reserves the right to modify
                    these Terms of Service. We do so by posting and drawing
                    attention to the updated terms on the Site. Your decision to
                    continue to visit and use the Site after such changes have
                    been made constitutes your formal acceptance of the new
                    Terms of Service.
                  </Text>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7">
                    Therefore, we ask that you check and review this Agreement
                    for such changes on an occasional basis. Should you not
                    agree to any provision of this Agreement or any changes we
                    make to this Agreement, we ask and advise that you do not
                    use or continue to access the Innovative Foxes Web Studio
                    site immediately.
                  </Text>
                </VStack>
              </Box>

              <Separator />

              {/* Contact Us */}
              <Box>
                <Heading
                  as="h2"
                  color="gray.800"
                  fontFamily="var(--font-poppins)"
                  fontWeight="600"
                  mb={4}
                  size="lg"
                >
                  Contact Us
                </Heading>
                <Text color="gray.700" fontSize="md" lineHeight="1.7">
                  If you have any questions about this Agreement, please feel
                  free to contact us at{" "}
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    color="blue.600"
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
