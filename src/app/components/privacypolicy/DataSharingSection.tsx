import React from "react";
import { IoIosCheckbox } from "react-icons/io";

interface DataSharingItemProps {
  title: string;
  description: string;
}

const DataSharingItem: React.FC<DataSharingItemProps> = ({ title, description }) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-10 text-left">
      <div className="flex  ">
      <IoIosCheckbox className="text-teal-800 text-3xl mr-2 min-w-[24px]" />
      <h3 className="text-lg font-semibold text-teal-900">{title}</h3>
      </div>
      <p className="text-base text-gray-700 sm:mt-0 mt-1">{description}</p>
     
    </div>
  );
};

const DataSharingSection: React.FC = () => {
  return (
    <section
      className="px-6 py-12 text-center max-sm:px-4"
      aria-labelledby="data-sharing-title"
    >
      <h2
        id="data-sharing-title"
        className="mb-5 text-4xl font-bold text-teal-800 max-sm:text-2xl"
      >
        Sharing &amp; Disclosure of Data
      </h2>
      <p className="mb-8 text-xl max-sm:text-lg">
        We do not sell your personal data. However, we may share your
        information with:
      </p>
      <div className="mx-auto my-0 max-w-[800px]">
        <DataSharingItem
          title="Employers & Recruiters"
          description="To match candidates with job opportunities"
        />
        <DataSharingItem
          title="Third-Party Service Providers"
          description="For website hosting, analytics, and payment processing."
        />
        <DataSharingItem
          title="Legal Authorities"
          description="If required by law, for security, fraud prevention, or compliance."
        />
      </div>
    </section>
  );
};

export default DataSharingSection;
