import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Landing Page | Event Marketing",
  description: "Demo event landing page for marketing purposes",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
