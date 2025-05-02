export default function TrustedPartner() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-24 py-16 text-[#17403F]">
      {/* Row 1: Heading and First Card */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
        {/* Left: Heading */}
        <div className="flex-1 mt-4">
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-xl">
            What Makes Gulfaar a Trusted Global Workforce Partner?
          </h2>
        </div>
        {/* Right: First Card */}
        <div className="flex-1">
          <div className="bg-[#2B6762] text-white rounded-lg p-9 h-38">
            <h3 className="text-lg font-semibold">
              AI-Powered Recruitment Solutions
            </h3>
            <p className="text-sm mt-2">
              Intelligent hiring & talent-matching in multiple countries.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2: Two Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#2B6762] text-white rounded-lg p-9 h-38">
          <h3 className="text-lg font-semibold">
            Cross-Border Workforce Management
          </h3>
          <p className="text-sm mt-2">
            Seamless hiring, payroll, and compliance solutions.
          </p>
        </div>
        <div className="bg-[#2B6762] text-white rounded-lg p-9 h-38">
          <h3 className="text-lg font-semibold">
            Training & Language Support for Relocation
          </h3>
          <p className="text-sm mt-2">
            Helping candidates prepare for global careers.
          </p>
        </div>
      </div>

      {/* Row 3: Two Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-[#2B6762] text-white rounded-lg p-9 h-38">
          <h3 className="text-lg font-semibold">
            Global Network of Employers & Job Seekers
          </h3>
          <p className="text-sm mt-2">
            Thousands of professionals placed in international jobs.
          </p>
        </div>
        <div className="bg-[#2B6762] text-white rounded-lg p-9 h-38">
          <h3 className="text-lg font-semibold">
            Industry-Specific Expertise
          </h3>
          <p className="text-sm mt-2">
            Covering healthcare, IT, construction, finance, logistics, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
