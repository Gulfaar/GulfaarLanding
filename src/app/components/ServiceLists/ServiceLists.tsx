"use client";

import Image from "next/image";
import React, { useState } from "react";

const ServiceLists = () => {
  const services = [
    {
      title: "Job Portal",
      description: "Whether you're hiring or job hunting, We bring the best to your doorstep",
      image: "/job.png",
      video: "https://www.youtube.com/embed/SG7OlXJaisw",
      route: "portal.gulfaar.com"
    },
    {
      title: "Facilitation Management",
      description: "Smart solutions for seamless facility management. We handle the space, you focus on business",
      image: "/fm.png",
      video: "https://www.youtube.com/embed/fS_Zq1aMEQ0",
      route: "fm.gulfaar.com"
    },
    {
      title: "Gulfaar AI",
      description: "Powering decisions with intelligent automation. AI that learns, adapts, and accelerates growth",
      image: "/ai.png",
      video: "https://www.youtube.com/embed/2oLRX3jDD84",
      route: "ai.gulfaar.com"
    },
    {
      title: "BPO",
      description: "Expert support, streamlined operations. Focus on growth we’ll handle the rest.",
      image: "/bpo.png",
      video: "https://www.youtube.com/embed/QAkMBtKwZ2Q",
      route: "bpo.gulfaar.com"
    },
    {
      title: "HR Consultancy",
      description: "Empowering businesses with the right talent. Strategic HR solutions tailored to your needs",
      image: "/hr.png",
      video: "https://www.youtube.com/embed/9zwFzgeKehM",
      route: "hr.gulfaar.com"
    },
    {
      title: "Training",
      description: "Upskill your team for tomorrow’s challenges. Practical training that drives real results.",
      image: "/training.png",
      video: "https://www.youtube.com/embed/lpmE6CLByAE",
      route: "training.gulfaar.com"
    }
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-24 bg-white py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1B4844] mb-12">Our projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative group rounded-[20px] overflow-hidden bg-[#1B4844] h-[320px]">
            <Image 
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#1B4844]/20 via-[#06A958]/80 to-[#06A958]/85"></div>

            <div className="absolute top-6 right-6 z-10">
              <div 
                className="relative cursor-pointer animate-pulse-scale"
                onClick={() => setActiveVideo(service.video)}
              >
                <div className="relative w-[52px] h-[52px]">
                  <Image 
                    src="/playbutton.png"
                    alt="Play"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <h2 className="text-white text-[22px] md:text-[26px] font-bold leading-tight mb-3">
                {service.title}
              </h2>
              <p className="text-white/90 text-[14px] md:text-[16px] leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex justify-center w-full">
                <a
                  href={`https://${service.route}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-[#1B4844] font-semibold text-[16px] md:text-[18px] px-6 py-2 md:px-8 md:py-3 rounded-[10px] hover:bg-gray-100 transition">
                    View Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <iframe
              className="w-full h-full rounded-xl"
              src={`${activeVideo}?autoplay=1`}
              title="Service Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button 
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-scale {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceLists;
