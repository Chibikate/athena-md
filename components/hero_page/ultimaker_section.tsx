import React from "react";
import UltimakerCard from "@/components/hero_page/ultimaker_card";
import { UltimakerCourses } from "../../data//ultimaker/ultimaker_data";

const UltimakerSection = () => {
  return (
    <div className="flex flex-col p-4 w-full min-h-screen">
      <p className="text-md md:text-3xl font-semibold text-center text-shadow-[0_2px_2px_#696767FF] py-7 text-[#0b0d0f]">
        Ultimaker Course
      </p>
      <div className="grid grid-rows-1 grid-flow-row md:grid-flow-col gap-4 text-black w-full h-full">
        {UltimakerCourses.map((ultimakercourse, index) => (
          <UltimakerCard
            key={index}
            image={ultimakercourse.image}
            title={ultimakercourse.title}
            description={ultimakercourse.description}
            level={ultimakercourse.level}
            alt={ultimakercourse.alt}
            to={ultimakercourse.to}
            time={ultimakercourse.time}
          />
        ))}
      </div>
    </div>
  );
};

export default UltimakerSection;
