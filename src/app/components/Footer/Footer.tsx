"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-emerald-600 text-white w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="mb-3 md:mb-0 flex items-center space-x-2">
          <Image
            src="/blacklogo.png"
            alt="Gulfaar"
            width={100}
            height={32}
            className="invert brightness-0"
            priority
          />
        </div>

        {/* Text Links Section */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm whitespace-nowrap">
          <span className="hidden md:inline">©2025 Gulfaar private limited</span>
          <a href="/privacypolicy" className="hover:text-gray-200">Privacy policy</a>
          <a href="/Regulations" className="hover:text-gray-200">Regulations</a>
          <a href="/Cookie" className="hover:text-gray-200">Cookie policy</a>
        </div>

        {/* Mobile-only copyright */}
        <div className="mt-2 text-xs md:hidden text-center">
          ©2025 Gulfaar private limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
