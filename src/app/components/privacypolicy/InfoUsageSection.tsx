import React from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";




interface CheckItemProps {
  children: React.ReactNode;
}

const CheckItem: React.FC<CheckItemProps> = ({ children }) => {
  return (
    <div className="flex items-center mb-5 text-xl max-sm:text-base">
      <i
        className="ti ti-circle-check mr-4 text-2xl text-teal-800"
        aria-hidden="true"
      />
      <p>{children}</p>
    </div>
  );
};

const InfoUsageSection: React.FC = () => {
  return (
    <section
      className="px-10 py-16 text-center bg-[#FFF200] bg-opacity-50"
      aria-labelledby="info-usage-title"
    >
      <h2
        id="info-usage-title"
        className="mb-5 text-5xl font-bold text-teal-800 max-sm:text-2xl"
      >
        How We Use Your Information
      </h2>
      <p className="mb-10 text-2xl max-sm:text-lg">
        We use your information to:
      </p>
      <div className="flex justify-between items-center mx-auto my-0 max-w-[1200px] max-md:flex-col max-md:gap-5 max-md:items-center">
        <div className="text-left space-y-4 text-xl max-sm:text-lg">
          <div className="flex items-start gap-2">
            <MdOutlineRadioButtonChecked className="text-teal-800 mt-1" />
            <span>Provide job-matching services and recruitment support.</span>
          </div>
          <div className="flex items-start gap-2">
            <MdOutlineRadioButtonChecked className="text-teal-800 mt-1" />
            <span>Process job applications and facilitate employer connections.</span>
          </div>
          <div className="flex items-start gap-2">
            <MdOutlineRadioButtonChecked className="text-teal-800 mt-1" />
            <span>Improve website functionality and user experience.</span>
          </div>
          <div className="flex items-start gap-2">
            <MdOutlineRadioButtonChecked className="text-teal-800 mt-1" />
            <span>Send important updates, job alerts, and marketing communications.</span>
          </div>
          <div className="flex items-start gap-2">
            <MdOutlineRadioButtonChecked className="text-teal-800 mt-1" />
            <span>
              Ensure website security, fraud prevention, and compliance with legal
              obligations.
            </span>
          </div>
        </div>
        <div className="w-2/5 max-md:mt-10 max-md:w-full">
          <img
            src="/data.png"
            className="w-full"
            alt="Database illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoUsageSection;
