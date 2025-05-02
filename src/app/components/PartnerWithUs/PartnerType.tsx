import React from "react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Apply for a Partnership",
    description: "Contact us with your business details and area of interest.",
  },
  {
    number: 2,
    title: "Business Evaluation",
    description: "Our team will review your application and discuss opportunities.",
  },
  {
    number: 3,
    title: "Agreement & Onboarding",
    description: "Once approved, we will finalize contracts, provide training, and offer full support.",
  },
  {
    number: 4,
    title: "Launch & Grow",
    description: "Start operating under the Gulfaar brand and grow your business with our resources!",
  },
];

const PartnershipSteps: React.FC = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-16">
          Types of Partnership Opportunities
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps with perfect alignment */}
          <div className="relative">
            {/* Vertical connecting line - now ends exactly at last circle */}
            <div className="absolute left-7 top-0 h-[calc(85%-3rem)] w-0.5 bg-gray-400"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-8 pl-2">
                {/* Number circle - perfectly centered on line */}
                <div className="z-10 flex-shrink-0 bg-[#2E5F5C] rounded-full h-10 w-10 flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image (unchanged) */}
          <div className="w-full flex justify-center">
            <Image
              src="/images/Types-Partner.svg"
              alt="Partnership Opportunities"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSteps;