import React from 'react';

const ComplianceConsequences = () => {
  return (
    <div className="w-full py-16 bg-[#2E5F5C]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Consequences of Non-Compliance
        </h1>
        
        {/* Subheading */}
        <p className="text-xl text-white text-center mb-12">
          Gulfaar enforces strict penalties for non-compliance, fraud, and unethical behavior
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Employer Blacklisting Card */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#2E5F5C] mb-3">
              Employer Blacklisting
            </h2>
            <p className="text-gray-700">
              Companies engaging in unfair hiring practices may be banned from our platform
            </p>
          </div>

          {/* Candidate Disqualification Card */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#2E5F5C] mb-3">
              Candidate Disqualification
            </h2>
            <p className="text-gray-700">
              Job seekers providing false documents may be permanently removed
            </p>
          </div>

          {/* Legal Action Card */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#2E5F5C] mb-3">
              Legal Action
            </h2>
            <p className="text-gray-700">
              Gulfaar cooperates with legal authorities to prevent fraud and labor violations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceConsequences;