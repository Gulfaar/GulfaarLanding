"use client";

import Footer from "@/app/components/Footer/Footer";
import CallToAction from "@/app/components/Global/CallToAction";
import GlobalPresenceInfo from "@/app/components/Global/GlobalPresenceInfo";
import WhereWeOperate from "@/app/components/Global/OperatingRegions";
import TrustedPartner from "@/app/components/Global/ServiceFeatures";
import Header from "@/app/components/Header/Header";
import * as React from "react";


function OurGlobalPresence() {
  return (
    <div className="flex flex-col items-center bg-white">
       
       <Header title="OUR GLOBAL PRESENCE"
        subtitle="Connecting Talent & Businesses Across the World"
         />
      <GlobalPresenceInfo />
      <WhereWeOperate />
      <TrustedPartner />
      <CallToAction />
      <Footer/>
      
    </div>
  );
}

export default OurGlobalPresence;
