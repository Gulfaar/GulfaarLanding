import React from "react";

const HeroSection = () => {
  return (
    <header className="flex relative flex-col self-stretch px-10 pt-4 pb-24 w-full font-semibold text-white min-h-[381px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/71f228ab061e8f7c8a16e4c50d1be12c5ac6f6fc?placeholderIfAbsent=true"
        alt="Global presence background"
        className="object-cover absolute inset-0 size-full"
      />
      <nav className="flex relative flex-wrap gap-5 justify-between w-full text-base max-md:mr-1.5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ba29a153e3c9b6933fa575fe6b348e94a5e5f190?placeholderIfAbsent=true"
          alt="Gulfaar logo"
          className="object-contain shrink-0 max-w-full aspect-[2.13] w-[213px]"
        />
        <div className="flex gap-5 my-auto">
          <a href="#" className="grow my-auto font-medium">
            Jobseeker
          </a>
          <div className="flex gap-5 items-center capitalize whitespace-nowrap">
            <a
              href="#"
              className="overflow-hidden self-stretch px-6 py-4 my-auto bg-teal-800 rounded-lg w-[117px] max-md:pr-5"
            >
              Employer
            </a>
          </div>
          <a
            href="#"
            className="overflow-hidden gap-2.5 self-stretch px-5 py-4 text-white bg-teal-800 rounded-lg min-h-10"
          >
            Post Job
          </a>
        </div>
      </nav>
      <nav className="flex relative flex-wrap gap-5 self-end text-xl text-white mt-4">
        <a href="#" className="text-yellow-400">
          Jobs
        </a>
        <a href="#">Blog</a>
        <a href="#">Training</a>
        <a href="#" className="basis-auto">
          Work-Force Solutions
        </a>
        <a href="#" className="basis-auto">
          Partner with us
        </a>
      </nav>
      <h1 className="relative self-center mt-16 text-6xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        OUR GLOBAL PRESENCE
      </h1>
      <p className="relative self-center mt-8 text-2xl text-white max-md:max-w-full">
        Connecting Talent & Businesses Across the World
      </p>
    </header>
  );
};

export default HeroSection;
