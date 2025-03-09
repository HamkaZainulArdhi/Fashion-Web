"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WelcomeScreen from "@/components/About/welcome-screen"; // Import Splash Screen
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 4000);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        {showWelcome ? (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        ) : (
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        )}
      </body>
    </html>
  );
}

import { Providers } from "./providers";
