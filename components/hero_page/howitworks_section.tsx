import React from "react";
import HowItWorks from "@/components/hero_page/howitworks_card"; // Adjust import path as needed

const HowItWorksSection = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#D0E4F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#151A40] mb-4">
            How does it works?
          </h2>
          <p className="text-base sm:text-lg text-[#043873] max-w-2xl mx-auto px-4">
            Are you looking for courses that can help you hone your technical skills
            while having a medical background or the other way around?
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative w-full">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
            {/* Responsive and centered cards */}
            <div className="w-full max-w-[300px] md:w-1/3 transform transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-10">
              <HowItWorks
                title="Explore"
                description="Courses offers step-by-step tutorial on tools used for medical planning"
                className="h-full w-full"
              />
            </div>
            
            <div className="w-full max-w-[300px] md:w-1/3 transform transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-10">
              <HowItWorks
                title="Learn"
                description="Learn the free and available courses by taking the quiz to retain information"
                className="h-full w-full"
              />
            </div>
            
            <div className="w-full max-w-[300px] md:w-1/3 transform transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-10">
              <HowItWorks
                title="Improve Skills"
                description="Acquire background of tools used in the medical field"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;