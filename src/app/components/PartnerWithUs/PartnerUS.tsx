// components/WhoCanPartnerWithUs.tsx
import React from "react";

const WhoCanPartnerWithUs: React.FC = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: Heading + 1 Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-start">
          {/* Heading (Aligned with Left Card of Second Row) */}
          <div className="lg:col-span-1 flex items-center">
            <h2 className="text-2xl md:text-4xl font-bold text-black text-center mt-14 ml-8">
              Who Can Partner With Us?
            </h2>
          </div>

          {/* Card (Aligned with Right Card of Second Row) */}
          <div className="lg:col-span-1 ">
            <div className="bg-[#2A5F5F] p-6 rounded-lg shadow-md w-full">
              <h3 className="text-xl font-bold text-white mb-3">
                Corporate & Business Partners
              </h3>
              <p className="text-base text-white opacity-80">
                Access ready-to-deploy skilled professionals for your business.
                Outsource customer service, IT development, BPO, and more with
                Gulfaar. Reduce hiring costs with contract-based workforce
                solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row: 2 Equal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Card (Aligned with Heading) */}
          <div className="bg-[#2A5F5F] p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold text-white mb-3">
              Franchise Owners & Business Investors
            </h3>
            <p className="text-base text-white opacity-80">
              Own and operate a Gulfaar franchise in your country or region.
              Access our proven business model, AI-driven recruitment system,
              and global workforce database. Generate revenue from staffing
              solutions, training programs, and workforce outsourcing.
            </p>
          </div>

          {/* Right Card (Aligned with First Row Card) */}
          <div className="bg-[#2A5F5F] p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold text-white mb-3">
              Manpower & Recruitment Agencies
            </h3>
            <p className="text-base text-white opacity-80">
              Expand your reach by joining Gulfaar’s global hiring network. Get
              exclusive access to pre-screened candidates and AI-powered talent
              matching. Provide custom workforce solutions to local and
              international businesses.
            </p>
          </div>
        </div>

        {/* Third Row: 2 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 3 */}
          <div className="bg-[#2A5F5F] p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold text-white mb-3">
              Training Institutes & Skill Development Centers
            </h3>
            <p className="text-base text-white opacity-80">
              Connect your trainees to global job opportunities through Gulfaar.
              Collaborate with us to train and certify professionals for job
              placements. Offer AI-driven learning experiences and real-time
              skill assessments.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#2A5F5F] p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold text-white mb-3">
              Technology & Innovation Partners
            </h3>
            <p className="text-base text-white opacity-80">
              Work with us on developing AI-driven hiring platforms, workforce
              tracking tools, and talent management solutions. Contribute to
              the evolution of modern recruitment and talent management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanPartnerWithUs;
