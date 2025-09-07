"use client";
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";
import { FaRocket } from "react-icons/fa";

import {
  FaDesktop,
  FaEnvelope,
  FaGraduationCap,
  FaSquareCheck,
  FaSwatchbook,
} from "react-icons/fa6";

const OurAdvantage = () => {
  // Cards
  const cards = [
    {
      id: 1,
      title: "Custom-Built, Brand-Perfect",
      content:
        "Stop wrestling with generic off the shelf templates. We build Marketo templates 100% tailored to your brand—designed to look, feel, and perform exactly how your marketers need with cutting edge flexibility to ensure you can achieve those campaign goals.",
      icon: <FaRocket />,
    },
    {
      id: 2,
      title: "Subscription/Preference Centers",
      content:
        "Give your audience more control over their communication settings with a custom-built subscription/preference center. Including fully branded forms and custom thank you messaging that matches your brand.",
      icon: <FaSquareCheck />,
    },
    {
      id: 3,
      title: "High-Impact Emails",
      content:
        "Our email templates are built for flexibility. Swap backgrounds, update layouts, change button colors, or refresh imagery on the fly. Whatever your campaign demands, your emails will deliver.",
      icon: <FaEnvelope />,
    },
    {
      id: 4,
      title: "Pixel-Perfect Development",
      content:
        "Got a design file? We’ll bring it to life. Our team transforms AdobeXD, Figma, Sketch, or Photoshop designs into flawless, responsive, blazing-fast templates that look great everywhere.",
      icon: <FaDesktop />,
    },
    {
      id: 5,
      title: "On-Brand Design That Converts",
      content:
        "We don’t just design for looks, we design for results. Every template is modern, conversion-focused, and deeply rooted in your brand guidelines-helping your campaigns transforming engagement into real outcomes.",
      icon: <FaSwatchbook />,
    },
    {
      id: 6,
      title: "Training & Handoff",
      content:
        "Every template comes with a training session for your team. We’ll walk you through every feature so your marketers feel confident using the new template from day one.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <Box
      bgColor={"offWhite"}
      mt={{ base: 24, md: 40, lg: 0 }}
      pb={{ base: 24, md: 32 }}
      pt={{ base: 16, md: 32 }}
    >
      <CustomContainer>
        <Box color={"darkBlueCustom"}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={"semibold"}
            lineHeight={"shorter"}
            mb={2}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            Our Unique{" "}
            <Text as="span" color="orangeCustom" fontWeight={"semibold"}>
              Advantage
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            m="auto"
            maxW={{ base: "auto", md: 600 }}
            textAlign={"center"}
          >
            We do not use pre-built templates. Everything we produce is 100%
            custom and created to be brand specific.
          </Text>
        </Box>
        <Box mt={16}>
          <Grid
            gap={{ base: "8", md: "12" }}
            gapY={{ base: "8", md: "16" }}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          >
            {cards.map((card) => (
              <Card.Root
                key={card.id}
                bg={"none"}
                border={"none"}
                textAlign={"center"}
              >
                <Card.Body>
                  <VStack>
                    <Flex
                      alignItems={"center"}
                      borderColor={"#DED7CA"}
                      borderRadius={"8px"}
                      borderWidth={"2px"}
                      justifyContent={"center"}
                      mb={2}
                      p={{ base: 3, md: 4 }}
                    >
                      <Icon color="orangeCustom" size="xl">
                        {card.icon}
                      </Icon>
                    </Flex>
                    <Heading as={"h3"}>{card.title}</Heading>
                    <Text fontSize={"md"}>{card.content}</Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default OurAdvantage;
