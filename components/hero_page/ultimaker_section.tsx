import React from "react";
import UltimakerCard from "@/components/hero_page/ultimaker_card";
import { UltimakerCourses } from "../../data//ultimaker/ultimaker_data";

const UltimakerSection = () => {
  return (
    <div className="flex flex-col p-4 items-start w-full min-h-screen">
      <p className="text-md md:text-4xl font-bold text-shadow-[0_2px_2px_#000000] py-7">
        Ultimaker Course
      </p>
      <div className="grid grid-rows-2 grid-flow-row md:grid-flow-col gap-2 text-black w-full h-full">
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
