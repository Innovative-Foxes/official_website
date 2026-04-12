"use client";

import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import CustomContainer from "../../../components/ui/Container/Container";

const cards = [
  {
    tag: "Product design",
    title: "Orbital — data intelligence platform",
    meta: "2025 · Brand, UX, Design system",
    gridColumn: "span 7",
    gridRow: "span 5",
    image: { src: "/images/jpg/showcase-1.jpg" },
    href: "/work/worktech",
  },
  {
    tag: "Branding",
    title: "Ember — artisan coffee identity",
    meta: "2024 · Identity, Packaging",
    gridColumn: "span 5",
    gridRow: "span 3",
    image: { src: "https://picsum.photos/seed/ember/800/600" },
    href: "#",
  },
  {
    tag: "Web design",
    title: "Grove — sustainable living app",
    meta: null,
    gridColumn: "span 5",
    gridRow: "span 2",
    image: { src: "https://picsum.photos/seed/grove/800/400" },
    href: "#",
  },
];

const ShowcaseGrid = () => {
  return (
    <CustomContainer>
      <Box id="our-work" mt={{ base: 16, md: 32 }}>
        {/* Header */}
        <Flex
          justify="space-between"
          align="baseline"
          mb={8}
          pb={4}
          borderBottom="0.5px solid"
          borderColor="gray.200"
        >
          <Text fontSize="22px" fontWeight={400} letterSpacing="-0.02em">
            Selected work
          </Text>
          <Text
            fontSize="13px"
            color="gray.400"
            fontWeight={300}
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            3 projects
          </Text>
        </Flex>
        {/* Mason Grid */}
        <Grid templateColumns="repeat(12, 1fr)" gridAutoRows="60px" gap={3}>
          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              gridColumn={card.gridColumn}
              gridRow={card.gridRow}
              borderRadius="12px"
              overflow="hidden"
              border="0.5px solid"
              borderColor="whiteAlpha.100"
              position="relative"
              cursor="pointer"
              display="block"
              textDecoration="none"
              transition="border-color 0.2s ease"
              _hover={{
                borderColor: "whiteAlpha.300",
                textDecoration: "none",
                "& .card-bg": { transform: "scale(1.06)" },
                "& .card-overlay": { opacity: 1 },
              }}
            >
              {/* Image Background */}
              <Image
                alt={card.title}
                bottom={0}
                className="card-bg"
                h="full"
                left={0}
                objectFit="cover"
                position="absolute"
                right={0}
                src={card.image.src}
                top={0}
                transition="transform 0.4s ease"
                transformOrigin="center"
                w="full"
              />
              {/* Hover overlay */}
              <Box
                className="card-overlay"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.400"
                opacity={0}
                transition="opacity 0.4s ease"
                zIndex={1}
              />
              {/* Arrow icon top-right */}
              <Box
                position="absolute"
                top={4}
                right={4}
                w="28px"
                h="28px"
                borderRadius="full"
                bg="whiteAlpha.200"
                border="0.5px solid"
                borderColor="whiteAlpha.300"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex={3}
                transition="background 0.2s"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="2" y1="10" x2="10" y2="2" />
                  <polyline points="4,2 10,2 10,8" />
                </svg>
              </Box>
              {/* Card info overlay */}
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                zIndex={2}
                px={i === 2 ? 4 : 5}
                py={i === 2 ? 3 : 5}
                background="linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)"
              >
                <Box
                  display="inline-block"
                  fontSize="10px"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  px={2}
                  py="3px"
                  borderRadius="4px"
                  mb={1}
                  bg="whiteAlpha.200"
                  color="whiteAlpha.900"
                  border="0.5px solid"
                  borderColor="whiteAlpha.300"
                  fontWeight={400}
                >
                  {card.tag}
                </Box>
                <Text
                  fontSize={i === 0 ? "17px" : i === 1 ? "15px" : "13px"}
                  fontWeight={400}
                  color="white"
                  lineHeight={1.3}
                  m={0}
                >
                  {card.title}
                </Text>
                {card.meta && (
                  <Text
                    fontSize="11px"
                    color="whiteAlpha.600"
                    fontWeight={300}
                    mt="2px"
                  >
                    {card.meta}
                  </Text>
                )}
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default ShowcaseGrid;
