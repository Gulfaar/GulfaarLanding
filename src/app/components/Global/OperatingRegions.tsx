import Image from "next/image";

const bulletIcon = "/icons/dot-icon.png"; // Replace with your own bullet icon

const regions = [
  {
    name: "Middle East & GCC",
    countries: "UAE | Saudi Arabia | Qatar | Kuwait | Oman | Bahrain",
    image: "/icons/middle-east.png",
    points: [
      "Manpower supply for oil & gas, construction, hospitality, and healthcare sectors.",
      "Contract-based and project-based workforce solutions.",
      "End-to-end visa processing & placement assistance.",
    ],
  },
  {
    name: "Europe",
    countries: "Germany | UK | France | Spain | Netherlands | Poland | More",
    image: "/icons/europe.png",
    points: [
      "Global mobility services for job seekers aiming for European markets.",
      "AI-powered language training, cultural adaptation, and workforce recruitment.",
      "Industry-focused hiring for engineering, manufacturing, finance, and hospitality.",
    ],
  },
  {
    name: "South America",
    countries: "Brazil | Argentina | Chile | Colombia | More",
    image: "/icons/south-america.png",
    points: [
      "Skilled labor mobility solutions for major industries.",
      "Partnerships for corporate hiring and workforce training.",
    ],
  },
  {
    name: "Asia-Pacific",
    countries: "India | China | Malaysia | Singapore | Australia | Japan | More",
    image: "/icons/asia-pacific.png",
    points: [
      "BPO, IT outsourcing, and tech-driven workforce solutions.",
      "Corporate & industrial staffing for multinational businesses.",
      "Training and upskilling programs for career enhancement.",
    ],
  },
  {
    name: "Africa",
    countries: "South Africa | Nigeria | Kenya | Egypt | More",
    image: "/icons/africa.png",
    points: [
      "Skilled and semi-skilled workforce deployment for construction, mining, and energy sectors.",
      "Job training programs & international hiring solutions.",
      "Rapidly growing outsourcing solutions for call centers and IT services.",
    ],
  },
  {
    name: "North America",
    countries: "USA | Canada | Mexico",
    image: "/icons/north-america.png",
    points: [
      "Specialized hiring for IT, healthcare, construction, BPO, and logistics sectors.",
      "Workforce solutions for corporate and industrial businesses.",
    ],
  },
];

export default function WhereWeOperate() {
  return (
    <section className="bg-[#17403F] py-10 px-4 sm:py-12 sm:px-6 md:py-16 md:px-10 lg:py-20 lg:px-16 xl:px-24 text-white w-full">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-10 lg:mb-12">
        Where We Operate
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {regions.map((region, idx) => (
          <div key={idx} className="flex gap-4 sm:gap-5 items-start">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 mt-1">
              <Image
                src={region.image}
                alt={region.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
                sizes="(max-width: 640px) 40px, 48px"
              />
            </div>

            {/* Region Content */}
            <div className="text-[#C1DDDA] flex-1">
              <h3 className="text-white font-semibold text-lg sm:text-xl mb-1">
                {region.name}
              </h3>
              <p className="text-sm sm:text-base text-[#C1DDDA] mb-2">
                {region.countries}
              </p>
              <ul className="space-y-2">
                {region.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
                    <Image
                      src={bulletIcon}
                      alt="bullet"
                      width={12}
                      height={12}
                      className="mt-1.5 flex-shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-white font-medium text-sm sm:text-[15px] mt-10 sm:mt-12 lg:mt-16 max-w-3xl mx-auto">
        <span className="block font-bold text-base sm:text-[17px] mb-1">
          Expanding to More Regions!
        </span>
        We are constantly growing, adding new markets and creating stronger global connections to meet the ever-changing needs of businesses and job seekers.
      </p>
    </section>
  );
}