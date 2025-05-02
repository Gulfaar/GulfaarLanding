import React from 'react';

const ComplianceSection = () => {
    const cards = [
        {
            title: 'International Labour Laws',
            subtitle: '(ILO Standards)',
            description: 'Promoting fair wages, ethical hiring, and worker rights.'
        },
        {
            title: 'International Labour Laws',
            subtitle: '(ILO Standards)',
            description: 'Promoting fair wages, ethical hiring, and worker rights.'
        },
        {
            title: 'International Labour Laws',
            subtitle: '(ILO Standards)',
            description: 'Promoting fair wages, ethical hiring, and worker rights.'
        },
        {
            title: 'International Labour Laws',
            subtitle: '(ILO Standards)',
            description: 'Promoting fair wages, ethical hiring, and worker rights.'
        }
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-24 font-figtree">
            <div className="max-w-7xl mx-auto">
                {/* First Row: Heading + First Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
                    {/* Left: Heading */}
                    <div className="lg:col-span-1 flex items-center w-full lg:w-[202%]">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Employment & Labour Compliance
                        </h1>
                    </div>

                    {/* Right: First Card */}
                    <div className="lg:col-span-2 flex justify-start lg:justify-end mt-6 lg:mt-0">
                        <div className="bg-[#2E5F5C] rounded-xl p-6 sm:p-8 h-full border-l-4 border-[#3a7a76] min-h-[200px] flex flex-col justify-center w-full lg:w-[49%]">
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                                {cards[0].title}
                            </h2>
                            <p className="text-white font-medium mb-3">{cards[0].subtitle}</p>
                            <p className="text-white text-base sm:text-lg">{cards[0].description}</p>
                        </div>
                    </div>
                </div>

                {/* Second Row: Remaining Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.slice(1).map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#2E5F5C] rounded-xl p-6 sm:p-8 border-l-4 border-[#3a7a76] min-h-[200px] flex flex-col justify-center"
                        >
                            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                                {card.title}
                            </h2>
                            <p className="text-white font-medium mb-3">{card.subtitle}</p>
                            <p className="text-white text-base sm:text-lg">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComplianceSection;
