"use client";
import * as React from "react";
import HeroSection from "./HeroSection";
import InfoCollectionSection from "./InfoCollectionSection";
import InfoUsageSection from "./InfoUsageSection";
import DataSharingSection from "./DataSharingSection";
import DataSecuritySection from "./DataSecuritySection";
import RightsCookiesSection from "./RightsCookiesSection";
import Footer from "./Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="text-black">
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <HeroSection />
      <InfoCollectionSection />
      <InfoUsageSection />
      <DataSharingSection />
      <DataSecuritySection />
      <RightsCookiesSection />
      
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
