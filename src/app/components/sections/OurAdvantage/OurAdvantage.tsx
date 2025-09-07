"use client";
import {
  Box,
  Card,
  Grid,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const OurAdvantage = () => {
  // Check if we should show slider (tablet and up) or grid (mobile)
  const showSlider = useBreakpointValue({ base: false, md: true });

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

  // Reusable card component for mobile grid
  const MobileCardComponent = ({ card }: { card: (typeof cards)[0] }) => (
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
        <Heading color="darkBlueCustom" fontWeight={"semibold"} size="lg">
          {card.title}
        </Heading>
      </Card.Header>
      <Card.Body pt={0}>
        <Text color="gray.600" fontSize="md">
          {card.content}
        </Text>
      </Card.Body>
    </Card.Root>
  );

  // Reusable card component for slider (no Card wrapper)
  const SliderCardComponent = ({ card }: { card: (typeof cards)[0] }) => (
    <Box bg={"#F2EEE6"} borderRadius="lg" h="100%" p={8} transition="all 0.2s">
      <Box
        alignItems={"center"}
        borderColor={"orangeCustom"}
        borderRadius={"lg"}
        borderWidth={"2px"}
        display={"flex"}
        h={"55px"}
        justifyContent={"center"}
        mb={4}
        p={3}
        w={"55px"}
      >
        {card.icon}
      </Box>
      <Heading color="darkBlueCustom" fontWeight={"semibold"} mb={4} size="lg">
        {card.title}
      </Heading>
      <Text color="gray.700" fontSize="md">
        {card.content}
      </Text>
    </Box>
  );

  return (
    <Box
      bgColor={"darkBlueCustom"}
      bgImage={{ base: "none", md: "url(/images/png/advantage-bg.png)" }}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      bgSize={{ base: "cover", lg: "auto" }}
      mt={{ base: 24, md: 40, lg: 0 }}
      pb={{ base: 24, md: 32 }}
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
            {showSlider ? (
              // Desktop/Tablet - Swiper Slider
              <Swiper
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                centeredSlides={true}
                className="advantageSwiper"
                loop={true}
                modules={[Pagination, Navigation]}
                navigation={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                slidesPerView={3}
                spaceBetween={30}
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <SliderCardComponent card={card} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // Mobile - Grid Layout
              <Grid gap={6} templateColumns="1fr" w="full">
                {cards.map((card) => (
                  <MobileCardComponent key={card.id} card={card} />
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default OurAdvantage;
