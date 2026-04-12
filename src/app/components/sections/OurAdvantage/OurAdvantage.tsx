"use client";
import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaDesktop,
  FaEnvelope,
  FaGraduationCap,
  FaRocket,
  FaSwatchbook,
} from "react-icons/fa";
import { FaSquareCheck } from "react-icons/fa6";
import CustomContainer from "../../ui/Container/Container";

const cards = [
  {
    id: 1,
    title: "Custom-Built, Brand-Perfect",
    content:
      "Stop wrestling with generic off-the-shelf templates. We build Marketo templates 100% tailored to your brand—designed to look, feel, and perform exactly how your marketers need.",
    icon: FaRocket,
  },
  {
    id: 2,
    title: "Subscription/Preference Centers",
    content:
      "Give your audience control over their communication preferences with a fully branded subscription center—complete with custom thank-you messaging that matches your identity.",
    icon: FaSquareCheck,
  },
  {
    id: 3,
    title: "High-Impact Emails",
    content:
      "Our email templates are built for flexibility. Swap backgrounds, update layouts, change button colors, or refresh imagery on the fly—whatever your campaign demands.",
    icon: FaEnvelope,
  },
  {
    id: 4,
    title: "Pixel-Perfect Development",
    content:
      "Got a design file? We'll bring it to life. Our team transforms Figma, AdobeXD, Sketch, or Photoshop designs into flawless, responsive, blazing-fast templates.",
    icon: FaDesktop,
  },
  {
    id: 5,
    title: "On-Brand Design That Converts",
    content:
      "We design for results. Every template is modern, conversion-focused, and deeply rooted in your brand guidelines—transforming engagement into real outcomes.",
    icon: FaSwatchbook,
  },
  {
    id: 6,
    title: "Training & Handoff",
    content:
      "Every template comes with a training session for your team. We'll walk you through every feature so your marketers feel confident from day one.",
    icon: FaGraduationCap,
  },
];

const CardItem = ({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      initial={{ opacity: 0, y: 32 }}
      transition={{
        duration: 0.55,
        delay: (index % 2) * 0.12,
        ease: "easeOut",
      }}
    >
      <Icon as={card.icon} boxSize={8} color="orangeCustom" mb={4} />
      <Heading
        as="h3"
        color="darkBlueCustom"
        fontSize={{ base: "md", md: "xl" }}
        fontWeight="semibold"
        mb={1}
      >
        {card.title}
      </Heading>
      <Text fontSize="md">{card.content}</Text>
    </motion.div>
  );
};

const OurAdvantage = () => {
  return (
    <Box bg="white" id="our-advantage" pt={{ base: 16, md: 32 }}>
      <CustomContainer>
        <Flex
          align="flex-start"
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 16, lg: 24 }}
        >
          {/* Left sticky panel */}
          <Box
            flex="0 0 auto"
            maxW={{ base: "100%", lg: "360px" }}
            position={{ base: "relative", lg: "sticky" }}
            top={{ lg: "120px" }}
            w={{ base: "100%", lg: "33%" }}
          >
            <Heading
              as="h2"
              color="darkBlueCustom"
              fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}
              fontWeight="bold"
              lineHeight="1.1"
              mb={3}
            >
              Our{" "}
              <Text as="span" color="orangeCustom" fontWeight="semibold">
                Unique
              </Text>{" "}
              Advantage
            </Heading>
            <Text fontSize="lg">
              We do not use pre-built templates. Everything we produce is 100%
              custom and created to be brand specific.
            </Text>
          </Box>
          {/* Right scrollable grid */}
          <Box flex="1">
            <Grid
              gap={{ base: 10, md: 12 }}
              templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
            >
              {cards.map((card, index) => (
                <CardItem card={card} index={index} key={card.id} />
              ))}
            </Grid>
          </Box>
        </Flex>
      </CustomContainer>
    </Box>
  );
};

export default OurAdvantage;
