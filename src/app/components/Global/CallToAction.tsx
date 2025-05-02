import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[300px] py-6 px-4">
      <div className="relative w-full max-w-6xl rounded-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-[rgba(255,242,0,0.5)] rounded-lg"
          style={{ 
            backgroundImage: `url('/images/call-bg.png')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 py-6 sm:px-6 sm:py-8 text-black gap-6">
          <div className="w-full md:w-1/2 order-1 md:order-2 h-64 sm:h-80 rounded-lg overflow-hidden">
            <img
              src="/global.jpg"
              alt="Partnership"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-teal-700">
              Gulfaar: Bridging Talent & Opportunities Worldwide!
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              With offices, hiring partners, and training centers across the world, we ensure businesses get the best talent and job seekers find the right opportunities. No matter where you are, Gulfaar connects you to a world of possibilities!
            </p>
            <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-teal-800 text-white rounded-md hover:bg-teal-700 transition text-sm sm:text-base">
              Contacts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;