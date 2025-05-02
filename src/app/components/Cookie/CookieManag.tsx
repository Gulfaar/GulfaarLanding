const ManagingCookies = () => {
    return (
      <section className="py-12 px-6 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-[#2E5F5C] mb-6">Managing Cookies</h2>
        
        {/* Content Box */}
        <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 flex items-center gap-4 max-w-3xl w-full">
          {/* Icon */}
          <div className="bg-[#2E5F5C] hidden md:block text-left text-white p-2 rounded-full">
            🍪
          </div>
          
          {/* Text */}
          <p className="text-gray-700 text-left">
            To modify your cookie preferences, visit our <a href="#" className="text-[#2E5F5C] font-semibold">Cookie Settings</a> page or update settings via your browser.
          </p>
          
          {/* Buttons */}
          <div className="flex space-x-2">
            <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-lg">Decline</button>
            <button className="bg-[#2E5F5C] text-white px-4 py-2 rounded-lg">Apply</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default ManagingCookies;
  