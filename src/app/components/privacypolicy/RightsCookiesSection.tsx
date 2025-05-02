import React from "react";

interface RightItemProps {
  icon: string;
  children: React.ReactNode;
}

const RightItem: React.FC<RightItemProps> = ({ icon, children }) => {
  return (
    <div className="flex items-center mb-5 max-sm:text-base">
      <i className={`${icon} mr-4 text-2xl`} aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
};

const RightsCookiesSection: React.FC = () => {
  return (
    <section
      className="px-10 py-16 text-center"
      aria-label="Rights and Cookies Information"
    >
      <div className="flex gap-8 justify-center mt-10 max-md:flex-col max-md:gap-5 max-md:items-center">
        <article className="p-10 text-white bg-red-400 rounded-xl w-[45%] max-md:w-full max-md:max-w-[500px]">
          <h2 className="mb-5 text-2xl font-semibold">
            Your Rights &amp; Choices
          </h2>
          <p className="mb-8 text-xl">You have the right to:</p>
          <div className="text-left">
            <RightItem icon="ti ti-file">
              Access Your Data – Request a copy of the personal data we store
            </RightItem>
            <RightItem icon="ti ti-edit">
              Modify Your Data –Update or correct your information.
            </RightItem>
            <RightItem icon="ti ti-trash">
              Delete Your Data – Request account deletion and data removal.
            </RightItem>
            <RightItem icon="ti ti-mail-off">
              Opt-Out – Unsubscribe from marketing communications at any time.
            </RightItem>
          </div>
        </article>
        <article className="p-10 text-white bg-red-400 rounded-xl w-[45%] max-md:w-full max-md:max-w-[500px]">
          <h2 className="mb-5 text-2xl font-semibold">
            Cookies &amp; Tracking Technologies
          </h2>
          <p className="mb-8 text-sm leading-normal">
            We use cookies and similar tracking tools to enhance your
            experience. For more details, please refer to our Policy.
          </p>
          <h2 className="mb-5 text-2xl font-semibold">
            Changes to This Policy
          </h2>
          <p className="mb-8 text-sm leading-normal">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated effective date.
          </p>
        </article>
      </div>
    </section>
  );
};

export default RightsCookiesSection;
