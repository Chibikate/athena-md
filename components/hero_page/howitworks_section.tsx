import React from "react";
import HowItWorks from "@/components/hero_page/howitworks_card"; // Adjust import path as needed

const HowItWorksSection = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#EDF5FE]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#151A40] mb-4">
            How does it works?
          </h2>
          <p className="text-base sm:text-lg text-[#043873] max-w-2xl mx-auto">
            Are you looking for courses that can help you hone your technical skills
            while having a medical background or the other way around?
          </p>
        </div>

        {/* Cards Container */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {/* First Card */}
            <div className="w-full max-w-[300px] transform transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-10">
              <HowItWorks
                title="Explore"
                description="Courses offers step-by-step tutorial on tools used for medical planning"
                className="h-full w-full"
              />
            </div>
            
            {/* Second Card */}
            <div className="w-full max-w-[300px] transform transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-10">
              <HowItWorks
                title="Learn"
                description="Learn the free and available courses by taking the quiz to retain information"
                className="h-full w-full"
              />
            </div>
            
            {/* Third Card - center this on medium screens when in 2-column layout */}
            <div className="w-full max-w-[300px] sm:col-span-2 lg:col-span-1 sm:max-w-[300px] transform transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:z-10">
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