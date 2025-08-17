import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";

import { LightMode } from "@/components/ui/color-mode";

import "./globals.css";

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
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Provider>
          <LightMode>{children}</LightMode>
        </Provider>
      </body>
    </html>
  );
}
