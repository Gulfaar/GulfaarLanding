"use client";

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import DataSecuritySection from "@/app/components/privacypolicy/DataSecuritySection";
import DataSharingSection from "@/app/components/privacypolicy/DataSharingSection";
import InfoCollectionSection from "@/app/components/privacypolicy/InfoCollectionSection";
import InfoUsageSection from "@/app/components/privacypolicy/InfoUsageSection";
import RightsCookiesSection from "@/app/components/privacypolicy/RightsCookiesSection";
import * as React from "react";


const PrivacyPolicy: React.FC = () => {
  return (
    <main className="text-black">
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Header title="PRIVACY POLICY"
       subtitle="At Gulfaar, we prioritize your privacy and securely"/>
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
