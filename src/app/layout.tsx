import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import Script from "next/script";

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
  title: "Innovative Foxes | Marketo Landing Page & Email Template Agency",
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17525626678"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17525626678');
          `}
        </Script>
      </head>
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
