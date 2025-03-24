import React from "react";
import HowItWorks from "@/components/hero_page/howitworks_card";

const HowItWorksSection = () => {
  return (
    <div className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#D0E4F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#151A40] mb-2 sm:mb-4">
            How does it work?
          </h2>
          <p className="text-base sm:text-lg text-[#043873] max-w-xl sm:max-w-2xl mx-auto px-2">
            Are you looking for courses that can help you hone your technical skills
            while having a medical background or the other way around?
          </p>
        </div>
      </div>

      {/* Cards container with improved responsiveness */}
      <div className="relative mt-8 sm:mt-12 lg:mt-16 px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <HowItWorks
            title="Explore"
            description="Courses offers step-by-step tutorial on tools used for medical planning"
          />
          <HowItWorks
            title="Learn"
            description="Learn the free and available courses by taking the quiz to retain information"
          />
          <HowItWorks
            title="Improve Skills"
            description="Acquire background of tools used in the medical field"
          />
        </div>
      </div>

      <div className="pb-16 sm:pb-20 lg:pb-24"></div>
    </div>
  );
};

export default HowItWorksSection;