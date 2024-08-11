import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Kingsley Ihemelandu",
  description: "This is the official portfolio website of Kingsley Ihemelandu",
  creator: "Kingsley Ihemelandu",
  twitter: {
    card: "summary_large_image",
    title: "Kingsley Ihemelandu",
    description:
      "This is the official portfolio website of Kingsley Ihemelandu",
    creator: "@kijuchihe",
    site: "https://kijuchihe.vercel.app",
  },
  keywords: [
    "Kingsley",
    "Ihemelandu",
    "Portfolio",
    "Frontend",
    "Fullstack",
    "React",
    "Next",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
