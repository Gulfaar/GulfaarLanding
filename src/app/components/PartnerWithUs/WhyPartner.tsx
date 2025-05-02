// components/WhyPartnerWithGulfaar.tsx
import React from 'react';

const WhyPartnerWithGulfaar: React.FC = () => {
  return (
    <div className="w-full py-12 bg-[#2A5F5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: Heading + 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Heading */}
          <div className="flex items-center justify-center lg:col-span-1">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center lg:text-left">
              Why Partner with Gulfaar?
            </h2>
          </div>

          {/* Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">
                AI-Powered Technology & Smart Recruitment
              </h3>
              <p className="text-base text-black opacity-80">
                Stay ahead with automated hiring, workforce tracking, seamless payroll management.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">
                Diverse Revenue Streams
              </h3>
              <p className="text-base text-black opacity-80">
                Earn through franchise partnerships, training programs, workforce solutions, and outsourcing services.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black mb-3">
              Global Brand & Industry Recognition
            </h3>
            <p className="text-base text-black opacity-80">
              Leverage our established reputation and market presence.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black mb-3">
              Comprehensive Support & Training
            </h3>
            <p className="text-base text-black opacity-80">
              Get full operational, marketing, and technical assistance.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black mb-3">
              Scalable & Flexible Business Model
            </h3>
            <p className="text-base text-black opacity-80">
              Expand your operations with customized partnership plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPartnerWithGulfaar;