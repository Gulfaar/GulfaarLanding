import React from 'react';

const EthicalSection = () => {
  const cards = [
    {
      title: 'Forced Labour & Human Trafficking ',
      description:
        'Ensuring ethical recruitment and preventing any form of exploitation. fair wages, ethical hiring, and worker rights.',
    },
    {
      title: 'lllegal Visa Sponsorship',
      description:
        'Ensuring that all visa processes are legal and fully compliant with destination country regulations',
    },
    {
      title: 'Excessive Recruitment Fees',
      description: 'We do not charge unfair fees to job seekers for placement.',
    },
    {
      title: 'Fraudulent Hiring Practices ',
      description:
        'Verifying employer authenticity and preventing fake job listings.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-24 font-figtree">
      <div className="max-w-7xl mx-auto">
        {/* First Row: Heading + First Card */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          {/* Left: Heading */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-4 lg:mt-[36px]">
              Ethical Recruitment & Anti-Exploitation Policies
            </h1>
          </div>

          {/* Right: First Card */}
          <div className="flex-1 flex lg:justify-end">
            <div className="bg-[#2E5F5C] rounded-xl p-6 sm:p-8 h-full border-l-4 border-[#3a7a76] min-h-[200px] w-full sm:w-[90%] md:w-[80%] lg:w-[71%] lg:ml-[165px]">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {cards[0].title}
              </h2>
              <p className="text-white text-base sm:text-lg">
                {cards[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Second Row: Remaining Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.slice(1).map((card, index) => (
            <div
              key={index}
              className="bg-[#2E5F5C] rounded-xl p-6 sm:p-8 border-l-4 border-[#3a7a76] min-h-[200px]"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {card.title}
              </h2>
              <p className="text-white text-base sm:text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EthicalSection;
