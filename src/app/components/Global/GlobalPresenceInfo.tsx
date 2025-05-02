import Image from "next/image";
import React from "react";

const GlobalPresenceInfo = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 md:py-12 md:px-10 lg:py-16 lg:px-20 xl:px-32">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="lg:w-1/2 text-[#17403F]">
          <p className="text-base sm:text-[17px] leading-7 sm:leading-8 font-light text-justify">
            At Gulfaar, we take pride in our expansive global footprint, ensuring
            businesses and job seekers worldwide have access to the best recruitment,
            workforce solutions, and skill development programs. With a strong presence
            across multiple continents, we connect top-tier talent with leading
            employers, providing efficient, AI-powered hiring and workforce management
            solutions. From manpower consultancy and skill training to contract-based
            hiring and outsourcing solutions, our reach spans diverse industries,
            cultures, and economies, making us a trusted global partner for businesses
            and professionals alike.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/earth.png"
              alt="Global presence map"
              width={200}
              height={200}
              className="w-full h-auto object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceInfo;