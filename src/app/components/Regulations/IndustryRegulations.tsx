import React from 'react';
import Image from 'next/image';

const IndustrySpecific: React.FC = () => {
  return (
    <div className="relative w-full py-12">
      {/* Background Image */}
      <Image
        src="/images/industry-bg.svg" // Replace with your actual image path
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Yellow Overlay with 50% Transparency */}
      <div className="absolute inset-0 bg-[#FFF200] opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center uppercase mb-12">
          Industry-Specific & Compliant
        </h2>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* First Row */}
          <div className="flex items-center space-x-4">
            <img src="/icons/technical-experts.svg" alt="Skilled Experts" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-black">Skilled & Technical Experts</h3>
              <p className="text-base text-black opacity-80">Engineers, electricians, mechanics, construction workers.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/icons/corporate.svg" alt="Corporate Professionals" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-black">Corporate Professionals</h3>
              <p className="text-base text-black opacity-80">IT experts, financial analysts, HR managers, marketing professionals.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/icons/hospitality.svg" alt="Hospitality & Retail" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-black">Hospitality & Retail Workforce</h3>
              <p className="text-base text-black opacity-80">Hotel staff, customer service, retail managers.</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center space-x-4">
            <img src="/icons/logistics.svg" alt="Logistics & Transportation" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-black">Logistics & Transportation</h3>
              <p className="text-base text-black opacity-80">Drivers, warehouse workers, supply chain managers.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/icons/healthcare.svg" alt="Healthcare Specialists" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-black">Healthcare Specialists</h3>
              <p className="text-base text-black opacity-80">Nurses, doctors, caregivers, medical assistants.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/icons/on-demand.svg" alt="On-Demand Workers" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-black">On-Demand & Temporary Workers</h3>
              <p className="text-base text-black opacity-80">Freelancers, contract staff, and project-based specialists.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySpecific;
