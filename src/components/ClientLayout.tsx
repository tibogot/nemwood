"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation5";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition3";
import PageLoader from "@/components/PageLoader";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showLoader, setShowLoader] = useState(false); // Start with false
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    // Show loader on every page refresh/initial load
    setShowLoader(true);

    // Add loading class to body immediately
    document.body.classList.add("page-loader-active");
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    setIsContentLoaded(true);

    // Remove loading class and add content loaded class
    document.body.classList.remove("page-loader-active");
    document.body.classList.add("content-loaded");
  };

  return (
    <ThemeProvider>
      {showLoader && <PageLoader onComplete={handleLoaderComplete} />}

      <PageTransition>
        <LenisProvider>
          <ScrollToTop />
          <Navigation />
          <main className="">{children}</main>
          <Footer />
        </LenisProvider>
      </PageTransition>
    </ThemeProvider>
  );
}
