import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";

import "./globals.css";
import { Box } from "@chakra-ui/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Innovative Foxes | Marketo Landing Page & Email Templates",
  description: "Marketo Landing Page & Email Template Design & Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} antialiased`}
      lang="en"
    >
      <body>
        <Provider>
          <Box color={"blue"} fontSize={"xl"}>
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
