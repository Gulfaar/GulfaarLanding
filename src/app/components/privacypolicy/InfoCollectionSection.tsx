import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <article className="px-9 py-12 text-white bg-teal-800 rounded-xl w-[300px] max-md:w-full max-md:max-w-[500px] max-sm:px-5 max-sm:py-8">
      <h3 className="mb-5 text-2xl font-semibold text-center">{title}</h3>
      <p className="text-xl leading-7">{description}</p>
    </article>
  );
};

const InfoCollectionSection: React.FC = () => {
  return (
    <section
      className="px-10 py-16 text-center"
      aria-labelledby="info-collection-title"
    >
      <h2
        id="info-collection-title"
        className="mb-5 text-4xl font-bold text-teal-800 max-sm:text-2xl"
      >
        Information We Collect
      </h2>
      <p className="mb-10 text-1xl max-sm:text-lg">
        We may collect the following types of personal information:
      </p>
      <div className="flex gap-17 justify-center mt-10 max-md:flex-col max-md:gap-5 max-md:justify-start items-start ">
        <InfoCard
          title="Personal Details"
          description="Name, email, phone number, address, date of birth."
        />
        <InfoCard
          title="Employment Information"
          description="Resume/CV, job preferences, skills, work experience, certifications"
        />
        <InfoCard
          title="Technical Data"
          description="IP address, browser type, device details, cookies, and usage data"
        />
        <InfoCard
          title="Communication Data"
          description="Messages, emails, and interactions with our support team"
        />
      </div>
    </section>
  );
};

export default InfoCollectionSection;
