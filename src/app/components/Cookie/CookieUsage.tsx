const CookiesUsage = () => {
    const cookieCategories = [
      {
        title: "Essential Cookies",
        description: "Necessary for website functionality, login, security, and accessibility.",
        link: "#",
      },
      {
        title: "Performance Cookies",
        description: "Help us analyze website traffic and optimize user experience.",
        link: "#",
      },
      {
        title: "Functional Cookies",
        description: "Store user preferences (e.g., language selection) for a smoother experience.",
        link: "#",
      },
      {
        title: "Advertising & Marketing Cookies",
        description: "Personalize ads and job recommendations based on browsing behavior.",
        link: "#",
      },
      {
        title: "Third-Party Cookies",
        description: "Used by external services such as Google Analytics, social media integrations, and advertising networks.",
        link: "#",
      },
    ];
  
    return (
      <section className="py-12 px-4 text-center ">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-[#2E5F5C] mb-2">How We Use Cookies?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Gulfaar uses cookies for various purposes, including:
        </p>
  
        {/* Cookie Categories */}
        <div className="max-w-4xl mx-auto space-y-4">
          {cookieCategories.map((cookie, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-left border border-gray-200"
            >
              <a href={cookie.link} className="text-[#2E5F5C] font-semibold hover:underline">
                {cookie.title}
              </a>
              <p className="text-gray-600 mt-1">{cookie.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CookiesUsage;
  