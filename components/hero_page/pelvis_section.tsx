import React from "react";
import PelvisCard from "@/components/hero_page/pelvis_card";
import { PelvisCourses } from "../../data//pelvis/pelvis_data";

const PelvisSection = () => {
  return (
    <div className="flex flex-col p-4  w-full min-h-screen">
      <p className="text-md md:text-3xl font-semibold text-center text-shadow-[0_2px_2px_#696767FF] py-7 text-[#0b0d0f]">
        Pelvis Course
      </p>
      <div className="grid grid-rows-2 grid-flow-row md:grid-flow-col gap-2 text-black w-full h-full">
        {PelvisCourses.map((pelviscourse, index) => (
          <PelvisCard
            key={index}
            image={pelviscourse.image}
            title={pelviscourse.title}
            description={pelviscourse.description}
            level={pelviscourse.level}
            alt={pelviscourse.alt}
            to={pelviscourse.to}
            time={pelviscourse.time}
          />
        ))}
      </div>
    </div>
  );
};

export default PelvisSection;
