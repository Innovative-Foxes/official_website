"use client";

import { Box, Flex, Grid, Link, Text } from "@chakra-ui/react";
import CustomContainer from "../../../components/ui/Container/Container";

const OrbitalSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 700 300"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="350" cy="150" r="200" fill="none" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.6" />
    <circle cx="350" cy="150" r="140" fill="none" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
    <circle cx="350" cy="150" r="80" fill="none" stroke="#2a5080" strokeWidth="0.5" opacity="0.4" />
    <circle cx="550" cy="150" r="3" fill="#4a80c0" opacity="0.8" />
    <circle cx="350" cy="-50" r="3" fill="#4a80c0" opacity="0.8" />
    <circle cx="150" cy="150" r="3" fill="#4a80c0" opacity="0.8" />
    <circle cx="350" cy="350" r="3" fill="#4a80c0" opacity="0.8" />
    <rect x="290" y="110" width="120" height="80" rx="4" fill="none" stroke="#3a6090" strokeWidth="1" opacity="0.7" />
    <line x1="290" y1="130" x2="410" y2="130" stroke="#3a6090" strokeWidth="0.5" opacity="0.5" />
    <rect x="302" y="140" width="40" height="4" rx="2" fill="#3a6090" opacity="0.5" />
    <rect x="302" y="150" width="60" height="4" rx="2" fill="#3a6090" opacity="0.4" />
    <rect x="302" y="160" width="50" height="4" rx="2" fill="#3a6090" opacity="0.3" />
    <line x1="0" y1="80" x2="700" y2="80" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 6" />
    <line x1="0" y1="200" x2="700" y2="200" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 6" />
    <line x1="150" y1="0" x2="150" y2="300" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 6" />
    <line x1="550" y1="0" x2="550" y2="300" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 6" />
    <circle cx="350" cy="150" r="5" fill="#4a90d9" opacity="0.9" />
    <circle cx="350" cy="150" r="12" fill="#4a90d9" opacity="0.2" />
    <circle cx="200" cy="80" r="2" fill="#4a80c0" opacity="0.6" />
    <circle cx="480" cy="220" r="2" fill="#4a80c0" opacity="0.6" />
    <circle cx="100" cy="180" r="1.5" fill="#4a80c0" opacity="0.5" />
    <circle cx="600" cy="100" r="1.5" fill="#4a80c0" opacity="0.5" />
    <path d="M 150 150 A 200 200 0 0 1 550 150" fill="none" stroke="#2060a0" strokeWidth="1" opacity="0.4" />
  </svg>
);

const EmberSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 500 300"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 180 200 Q 170 160 180 120 Q 190 80 180 40" fill="none" stroke="#c06020" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    <path d="M 210 200 Q 200 155 210 110 Q 220 65 210 20" fill="none" stroke="#d07030" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
    <path d="M 240 200 Q 230 160 240 120 Q 250 80 240 40" fill="none" stroke="#c05010" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
    <path d="M 140 200 L 140 260 Q 140 275 155 275 L 265 275 Q 280 275 280 260 L 280 200 Z" fill="none" stroke="#c06020" strokeWidth="1" opacity="0.5" />
    <path d="M 280 220 Q 310 220 310 240 Q 310 260 280 260" fill="none" stroke="#c06020" strokeWidth="1" opacity="0.4" />
    <ellipse cx="210" cy="200" rx="70" ry="15" fill="none" stroke="#c06020" strokeWidth="1" opacity="0.5" />
    <line x1="420" y1="150" x2="500" y2="100" stroke="#8B4513" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 5" />
    <line x1="420" y1="150" x2="490" y2="200" stroke="#8B4513" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 5" />
    <line x1="420" y1="150" x2="450" y2="50" stroke="#8B4513" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 5" />
    <circle cx="420" cy="150" r="80" fill="none" stroke="#7a3010" strokeWidth="0.5" opacity="0.4" />
    <circle cx="420" cy="150" r="50" fill="none" stroke="#8a4020" strokeWidth="0.5" opacity="0.3" />
    <circle cx="420" cy="150" r="6" fill="#e07030" opacity="0.8" />
    <circle cx="420" cy="150" r="14" fill="#e07030" opacity="0.15" />
    <circle cx="60" cy="100" r="2" fill="#c06020" opacity="0.5" />
    <circle cx="90" cy="250" r="2" fill="#c06020" opacity="0.4" />
    <circle cx="370" cy="50" r="1.5" fill="#c06020" opacity="0.5" />
    <circle cx="480" cy="270" r="1.5" fill="#c06020" opacity="0.4" />
    <line x1="0" y1="50" x2="500" y2="50" stroke="#7a3010" strokeWidth="0.5" opacity="0.2" strokeDasharray="6 8" />
    <line x1="0" y1="280" x2="500" y2="280" stroke="#7a3010" strokeWidth="0.5" opacity="0.2" strokeDasharray="6 8" />
  </svg>
);

const GroveSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 500 180"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 100 90 Q 150 20 200 90 Q 150 160 100 90 Z" fill="none" stroke="#1a6040" strokeWidth="1" opacity="0.5" />
    <path d="M 160 90 Q 210 20 260 90 Q 210 160 160 90 Z" fill="none" stroke="#1a6040" strokeWidth="0.75" opacity="0.35" />
    <line x1="50" y1="180" x2="180" y2="90" stroke="#0d4028" strokeWidth="1" opacity="0.5" />
    <line x1="180" y1="90" x2="250" y2="30" stroke="#0d4028" strokeWidth="0.75" opacity="0.4" />
    <line x1="180" y1="90" x2="260" y2="100" stroke="#0d4028" strokeWidth="0.75" opacity="0.4" />
    <line x1="260" y1="100" x2="320" y2="50" stroke="#0d4028" strokeWidth="0.5" opacity="0.35" />
    <circle cx="380" cy="90" r="70" fill="none" stroke="#0d5030" strokeWidth="0.5" opacity="0.35" />
    <circle cx="380" cy="90" r="40" fill="none" stroke="#1a6040" strokeWidth="0.5" opacity="0.3" />
    <circle cx="380" cy="90" r="5" fill="#2a9060" opacity="0.8" />
    <circle cx="380" cy="90" r="12" fill="#2a9060" opacity="0.15" />
    <circle cx="250" cy="30" r="3" fill="#2a9060" opacity="0.7" />
    <circle cx="320" cy="50" r="2" fill="#2a9060" opacity="0.6" />
    <circle cx="260" cy="100" r="2" fill="#2a9060" opacity="0.5" />
    <circle cx="450" cy="30" r="1.5" fill="#2a9060" opacity="0.4" />
    <circle cx="20" cy="60" r="1.5" fill="#2a9060" opacity="0.4" />
    <line x1="0" y1="30" x2="500" y2="30" stroke="#0d4028" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 8" />
    <line x1="0" y1="160" x2="500" y2="160" stroke="#0d4028" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 8" />
  </svg>
);

const cards = [
  {
    tag: "Product design",
    title: "Orbital — data intelligence platform",
    meta: "2025 · Brand, UX, Design system",
    gridColumn: "span 7",
    gridRow: "span 5",
    bg: "#0f1a2e",
    svgScene: <OrbitalSVG />,
    href: "/work/worktech",
  },
  {
    tag: "Branding",
    title: "Ember — artisan coffee identity",
    meta: "2024 · Identity, Packaging",
    gridColumn: "span 5",
    gridRow: "span 3",
    bg: "#1a0e08",
    svgScene: <EmberSVG />,
    href: "#",
  },
  {
    tag: "Web design",
    title: "Grove — sustainable living app",
    meta: null,
    gridColumn: "span 5",
    gridRow: "span 2",
    bg: "#061a12",
    svgScene: <GroveSVG />,
    href: "#",
  },
];

const ShowcaseGrid = () => {
  return (
    <CustomContainer>
      <Box id="our-work" mt={{ base: 24, md: 40 }}>
        {/* Header */}
        <Flex
          justify="space-between"
          align="baseline"
          mb={8}
          pb={4}
          borderBottom="0.5px solid"
          borderColor="gray.200"
        >
          <Text
            fontSize="22px"
            fontWeight={400}
            letterSpacing="-0.02em"
          >
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
              {/* SVG Background */}
              <Box
                className="card-bg"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg={card.bg}
                transition="transform 0.4s ease"
                transformOrigin="center"
              >
                {card.svgScene}
              </Box>
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
                background="linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)"
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
