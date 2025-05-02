"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';

interface MarkerData {
  id: number;
  city: string;
  country: string;
  address?: string;
  flag: string;
  top: string;
  left: string;
  image: string;
}

const markerData: MarkerData[] = [
  { id: 1, city: "New York", country: "USA", flag: "🇺🇸", top: "18%", left: "18%", image: "/cities/newyork.jpg" },
  { id: 2, city: "Toronto", country: "CAN", flag: "🇨🇦", top: "22%", left: "22%", image: "/cities/toronto.jpg" },
  { id: 3, city: "Vancouver", country: "CAN", flag: "🇨🇦", top: "15%", left: "20%", image: "/cities/vancouver.jpg" },
  { id: 4, city: "Chicago", country: "USA", flag: "🇺🇸", top: "25%", left: "24%", image: "/cities/chicago.jpg" },
  { id: 5, city: "Mexico City", country: "MEX", flag: "🇲🇽", top: "32%", left: "22%", image: "/cities/mexicocity.jpg" },
  { id: 6, city: "Panama City", country: "PAN", flag: "🇵🇦", top: "38%", left: "24%", image: "/cities/panama.jpg" },
  { id: 7, city: "London", country: "GBR", flag: "🇬🇧", top: "10%", left: "39%", image: "/cities/london.jpg" },
  { id: 8, city: "Paris", country: "FRA", flag: "🇫🇷", top: "10%", left: "29%", image: "/cities/paris.jpg" },
  { id: 9, city: "Dubai", country: "UAE", flag: "🇦🇪", top: "22%", left: "52%", image: "/cities/dubai.jpg" },
  { id: 10, city: "Istanbul", country: "TUR", flag: "🇹🇷", top: "26%", left: "58%", image: "/cities/istanbul.jpg" },
  { id: 11, city: "Mumbai", country: "IND", flag: "🇮🇳", top: "28%", left: "68%", image: "/cities/mumbai.jpg" },
  { id: 12, city: "Delhi", country: "IND", flag: "🇮🇳", top: "22%", left: "75%", image: "/cities/delhi.jpg" },
  { id: 13, city: "Beijing", country: "CHN", flag: "🇨🇳", top: "30%", left: "78%", image: "/cities/beijing.jpg" },
  { id: 14, city: "Tokyo", country: "JPN", flag: "🇯🇵", top: "25%", left: "82%", image: "/cities/tokyo.jpg" },
  { id: 15, city: "Cairo", country: "EGY", flag: "🇪🇬", top: "42%", left: "50%", image: "/cities/cairo.jpg" },
  { id: 16, city: "Nairobi", country: "KEN", flag: "🇰🇪", top: "48%", left: "52%", image: "/cities/nairobi.jpg" },
  { id: 17, city: "Melbourne", country: "AUS", address: "100 Smith Street\nCollingwood VIC 3066 AU", flag: "🇦🇺", top: "62%", left: "69%", image: "/cities/melbourne.jpg" },
  { id: 18, city: "Sydney", country: "AUS", flag: "🇦🇺", top: "80%", left: "75%", image: "/cities/sydney.jpg" },
];

const AboutUs = () => {
  const [selectedMarker, setSelectedMarker] = useState<number>(1); // Default to New York (id: 1)
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

  // Function to handle marker click
  const handleMarkerClick = (markerId: number) => {
    setSelectedMarker(markerId);
  };

  return (
    <div className="w-full bg-white">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 container mx-auto px-5 md:px-20">
    
      

      <section className="self-center px-15 md:mt-9 py-10 w-full max-w-[1294px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full text-2xl font-semibold tracking-tight text-teal-800 max-md:mt-10 max-md:max-w-full">
              <h2 className="self-stretch text-3xl tracking-tight leading-[50px] max-md:max-w-full">
              Empowering Talent, Connecting Opportunities <br />
                <span className="text-[28px] md:text-[48px]">
                Empowering Workforce  Connecting Businesses
                </span>
              </h2>
              <p className="mt-6 max-md:max-w-full">
              Building Global Success!
              </p>
              <p className="mt-9 max-w-full leading-9 text-black font-normal text-[20px] w-[672px] max-md:max-w-full">
              At Gulfaar, we are more than just a recruitment agency, we are a 
            global workforce solutions provider committed to bridging the gap 
            between talent and opportunity. With our AI-driven hiring platform, 
            advanced workforce solutions.
              </p>
              {/* <button
                className="flex gap-3 px-8 py-4 mt-12 text-sm leading-tight text-center text-white uppercase bg-teal-800 rounded-[50px] tracking-[3px] max-md:px-5 max-md:mt-10"
                aria-label="Get Started"
              >
                <span className="grow my-auto">Get Started</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6307c969f4753633a930c857def46cbf555e5466?placeholderIfAbsent=true"
                  className="object-contain shrink-0 w-3.5 aspect-[0.87]"
                  alt="Arrow icon"
                />
              </button> */}
            </div>
          </div>
          <div className="ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <Image
              src="/aboutuscover.png"
              className="object-contain grow w-full rounded-3xl aspect-[0.77] max-md:mt-10 max-md:max-w-full"
              
              height={100}
              width={100}
              alt="Career development illustration"
            />
          </div>
        </div>
      </section>
      </div>

      {/* World Map Section */}
      <div className="mt-24 container mx-auto px-5 md:px-20">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#2E6D65] text-center">
          We&apos;re here for you no matter where you are
        </h1>
        {/* Underline */}
        <div className="w-[280px] md:w-[500px] h-0.5 bg-[#2E6D65] mx-auto mt-2 md:ml-[320px]"></div>
        
        <div className="relative w-full h-[300px] md:h-[500px] mt-16">
          {/* Base World Map */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: 'url("/world.png")' }}
          />

          {/* Markers */}
          <div className="absolute inset-0">
            {markerData.map((marker) => (
              <div 
                key={marker.id}
                className="group absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ top: marker.top, left: marker.left }}
                onMouseEnter={() => setHoveredMarker(marker.id)}
                onMouseLeave={() => setHoveredMarker(null)}
                onClick={() => handleMarkerClick(marker.id)}
              >
                <div className="absolute inset-[25%] w-12 h-12 transition-all duration-300 group-hover:scale-125">
                  <div 
                    className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-200 
                      ${(hoveredMarker === marker.id || selectedMarker === marker.id) ? 'opacity-90' : 'opacity-70'}`} 
                    style={{ backgroundImage: 'url("/Middlecircle.png")' }} 
                  />
                  <div 
                    className={`absolute inset-0 bg-contain bg-center bg-no-repeat 
                      ${selectedMarker === marker.id ? 'scale-125' : ''}`} 
                    style={{ backgroundImage: 'url("/MapMarker.png")' }} 
                  />
                </div>
                
                {/* Location Popup - Show on hover or when selected */}
                {(hoveredMarker === marker.id || selectedMarker === marker.id) && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max z-50">
                    <div className="bg-white rounded-xl shadow-lg p-4 relative">
                      <div className="flex gap-4">
                        {/* Image */}
                        
                        
                        {/* Content */}
                        <div className="flex items-start gap-2">
                          <span className="text-2xl text-[#2E6D65]">{marker.flag}</span>
                          <div>
                            <h3 className="text-lg font-semibold text-black">{marker.city}, {marker.country}</h3>
                            {marker.address && (
                              <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                                {marker.address}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mt-32 container mx-auto px-5 md:px-20">
        {/* Title */}
        <div className="flex items-baseline gap-3 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-black">Our</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E6D65]">Mission</h2>
        </div>
        
        {/* Underline */}
        <div className="w-full h-0.5 md:h-1 bg-[#2E6D65] mb-8 md:mb-16"></div>

        {/* Mission Points */}
        <div className="space-y-8 md:space-y-12">
          {/* Point 1 */}
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <h3 className="text-xl md:text-2xl font-semibold text-black w-full md:w-[300px] md:flex-shrink-0">
              Empower professionals
            </h3>
            <p className="text-lg md:text-xl text-black">
              with the right skills, training, and career opportunities
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <h3 className="text-xl md:text-2xl font-semibold text-black w-full md:w-[300px] md:flex-shrink-0">
              Support businesses
            </h3>
            <p className="text-lg md:text-xl text-black">
              with tailored hiring, payroll management, and contract-based workforce solutions
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <h3 className="text-xl md:text-2xl font-semibold text-black w-full md:w-[300px] md:flex-shrink-0">
              Leverage AI & technology
            </h3>
            <p className="text-lg md:text-xl text-black">
              to streamline hiring, upskilling, and workforce management
            </p>
          </div>

          {/* Point 4 */}
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <h3 className="text-xl md:text-2xl font-semibold text-black w-full md:w-[300px] md:flex-shrink-0">
              Bridge global talent gaps
            </h3>
            <p className="text-lg md:text-xl text-black">
              by facilitating international employment and mobility.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="mt-32 relative">
        {/* Background Image */}
        <div className="absolute bg-full inset-0">
          <Image 
            src="/Testimonials.png"
            alt="What We Do Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-5 md:px-4 py-16">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What We Do ?
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="w-full mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Card 1: Skill Development & Training */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                  Skill Development & Training
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      Professional courses in technical, non-technical, and soft skills training
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      AI-powered language learning and global workforce readiness programs,internal quality assurance.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Card 2: Outsourcing & Business Solutions */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                  Outsourcing & Business Solutions
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      On-demand staffing for BPO, IT, customer support, and field operations
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      AI-driven workforce management tools for business optimization.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Card 3: Franchise & Partnership Opportunities */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                  Franchise & Partnership Opportunities
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      Expand Gulfaar's global reach with franchise models and strategic partnerships.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      Join our network of manpower agencies, training centers, and corporate partners.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Card 4: Global Mobility & Workforce Migration */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                  Global Mobility & Workforce Migration
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      Visa assistance and relocation services for professionals seeking international careers.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      Employer solutions for cross-border hiring and payroll management.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 5: End-to-End Workforce Solutions (Centered) */}
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl p-8 shadow-lg max-w-[600px]">
                <h3 className="text-2xl font-semibold text-[#FF6B6B] mb-6">
                  End-to-End Workforce Solutions
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      AI-powered recruitment for permanent, contract-based, and on-demand
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] text-lg mt-1">◇</span>
                    <p className="text-gray-700 text-lg">
                      Industry-specific staffing for IT, healthcare, logistics, finance, construction, and more
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#2E6D65] py-20">
        <div className="container mx-auto px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Global Presence */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
                <Image
                  src="/aboutusicon1.png"
                  alt="Global Presence"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                Global Presence
              </h3>
              <p className="text-[#FFD700] text-lg mt-8">
                Operations in multiple continents.
              </p>
            </div>

            {/* Job Seekers */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
                <Image
                  src="/aboutusicon2.png"
                  alt="Job Seekers"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                1 Million of Job Seekers Placed
              </h3>
              <p className="text-[#FFD700] text-lg">
                Operations in multiple continents.
              </p>
            </div>

            {/* Employers */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
                <Image
                  src="/Group.png"
                  alt="Employers"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                1000s of Employers Supported
              </h3>
              <p className="text-[#FFD700] text-lg">
                Operations in multiple continents.
              </p>
            </div>

            {/* AI-Powered */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
                <Image
                  src="/aboutusicon3.png"
                  alt="AI-Powered"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                AI-Powered Talent Matching
              </h3>
              <p className="text-[#FFD700] text-lg">
                Reducing hiring time by over 50%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner with Gulfaar Section */}
      <div className="mt-16 mb-20">
        <div className="container mx-auto px-5 md:px-48 lg:px-64">
          <div className="relative bg-[#F8E449] rounded-[32px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/aboutuslastcover.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
              {/* Yellow Overlay */}
              <div className="absolute inset-0 bg-[#F8E449] opacity-60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-5  md:p-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Content */}
                <div className="w-full md:max-w-lg">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                    Partner with <span className="text-[#2E6D65]">Gulfaar</span>
                  </h2>
                  <p className="text-lg md:text-xl text-[#1E1E1E] mb-8">
                    At Gulfaar, we believe in building strong partnerships that create mutual growth and long-term success.
                  </p>
                  <div className="flex gap-4">
                  <Link href="/Partner">
                    <button className="bg-[#2E6D65] text-white px-6 md:px-8 py-3 rounded-lg hover:bg-green-800 transition-colors">
                      Learn More
                    </button>
                    </Link>
                  </div>
                </div>

                {/* Right Image Placeholder */}
                <div className="w-full md:w-[400px] aspect-[4/3] bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <Image
                src="/bus.jpg"
                alt="Background"
                fill
                className='object-cover rounded-2xl'
                priority
              />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
