"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp } from "react-icons/fi";
import Cookies from 'js-cookie';
import axios from 'axios';



interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTrainingOpen, setIsTrainingOpen] = useState(false);
    const [isWorkForceOpen, setIsWorkForceOpen] = useState(false);
    const [isContractOpen, setIsContractOpen] = useState(false);
    const [isOutsourcingOpen, setIsOutsourcingOpen] = useState(false); 
    const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false)


    const token = Cookies.get('jwt');
    

    const Logout = async () => {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.gulfaarjobs.com";
    
      try {
        const response = await axios.post(
          `${API_BASE_URL}/user/logout`,
          {}, // empty body
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        Cookies.remove('jwt')
        return response.data;
      } catch (error: any) {
        console.error("Logout error:", error.response?.data || error.message);
        return { success: false, message: error.response?.data?.message || "Something went wrong" };
      }
    }; 

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <header
      className="relative w-full h-[300px] mt-[-20px]  md:px-8  bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url("/Heroimage.png")', // Replace with your actual background image
      }}
    >
      {/* Dark overlay to make text more readable over the background */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col  h-full px-8 py-10 md:px-2  md:py-9">
        
        {/* Top Row: Logo on the left, buttons on the right, burger menu on mobile */}
        <div className="flex mt-[-20px] md:mt-[-40px] items-center justify-between">
          {/* Logo - Larger size */}
          <div className="relative  mt-5  md:mt-12 w-[125px] md:w-[188px]">
            <Link href="/" >
            <Image
              src="/secondhead.png" // Replace with your actual logo
              alt="Gulfaar Logo"
              width={260} // Set appropriate width
              height={10} 
              className="object-contain h-auto"
              priority
            />
            </Link>
          </div>

          {/* Right Side: Buttons + Burger */}
          <div className="flex items-center">
            {/* Action Buttons - Smaller size */}
            <div className="hidden w-full justify-end mt-[2px]  md:flex gap-2 md:gap-4">
            
              {/* <Link href="/jobseeker/login">
              <button className="md:px-2 py-2  cursor-pointer rounded-lg text-white text-sm md:text-base">
                Jobseeker
              </button>
              </Link>
              <Link href="/employer/signup">
              <button className="bg-[#2E5F5C] mt-1 md:px-4 cursor-pointer md:h-8 rounded-lg text-white text-sm md:text-base">
                Employer
              </button>
              </Link> */}
              {token && (
      <Link href="/jobseeker/login">
        <button onClick={Logout} className="cursor-pointer md:px-2 py-2 rounded-lg text-white text-sm md:text-base">
          Logout
        </button>
      </Link>
    )}
              {/* Post Job button - visible only on desktop */}
              {/* <button className="hidden md:block bg-teal-700 text-white text-sm px-3 py-1 rounded-lg hover:bg-teal-800 transition mr-2">
                Post Job
              </button> */}
            </div>

            {/* Burger Menu Button - Visible on mobile only */}
            <div className="flex justify-end mt-[2px] px-4 gap-2 md:hidden lg:hidden">
                    
                    <button
                      className="text-white mt-3 text-2xl"
                      onClick={toggleMenu}
                    >
                      <FaBars />
                    </button>
                  </div>
          </div>
        </div>

        {/* Mobile Menu - Shown when burger is clicked */}
        {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-98 z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">

          <div className="fixed top-5 left-8 bg-white w-full z-50 h-10 ">
            <Image
              src="/blacklogo.png"
              alt="Company Logo"
              width={120}
              height={50}
              priority
            />
          </div>


          {/* Close Button */}
          <button
            className="fixed top-4 right-4 text-gray-400  transition z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col mt-5 items-center w-full max-w-md mx-auto py-20 space-y-4 text-lg tracking-wide min-h-screen scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
            <Link
              href="/"
              className="w-full  text-2xl text-black rounded-lg px-10 py-4  transition-all duration-300 ease-in-out transform "
              onClick={() => setIsModalOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/AboutUs"
              className="w-full text-2xl rounded-lg px-10 py-4 text-black  transition-all duration-300 ease-in-out transform "
              onClick={() => setIsModalOpen(false)}
            >
              About Us
            </Link>
            {/* <Link
              href=" "
              className="w-full  text-2xl rounded-lg px-10 py-4 text-black  transition-all duration-300 ease-in-out transform "
              onClick={() => setIsModalOpen(false)}
            >
              Blog
            </Link> */}

            {/* Training Dropdown */}
            {/* <div className="w-full">
              <button
                className="w-full  text-2xl rounded-lg px-10 py-4 text-black flex justify-between items-center transition-all duration-300 ease-in-out transform"
                onClick={() => setIsTrainingOpen(!isTrainingOpen)}
              >
                <span>Services</span>
                {isTrainingOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {isTrainingOpen && (
      <div className="pl-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
      <Link
        href="/OilGas"
        className="block px-10 py-3 text-[22px] text-black hover:bg-gray-700  transition-all duration-200 "
        onClick={() => setIsModalOpen(false)}
      >
        Oil Tank Cleaning & Disposal Services
      </Link>
      <Link
        href="/AssetsAndIntegrity"
        className="block text-[22px] px-10 py-3 text-black hover:bg-gray-700  transition-all duration-200 "
        onClick={() => setIsModalOpen(false)}
      >
        Asset Integrity Solutions
      </Link>
      <Link
        href="/SubseaInspection"
        className="block text-[22px] px-10 py-3 text-black hover:bg-gray-700  transition-all duration-200 "
        onClick={() => setIsModalOpen(false)}
      >
        Subsea Inspection, Maintenance, Repair, and Installation
      </Link>
      <Link
        href="/BrownfieldAndPlatformSolutions"
        className="block text-[22px] px-10 py-3 text-black hover:bg-gray-700  transition-all duration-200 "
        onClick={() => setIsModalOpen(false)}
      >
        Brownfield and Platform Solutions
      </Link>
      <Link
        href="/FabricationServices"
        className="block text-[22px] px-10 py-3 text-black hover:bg-gray-700  transition-all duration-200 "
        onClick={() => setIsModalOpen(false)}
      >
        Fabrication Services
      </Link>
      <Link
        href="/EnvironmentalHealth"
        className="block text-[22px] px-10 py-3 text-black hover:bg-gray-700  transition-all duration-200 "
        onClick={() => setIsModalOpen(false)}
      >
        Environmental, Health, and Safety (EHS) Management
      </Link>
    </div>
    )}
            </div> */}

            {/* Workforce Solutions Dropdown */}
            <div className="w-full">
              <button
                className="w-full  text-2xl rounded-lg px-10 py-4 text-black flex justify-between items-center transition-all duration-300 ease-in-out transform "
                onClick={() => setIsWorkForceOpen(!isWorkForceOpen)}
              >
                <span>Global Presence</span>
                
              </button>
              
            </div>

            <Link
              href="/Partner"
              className="w-full  rounded-lg px-10 py-4 text-2xl text-black  transition-all duration-300 ease-in-out transform "
              onClick={() => setIsModalOpen(false)}
            >
              Partner with us
            </Link>
            {/* <div className="w-full flex flex-col space-y-3  px-10">
              <Link href="/jobseeker/login" onClick={() => setIsModalOpen(false)}>
                <button className="w-full bg-[#2E5F5C] px-4 py-2 mt-2 rounded-lg text-white text-xl hover:opacity-90 transition">
                  Jobseeker
                </button>
              </Link>
              <Link href="/employer/signup" onClick={() => setIsModalOpen(false)}>
                <button className="w-full bg-[#2E5F5C]  corsou px-4 py-2 mt-2 rounded-lg text-white text-xl hover:opacity-90 transition">
                  Employer
                </button>
              </Link>
              {token && (
                <Link href="/jobseeker/login" onClick={Logout}>
                  <button className="w-full bg-[#2E5F5C] px-4 py-2 mt-2 rounded-lg text-white text-xl hover:opacity-90 transition">
                    Logout
                  </button>
                </Link>
              )}
            </div> */}
          </div>
        </div>
      )}

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex  gap-4  text-white font-[20px] md:mt-[-38px] w-full justify-end  relative  pr-2">
  <Link href="/" className="hover:text-[#dae470]">
    Home
  </Link>
  <Link href="/AboutUs" className="hover:text-[#dae470]">
   About Us
  </Link>

  {/* Training Dropdown */}
  {/* <div
    className="relative group"
    onMouseEnter={() => setIsTrainingOpen(true)}
    onMouseLeave={() => setIsTrainingOpen(false)}
  >
    <Link href="#" className="hover:text-[#dae470]">
      Services
    </Link>

    {isTrainingOpen && (
      <div
        className="absolute left-0 mt-0 w-auto bg-[#2E5F5C] text-white rounded-lg shadow-lg p-2"
        onMouseEnter={() => setIsTrainingOpen(true)}
        onMouseLeave={() => setIsTrainingOpen(false)}
      >
        <Link
          href="/OilGas"
          className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
          Oil Tank Cleaning & Disposal Services
        </Link>
        <Link
          href="/AssetsAndIntegrity"
          className="px-4 py-2 inline-flex whitespace-nowrap hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
         Asset Integrity Solutions
        </Link>
        <Link
          href="/SubseaInspection"
          className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
          Subsea Inspection, Maintenance, Repair, and Installation
        </Link>
        <Link
          href="/BrownfieldAndPlatformSolutions"
          className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
         Brownfield and Platform Solutions
        </Link>
        <Link
          href="/FabricationServices"
          className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
         Fabrication Services
        </Link>
        <Link
          href="/EnvironmentalHealth"
          className="block px-4 py-2 hover:text-[#dae470] hover:bg-[#3e5f5e] rounded"
        >
        Environmental, Health, and Safety (EHS) Management
        </Link>
      </div>
    )}
  </div> */}

  {/* Work-Force Solutions Dropdown */}
  <div
    className="relative group"
    onMouseEnter={() => setIsWorkForceOpen(true)}
    onMouseLeave={() => setIsWorkForceOpen(false)}
  >
    <Link href="/global" className="hover:text-[#dae470]">
      Global Presence
    </Link>

    
  </div>

  <Link href="/Partner" className="hover:text-[#dae470]">
    Partner with us
  </Link>
  <Link href="/ContactUs" className="hover:text-[#dae470]">
    Contact Us
  </Link>
</div>

        {/* Hero Text: 
            - On mobile: headline is 2 lines 
            - On desktop: headline is 1 line
            - Similarly for subheading
        */}
        <div className="flex flex-col items-center justify-center flex-grow text-center text-white px-4 py-8 md:py-12">
          {/* Headline */}
          <h1 className="tracking-wide mb-5">
            {/* Mobile (2 lines) */}
            <span className="block md:hidden text-[34px]  leading-tight">
              {title}
            </span>
            {/* Desktop (1 line) */}
            <span className="hidden md:inline text-[54px] lg:text-5xl whitespace-nowrap">
              {title}
            </span>
          </h1>

          {/* Subheading */}
          <p className="leading-relaxed max-w-2xl mx-auto">
            {/* Mobile (2 lines) */}
            <span className="block md:hidden text-lg">
              {subtitle}
            </span>
            {/* Desktop (1 line) */}
            <span className="hidden md:inline   justify-center items-center text-[14px] lg:text-2xl">
              {subtitle}
            </span>
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
