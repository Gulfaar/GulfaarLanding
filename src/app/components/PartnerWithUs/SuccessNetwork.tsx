export default function GulfarSuccess() {
    return (
      <div className="relative w-full h-[400px] flex justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Background with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Partner-contacts.svg')", // Replace with your background image path
          }}
        >
          <div className="absolute inset-0 bg-[#FFF200] opacity-50"></div> {/* Yellow overlay */}
        </div>
  
        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-black text-4xl font-bold">
            Join the Gulfar Success Network!
          </h2>
          <p className="text-black mt-4 text-base leading-relaxed">
            By partnering with Gulfar, you become part of a global movement shaping the future of recruitment, workforce outsourcing, and skill development. Whether you’re looking to own a franchise, collaborate on hiring solutions, or expand into new markets, we have the tools, technology, and expertise to help you succeed.
          </p>
          <div className="mt-6 flex justify-center items-center space-x-4">
            <p className="text-black text-base font-normal">
              Ready to Partner with Us?
            </p>
            <button className="bg-teal-800 text-white px-6 py-2 rounded-md hover:bg-teal-900 transition-colors">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    );
  }