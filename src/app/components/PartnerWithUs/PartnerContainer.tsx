import Image from "next/image";

const PartnerWithGulfaar = () => {
    return (
      <section className="bg-white py-12 w-full">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Text Column - Adjusted for better alignment */}
                <div className="md:w-1/2">
                  <p className="text-gray-900 leading-relaxed text-base md:text-[15px]">
                  At <span className="font-semibold ">Gulfaar</span>, we believe in building strong partnerships that create mutual growth and long-term  success. Whether you're an entrepreneur, business owner, recruitment agency, training institute, or  investor, we offer diverse collaboration opportunities that allow you to expand your business while  leveraging our cutting-edge AI-powered workforce solutions and global reach.  By partnering with <span className="font-semibold ">Gulfaar</span> , you become part of a global ecosystem that connects businesses,  skilled professionals, training institutions, and industry leaders.
                  </p>
                </div>
                
                {/* Image Column - Tightened to text */}
                <div className="md:w-1/2 flex justify-end">
  <div className="w-full sm:max-w-[400px]">
    <Image
      src="/images/Partner-hero.jpg" // Replace with your actual image URL
      alt="Person working at a desk with a laptop"
      width={400}
      height={240}
      className="rounded-lg object-cover w-full h-auto"
    />
  </div>
</div>
              </div>
            </div>
          </section>
    );
  };
  
  export default PartnerWithGulfaar;
  