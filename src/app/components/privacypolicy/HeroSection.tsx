import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="overflow-hidden relative h-[335px]"
      aria-label="Privacy Policy Hero"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/38cc0bcf4f4652ace9745f59608531b711d7e7b6"
        className="object-cover size-full"
        alt="Hero"
      />
      <div className="absolute top-2/4 left-2/4 text-center text-white -translate-x-2/4 -translate-y-2/4">
        <h1 className="mb-4 text-5xl font-bold max-sm:text-4xl">
          PRIVACY POLICY
        </h1>
        <p className="text-2xl max-sm:text-2xl">
          At Gulfaar, we prioritize your privacy and securely handle your
          information
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
