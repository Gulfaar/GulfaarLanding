import React from "react";
import { FaLock } from "react-icons/fa";

interface SecurityItemProps {
  title: string;
  description: string;
}

const SecurityItem: React.FC<SecurityItemProps> = ({ title, description }) => {
  return (
    <div className="flex items-start mb-4 text-white max-sm:text-base">
      <FaLock className="text-white text-xl mr-3 mt-1 min-w-[20px]" />
      <div>
        <h3 className="inline-flex text-lg font-semibold mr-2 whitespace-nowrap">{title} - </h3>
        <p className="md:inline-flex text-lg max-sm:text-base md:whitespace-nowrap">{description}</p>
      </div>
    </div>
  );
};

const DataSecuritySection: React.FC = () => {
  return (
    <section className="bg-teal-900 px-6 py-12 text-center max-sm:px-4" aria-labelledby="data-security-title">
      <h2 id="data-security-title" className="mb-5 text-3xl font-bold text-white max-sm:text-2xl">
        Data Security &amp; Protection
      </h2>
      <p className="mb-8 text-lg text-white max-sm:text-base">
        We implement strict security measures to protect your personal data, including:
      </p>
      <div className="mx-auto my-0 max-w-[800px] text-left">
        <SecurityItem title="Encryption & Secure Storage" description="Your data is encrypted and stored securely." />
        <SecurityItem title="Access Control" description="Only authorized personnel can access sensitive data." />
        <SecurityItem title="Regular Security Audits" description="We continuously monitor and update our systems for protection." />
      </div>
    </section>
  );
};

export default DataSecuritySection;