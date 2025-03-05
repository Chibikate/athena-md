import React from "react";
import HowItWorks from "@/components/hero_page/howitworks_card"; 

const HowItWorksSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#D0E4F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#151A40] mb-4">
            How does it works?
          </h2>
          <p className="text-lg text-[#043873] max-w-2xl mx-auto">
            Are you looking for courses that can help you hone your technical skills 
            while having a medical background or the other way around?
          </p>
        </div>
        
        <div className="flex justify-center space-x-8">
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
    </div>
  );
};

export default HowItWorksSection;