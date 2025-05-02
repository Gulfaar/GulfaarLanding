import React from 'react';
import Image from 'next/image';

const LegalResponsibilities: React.FC = () => {
  return (
    <div className="w-full py-16 bg-gray-50 bg-">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E5F5C] text-center mb-16">
          Legal Responsibilities for Employers & Job Seekers
        </h2>

        {/* Two Column Layout with Center Divider */}
        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* For Employers - Right Aligned */}
          <div className="md:w-1/2 md:pr-8 md:text-left">
            <h3 className="text-2xl font-semibold text-[#2E5F5C] mb-6 text-center md:text-center">
              For Employers
            </h3>
            <ul className="space-y-4">
              <li className="flex md:justify-end items-start gap-2">
                <Image 
                  src="/images/Gulfaar-icon.svg" 
                  alt="Gulfaar-icon" 
                  width={16} 
                  height={16}
                  className="w-4 h-4 mt-1.5"
                />
                <p className="text-gray-700 text-lg">
                  Must adhere to fair employment policies and ethical hiring practices
                </p>
              </li>
              <li className="flex md:justify-end items-start gap-2">
                <Image 
                  src="/images/Gulfaar-icon.svg" 
                  alt="Gulfaar-icon" 
                  width={16} 
                  height={16}
                  className="w-4 h-4 mt-1.5"
                />
                <p className="text-gray-700 text-lg">
                  Must provide clear job contracts, fair wages, and legal working conditions
                </p>
              </li>
              <li className="flex md:justify-end items-start gap-2">
                <Image 
                  src="/images/Gulfaar-icon.svg" 
                  alt="Gulfaar-icon" 
                  width={16} 
                  height={16}
                  className="w-4 h-4 mt-1.5"
                />
                <p className="text-gray-700 text-lg">
                  Must comply with labour laws and workplace safety regulations
                </p>
              </li>
            </ul>
          </div>

          {/* Vertical Divider - Only on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* For Job Seekers - Left Aligned */}
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold text-[#2E5F5C] mb-6 text-center md:text-center">
              For Job Seekers
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Image 
                  src="/images/Gulfaar-icon.svg" 
                  alt="Gulfaar-icon" 
                  width={16} 
                  height={16}
                  className="w-4 h-4 mt-1.5"
                />
                <p className="text-gray-700 text-lg">
                  Must provide authentic documents and qualifications for employment verification
                </p>
              </li>
              <li className="flex items-start gap-2">
                <Image 
                  src="/images/Gulfaar-icon.svg" 
                  alt="Gulfaar-icon" 
                  width={16} 
                  height={16}
                  className="w-4 h-4 mt-1.5"
                />
                <p className="text-gray-700 text-lg">
                  Must adhere to workplace policies, ethical conduct, and compliance standards
                </p>
              </li>
              <li className="flex items-start gap-2">
                <Image 
                  src="/images/Gulfaar-icon.svg" 
                  alt="Gulfaar-icon" 
                  width={16} 
                  height={16}
                  className="w-4 h-4 mt-1.5"
                />
                <p className="text-gray-700 text-lg">
                  Must ensure legal work eligibility and follow country-specific visa regulations
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalResponsibilities;