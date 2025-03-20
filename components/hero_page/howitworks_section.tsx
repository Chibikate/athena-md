import React from "react";
import HowItWorks from "@/components/hero_page/howitworks_card";

// Data sulod sa How it Works Card

const HowItWorksSection = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#D0E4F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#151A40] mb-4">
            How does it works?
          </h2>
          <p className="text-lg text-[#043873] max-w-2xl mx-auto">
            Are you looking for courses that can help you hone your technical skills
            while having a medical background or the other way around?
          </p>
        </div>
      </div>


      <div className="absolute left-0 right-0 -bottom-12 mt-24">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0">
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


      <div className="pb-24"></div>
    </div>
  );
};

export default HowItWorksSection;
