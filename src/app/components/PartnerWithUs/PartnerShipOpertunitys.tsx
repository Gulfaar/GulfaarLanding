// components/TypesOfPartnershipOpportunities.tsx
import React from 'react';
import Image from 'next/image';
import { Circle } from 'lucide-react';

const TypesOfPartnershipOpportunities: React.FC = () => {
  return (
    <div className="w-full py-12 bg-[#2A5F5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
          Types of Partnership Opportunities
        </h2>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1 text-primary">
                <Circle className='text-white' size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Country-Based Franchise Partnership
                </h3>
                <p className="text-base text-white opacity-80">
                  Become the exclusive Gulfaar partner in your country. Operate the exclusive Gulfaar partner in your country. Operate the recruitment, training, and workforce outsourcing solutions under Gulfaar’s brand. Access global resources, business strategies, and AI-driven technology.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1 text-primary">
                <Circle className='text-white' size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Utility App & Digital Platform Partnership
                </h3>
                <p className="text-base text-white opacity-80">
                  Expand into fast-growing digital industries with minimal investment. Collaborate with us to launch and operate on-demand services such as food delivery, ride hailing, and home services. Use Gulfaar’s technology and AI-driven workforce platform for seamless operations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
            <div className="w-6 h-6 flex-shrink-0 mt-1 text-primary">
                <Circle className='text-white' size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Service-Based Franchise Partnership
                </h3>
                <p className="text-base text-white opacity-80">
                  Specialize in a specific service, such as BPO, IT staffing, or skill training. Offer customized hiring and workforce solutions in a chosen industry. Operate independently while benefiting from Gulfaar’s brand and infrastructure.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 flex-shrink-0 mt-1 text-primary">
                <Circle className='text-white' size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Strategic Business & Outsourcing Partnership
                </h3>
                <p className="text-base text-white opacity-80">
                  Get access to trained, AI-screened candidates for your workforce. Partner with us to outsource business processes, recruit skilled professionals, and expand global operations. Increase efficiency and cut hiring costs through our AI-powered talent solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfPartnershipOpportunities;