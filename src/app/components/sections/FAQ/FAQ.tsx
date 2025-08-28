"use client";

import {
  Accordion,
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Link,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";

import CustomContainer from "../../ui/Container/Container";
import { FaChevronRight } from "react-icons/fa6";
import { PrimaryButton } from "../../ui/Button/Button";

interface FAQItem {
  value: string;
  title: string;
  text: string;
}

const faqItems: FAQItem[] = [
  {
    value: "what-we-build",
    title: "What exactly do you build for Marketo?",
    text: "We specialize in creating custom Marketo landing page templates and email templates that are fully responsive, conversion-optimized, and brand-aligned. Our templates are built with clean HTML/CSS code, include guided landing page functionality, and are designed to integrate seamlessly with your existing Marketo instance and marketing automation workflows.",
  },
  // {
  //   value: "timeline-delivery",
  //   title: "How long does it take to complete a project?",
  //   text: "Timeline depends on project scope. A single landing page template typically takes 3-5 business days, while email template sets take 2-3 days. Larger projects with multiple templates or complex functionality may take 1-2 weeks. We always provide realistic timelines upfront and keep you updated throughout the process.",
  // },
  {
    value: "marketo-compatibility",
    title: "Are your templates compatible with all Marketo features?",
    text: "Absolutely! All our templates are built specifically for Marketo and include full compatibility with guided landing pages, email templates, dynamic content, tokens, and A/B testing. We ensure seamless integration with Marketo's form functionality, tracking pixels, and all standard marketing automation features.",
  },
  // {
  //   value: "revisions-support",
  //   title: "What's included in terms of revisions and ongoing support?",
  //   text: "Every project includes unlimited revisions during the initial development phase until you're completely satisfied. After delivery, we provide 30 days of complimentary support for any technical issues or minor adjustments. We also offer ongoing maintenance packages for clients who need regular updates or additional templates.",
  // },
  {
    value: "brand-customization",
    title: "Can you match our existing brand and design requirements?",
    text: "Yes! We work closely with your brand guidelines, existing design assets, and style preferences to create templates that perfectly align with your brand identity. Whether you have a complete brand guide or just a logo and color palette, we'll ensure your Marketo templates maintain consistent branding across all touchpoints.",
  },
  {
    value: "not-marketo",
    title: "We don’t use Marketo. Can you still work with us?",
    text: "Absolutely. While Marketo is our primary focus, our team is also skilled in other marketing automation platforms like Salesforce Marketing Cloud (SFMC) and Pardot. If your team is on a different platform, we’re happy to discuss your setup and explore how we can best support your goals.",
  },
];

const FAQ = () => {
  const [accordionValue, setAccordionValue] = useState<string[]>([]);

  const handleValueChange = (details: { value: string[] }) => {
    setAccordionValue(details.value);
  };

  return (
    <Box bg="white" my={{ base: 16, md: 40 }}>
      <CustomContainer>
        <Grid
          gap={{ base: 8, md: 16 }}
          templateColumns={{ base: "1fr", lg: "1fr 1.5fr" }}
        >
          {/* Left Column - Booking Card */}
          <GridItem>
            <Card.Root
              bg="offWhite"
              borderRadius="2xl"
              boxShadow="-4px 4px 12px 0px rgba(0, 0, 0, 0.15)"
              p={{ base: 6, md: 8 }}
            >
              <Card.Body>
                <VStack align="start" gap={6}>
                  {/* Profile Image Placeholder */}
                  <Box
                    alignItems="center"
                    bg="blue"
                    borderRadius="full"
                    display="flex"
                    h={16}
                    justifyContent="center"
                    w={16}
                  >
                    <Image
                      alt="Profile"
                      src={"/images/png/tyrell-profile.png"}
                    />
                  </Box>

                  <VStack align="start" gap={3}>
                    <Heading
                      as="h3"
                      color="blue"
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="semibold"
                    >
                      Book an intro call
                    </Heading>
                    <Text color="blue" fontSize="md" lineHeight="tall">
                      Explore what working together could look like, and whether
                      it&apos;s the right move.
                    </Text>
                  </VStack>

                  <PrimaryButton
                    icon={
                      <Icon h={4}>
                        <FaChevronRight />
                      </Icon>
                    }
                    label="Let's chat"
                    url="https://cal.com/innovativefoxes/innovative-foxes-introduction"
                    variation="primary"
                  />

                  <VStack align="start" gap={1}>
                    <Text color="blue" fontSize="sm">
                      Hate calls? 👇
                    </Text>
                    <Link
                      _hover={{ textDecoration: "underline" }}
                      color="blue"
                      fontSize="sm"
                      fontWeight="medium"
                      href="mailto:hello@innovativefoxes.com"
                    >
                      hello@innovativefoxes.com
                    </Link>
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>
          </GridItem>

          {/* Right Column - FAQ */}
          <GridItem mt={{ base: 8, md: 0 }}>
            <VStack align="start" gap={8}>
              <Heading
                as="h2"
                color="blue"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="medium"
                textAlign={{ base: "center", lg: "left" }}
              >
                Frequently Asked Questions
              </Heading>

              <Accordion.Root
                collapsible
                multiple
                value={accordionValue}
                variant="plain"
                width="100%"
                onValueChange={handleValueChange}
              >
                {faqItems.map((item, index) => (
                  <Accordion.Item
                    key={item.value}
                    borderBottom="1px solid"
                    borderColor="blue"
                    borderTop={index === 0 ? "1px solid" : "none"}
                    borderTopColor="blue"
                    py={4}
                    value={item.value}
                  >
                    <Accordion.ItemTrigger
                      _hover={{ bg: "gray.50" }}
                      cursor="pointer"
                      p={4}
                      transition="background-color 0.2s"
                    >
                      <Span
                        color="blue"
                        flex="1"
                        fontSize={{ base: "sm", md: "lg" }}
                        fontWeight="medium"
                        textAlign="left"
                      >
                        {item.title}
                      </Span>
                      <Box color="blue" fontSize="lg">
                        {accordionValue.includes(item.value) ? (
                          <Icon h={4} w={4}>
                            <FaMinus />
                          </Icon>
                        ) : (
                          <Icon h={4} w={4}>
                            <FaPlus />
                          </Icon>
                        )}
                      </Box>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                      <Accordion.ItemBody p={4} pt={0}>
                        <Text
                          color="blue"
                          fontSize={{ base: "sm", md: "md" }}
                          lineHeight="tall"
                        >
                          {item.text}
                        </Text>
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </VStack>
          </GridItem>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default FAQ;
