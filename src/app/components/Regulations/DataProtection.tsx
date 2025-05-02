import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DataProtectionSection = () => {
  const complianceCards = [
    {
      title: 'General Data Protection Regulation',
      description: 'Protecting user data and privacy across Europe (GDPR).',
      icon: '/icons/Security.svg' // Replace with your image path
    },
    {
      title: 'Personal Data Protection Laws',
      description: 'Complying with country-specific privacy regulations (such as: CCPA, UAE Data Protection Law).',
      icon: '/icons/Security.svg' // Replace with your image path
    },
    {
      title: 'Confidentiality & Secure Storage',
      description: 'Ensuring strict access controls and encryption for sensitive personal and corporate data.',
      icon: '/icons/Security.svg' // Replace with your image path
    },
    {
      title: 'Global Data Regulations',
      description: 'Adhering to international data protection standards and compliance frameworks.',
      icon: '/icons/Security.svg' // Replace with your image path
    }
  ];

  return (
    <div className="flex bg-white justify-center items-center py-16 px-6 md:px-12 lg:px-24 font-figtree">
      <div className=" max-w-7xl">
        {/* Section Heading */}
        <h1 className="text-center text-2xl md:text-5xl font-bold text-gray-900 mb-12 md:ml-[200px]">
          Data Protection & Privacy Compliance
        </h1>

        {/* Compliance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {complianceCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#2E5F5C] rounded-lg p-8 text-white flex items-start gap-4"
            >
              <div className="bg-white bg-opacity-20 p-2 rounded-full flex-shrink-0">
                <Image 
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  {card.title}
                </h2>
                <p className="text-white opacity-90">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Policy Link */}
        <div className="text-center">
          <Link
            href="/privacypolicy" 
            className="text-[#2E5F5C] hover:text-[#1E4F4C] text-lg font-medium underline underline-offset-4 transition-colors"
          >
            For more details, refer to our Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataProtectionSection;