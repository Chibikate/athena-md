"use client"; 

import React from "react";
import PelvisCard from "@/components/hero_page/pelvis_card";
import { PelvisCourses } from "../../data/pelvis/pelvis_data";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const PelvisSection = () => {
  const router = useRouter();

  return (
    <div className="bg-[#F5F8FE] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex w-full items-center">
       
          <button
            onClick={() => router.push("/main_homepage")}
            className="flex gap-2 px-4 py-2 bg-[#165388] text-white text-sm rounded-lg 
            hover:bg-[#0b3a66] transition-colors duration-300 shadow-md absolute left-0 ml-4"
          >
            <FiArrowLeft className="text-lg" />
            Courses
          </button>

       
          <h2
            className="flex-1 text-2xl text-center md:text-3xl font-bold text-[#165388] 
            drop-shadow-md"
          >
            Pelvis Course
          </h2>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PelvisCourses.map((pelviscourse, index) => (
          <div key={index} className="flex justify-center">
            <PelvisCard
              image={pelviscourse.image}
              title={pelviscourse.title}
              description={pelviscourse.description}
              level={pelviscourse.level}
              alt={pelviscourse.alt}
              to={pelviscourse.to}
              time={pelviscourse.time}
              className="w-full max-w-[350px] transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PelvisSection;
