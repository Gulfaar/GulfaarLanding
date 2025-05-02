import Image from "next/image";

const CookiesInfo = () => {
  return (
    <section className="flex flex-col items-center text-center py-10 px-4">
      {/* Cookie Icon */}
      <div className="mb-4">
        <Image src="/cookie.png" alt="Cookie Icon" width={40} height={40} />
      </div>
      
      {/* Title */}
      <h2 className="text-xl font-semibold text-[#2E5F5C] mb-2">What Are Cookies?</h2>
      
      {/* Description */}
      <p className="text-gray-600 max-w-2xl">
        Cookies are small text files stored on your device when you visit a website. 
        They help websites recognize users, remember preferences, and provide a personalized browsing experience.
      </p>
    </section>
  );
};

export default CookiesInfo;
