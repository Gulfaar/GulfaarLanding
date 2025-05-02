// components/CodeOfConduct.tsx
import React from 'react';
import Image from 'next/image';
import { Circle } from 'lucide-react'

const CodeOfConduct: React.FC = () => {
  return (
    <div className="w-full py-12 bg-[#2A5F5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Gulfaar’s Code of Conduct & Compliance Measures
        </h2>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Item 1 */}
          <div className="flex items-start space-x-4">
          <div className="w-6 h-6 flex-shrink-0">
  <Circle size={24} className="text-white" />
</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Strict Background Verification
              </h3>
              <p className="text-base text-white opacity-80">
                Employers and candidates undergo identity & credential verification.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-4">
          <div className="w-6 h-6 flex-shrink-0">
  <Circle size={24} className="text-white" />
</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Transparent Contracts
              </h3>
              <p className="text-base text-white opacity-80">
                Clearly defined job roles, terms, and salaries.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-4">
          <div className="w-6 h-6 flex-shrink-0">
  <Circle size={24} className="text-white" />
</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Whistleblower & Complaint System
              </h3>
              <p className="text-base text-white opacity-80">
                Employees and job seekers can report unethical practices anonymously.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start space-x-4">
          <div className="w-6 h-6 flex-shrink-0">
  <Circle size={24} className="text-white" />
</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Regular Audits & Compliance Checks
              </h3>
              <p className="text-base text-white opacity-80">
                Ensuring ongoing adherence to laws and company policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;