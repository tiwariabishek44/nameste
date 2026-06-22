import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://namaste-spa-proposal.vercel.app"),
  title: "Namaste Spa & Wellness — Sherwood Park's Sanctuary for Self-Care & Healing",
  description:
    "A sanctuary where ancient ritual meets advanced skincare. Massage, Head Spa Ritual, Ayurveda, skin & aesthetics and body contouring in Sherwood Park, Alberta. We direct-bill your benefits. Book your peace.",
  openGraph: {
    title: "Namaste Spa & Wellness — Book your peace",
    description:
      "Sherwood Park's sanctuary for self-care & healing, where ancient ritual meets advanced skincare.",
    siteName: "Namaste Spa & Wellness",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
