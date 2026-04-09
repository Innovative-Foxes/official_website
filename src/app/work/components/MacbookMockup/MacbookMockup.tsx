"use client";

import { Box } from "@chakra-ui/react";

const MacbookMockup = ({
  src,
  children,
}: {
  src?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Box w="100%" position="relative">
      {/* Lid */}
      <Box
        w="100%"
        bg="#1d1d1f"
        borderRadius={{ base: "8px 8px 0 0", md: "14px 14px 0 0" }}
        px="2.5%"
        pt="1.8%"
        pb="1%"
      >
        {/* Camera */}
        <Box
          w="6px"
          h="6px"
          bg="#3c3c3e"
          borderRadius="full"
          mx="auto"
          mb="1%"
        />
        {/* Screen */}
        <Box
          w="100%"
          bg="#000"
          borderRadius="4px"
          overflow="hidden"
          position="relative"
          style={{ aspectRatio: "16 / 10" }}
        >
          {children ?? (
            <iframe
              src={src}
              title="Portfolio preview"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
            />
          )}
        </Box>
      </Box>
      {/* Hinge line */}
      <Box w="100%" h="2px" bg="#0a0a0a" />
      {/* Base */}
      <Box w="108%" ml="-4%" position="relative">
        <Box
          w="100%"
          h={{ base: "14px", md: "22px" }}
          borderRadius="0 0 10px 10px"
          background="linear-gradient(to bottom, #e4e4e6, #bebebf)"
        />
        {/* Trackpad notch */}
        <Box
          position="absolute"
          bottom="4px"
          left="50%"
          transform="translateX(-50%)"
          w="16%"
          h="3px"
          bg="#a8a8aa"
          borderRadius="full"
        />
      </Box>
      {/* Drop shadow */}
      <Box
        position="absolute"
        bottom="-12px"
        left="4%"
        right="4%"
        h="12px"
        background="radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)"
        pointerEvents="none"
      />
    </Box>
  );
};

export default MacbookMockup;
