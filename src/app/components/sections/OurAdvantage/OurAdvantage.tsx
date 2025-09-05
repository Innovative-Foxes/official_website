import { Box, Card, Grid, Heading, Icon, Text } from "@chakra-ui/react";
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
      title: "Fully Custom Branded Templates",
      content:
        "Stop wrestling with generic off the shelf templates. We build Marketo templates 100% tailored to your brand—designed to look, feel, and perform exactly how your marketers need with cutting edge flexibility to ensure your marketers can achieve their campaign goals.",
      icon: (
        <Icon color="orangeCustom" size="lg">
          <FaRocket />,
        </Icon>
      ),
    },
    {
      id: 2,
      title: "Subscription & Preference Centers",
      content:
        "Give your audience more control over their communication settings with custom-built subscription and preference centers. Including fully branded forms and custom thank you messaging that completely matches your brand.",
      icon: (
        <Icon color="orangeCustom" size="lg">
          <FaSquareCheck />,
        </Icon>
      ),
    },
    {
      id: 3,
      title: "High-Impact Emails",
      content:
        "Our email templates are built for flexibility. Swap backgrounds, update layouts, change button colors, or refresh imagery on the fly. Whatever your campaign demands, your emails will deliver.",
      icon: (
        <Icon color="orangeCustom" size="lg">
          <FaEnvelope />,
        </Icon>
      ),
    },
    {
      id: 4,
      title: "Pixel-Perfect Development",
      content:
        "Got a design file? We’ll bring it to life. Our team transforms AdobeXD, Figma, Sketch, or Photoshop designs into flawless, responsive, lightning-fast templates that look great everywhere.",
      icon: (
        <Icon color="orangeCustom" size="lg">
          <FaDesktop />,
        </Icon>
      ),
    },
    {
      id: 5,
      title: "On-Brand Design That Converts",
      content:
        "We don’t just design for looks, we design for results. Every template is modern, conversion-focused, and deeply rooted in your brand guidelines-helping your campaigns transforming engagement into real outcomes.",
      icon: (
        <Icon color="orangeCustom" size="lg">
          <FaSwatchbook />,
        </Icon>
      ),
    },
    {
      id: 6,
      title: "Training & Handoff",
      content:
        "Every template comes with a complimentary training session for your team. We’ll walk you through every feature so your marketers feel confident using the new template from day one.",
      icon: (
        <Icon color="orangeCustom" size="lg">
          <FaGraduationCap />,
        </Icon>
      ),
    },
  ];

  return (
    <Box
      bg={"darkBlueCustom"}
      mt={{ base: 24, md: 40 }}
      pb={{ base: 16, md: 32 }}
      pt={{ base: 16, md: 24 }}
    >
      <CustomContainer>
        <Box color={"offWhite"}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={"medium"}
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
          <Box mt={12}>
            <Grid
              gap={6}
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              w="full"
            >
              {cards.map((card) => (
                <Card.Root
                  key={card.id}
                  _hover={{
                    transform: "translateY(-4px)",
                    shadow: "lg",
                  }}
                  bg={"offWhite"}
                  p={8}
                  size="md"
                  transition="all 0.2s"
                  variant="elevated"
                >
                  <Card.Header pb={2}>
                    <Box
                      alignItems={"center"}
                      borderColor={"orangeCustom"}
                      borderRadius={"lg"}
                      borderWidth={"2px"}
                      display={"flex"}
                      h={"55px"}
                      justifyContent={"center"}
                      mb={2}
                      p={3}
                      w={"55px"}
                    >
                      {card.icon}
                    </Box>
                    <Heading
                      color="darkBlueCustom"
                      fontWeight={"semibold"}
                      size="lg"
                    >
                      {card.title}
                    </Heading>
                  </Card.Header>
                  <Card.Body pt={0}>
                    <Text color="gray.600" fontSize="md">
                      {card.content}
                    </Text>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default OurAdvantage;
