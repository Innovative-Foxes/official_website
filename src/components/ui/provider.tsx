"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        darkBlue: { value: "#031629" },
        blue: { value: "#01203F" },
        offWhite: { value: "#F2EEE6" },
        yellow: { value: "#FFDC60" },
        orange: { value: "#F78523" },
      },
      fonts: {
        heading: { value: "var(--font-inter)" },
        body: { value: "var(--font-poppins)" },
        poppins: { value: "var(--font-poppins)" },
        inter: { value: "var(--font-inter)" },
      },
    },
  },
});

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
