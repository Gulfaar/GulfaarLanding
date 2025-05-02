import React from "react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-base text-white no-underline hover:underline focus:underline focus:outline-offset-4"
    >
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="px-10 py-16 text-white bg-teal-800 max-sm:px-5 max-sm:py-10">
      <div className="mx-auto my-0 max-w-[1360px]">
        <div className="mb-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a92efeb51e8523aecbed7b92df3134c146eba5e"
            className="mb-5 w-[177px]"
            alt="Company logo"
          />
          <address className="text-lg opacity-80 max-w-[377px] not-italic">
            Tharakkandam Building, 1st Floor, Kurishupally Rd, Ravipuram,
            Perumanoor, Kochi, Kerala 682015
          </address>
        </div>
        <div className="flex justify-between max-md:flex-col max-md:gap-10">
          <nav
            className="text-left max-md:w-full max-md:text-center"
            aria-label="Company links"
          >
            <h2 className="mb-8 text-xl font-semibold">Company</h2>
            <div className="flex flex-col gap-4">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Our Global Presence</FooterLink>
              <FooterLink href="#">Email</FooterLink>
              <FooterLink href="#">Regulations</FooterLink>
            </div>
          </nav>
          <nav
            className="text-left max-md:w-full max-md:text-center"
            aria-label="Job categories"
          >
            <h2 className="mb-8 text-xl font-semibold">Job Categories</h2>
            <div className="flex flex-col gap-4">
              <FooterLink href="#">Telecommunications</FooterLink>
              <FooterLink href="#">Hotels &amp; Tourism</FooterLink>
              <FooterLink href="#">Construction</FooterLink>
              <FooterLink href="#">Education</FooterLink>
              <FooterLink href="#">Financial Services</FooterLink>
            </div>
          </nav>
          <div className="text-left w-[306px] max-md:w-full max-md:text-center max-md:max-w-[500px]">
            <h2 className="mb-8 text-xl font-semibold">Newsletter</h2>
            <p className="mb-5 text-sm">
              Eu nunc pretium vitae platea. Non netus elementum vulputate
            </p>
            <form className="flex flex-col gap-5">
              <label htmlFor="email-input" className="sr-only">
                Email Address
              </label>
              <input
                id="email-input"
                type="email"
                placeholder="Email Address"
                className="px-5 py-4 text-sm text-white bg-transparent rounded-xl border border-white border-solid focus:outline-none focus:ring-2 focus:ring-white"
                aria-required="true"
              />
              <button
                type="submit"
                className="p-4 text-base font-semibold text-teal-800 bg-white rounded-xl cursor-pointer border-[none] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-800"
              >
                Subscribe now
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
