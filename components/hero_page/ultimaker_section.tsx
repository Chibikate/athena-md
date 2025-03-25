import React from "react";
import UltimakerCard from "@/components/hero_page/ultimaker_card";
import { UltimakerCourses } from "../../data/ultimaker/ultimaker_data";

const UltimakerSection = () => {
  return (
    <div className="bg-[#F5F8FE] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#0b0d0f] mb-12 
          drop-shadow-md">
          Ultimaker Course
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {UltimakerCourses.map((ultimakercourse, index) => (
            <div key={index} className="flex justify-center">
              <UltimakerCard
                image={ultimakercourse.image}
                title={ultimakercourse.title}
                description={ultimakercourse.description}
                level={ultimakercourse.level}
                alt={ultimakercourse.alt}
                to={ultimakercourse.to}
                time={ultimakercourse.time}
                className="w-full max-w-[350px] transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimakerSection;