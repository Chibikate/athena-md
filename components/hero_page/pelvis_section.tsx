"use client";

import React from "react";
import Link from "next/link";
import PelvisCard from "@/components/hero_page/pelvis_card";
import { PelvisCourses } from "../../data/pelvis/pelvis_data";
import { FiArrowLeft } from "react-icons/fi";

const PelvisSection = () => {
  return (
    <div className="bg-[#F5F8FE] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
            {/* Back Link */}
            <Link 
              href="/main_homepage" 
              className="
                sm:absolute 
                sm:left-0 
                flex 
                items-center 
                gap-2 
                text-[#165388] 
                hover:text-[#0b3a66] 
                transition-colors 
                duration-300 
                group
                self-start
                sm:self-center
              "
            >
              <FiArrowLeft 
                className="
                  text-xl 
                  sm:text-2xl 
                  group-hover:scale-110 
                  transition-transform 
                  duration-300
                " 
              />
              <span className="text-medium font-medium">Courses</span>
            </Link>

            {/* Page Title */}
            <h2 className="
              text-2xl 
              md:text-3xl 
              font-bold 
              text-[#165388] 
              text-center
              drop-shadow-md
            ">
              Pelvis Course
            </h2>
          </div>
        </div>

        {/* Course Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          sm:gap-8 
          justify-center 
          items-stretch
        ">
          {PelvisCourses.map((pelviscourse, index) => (
            <div 
              key={index} 
              className="
                flex 
                justify-center 
                w-full
              "
            >
              <PelvisCard
                image={pelviscourse.image}
                title={pelviscourse.title}
                description={pelviscourse.description}
                level={pelviscourse.level}
                alt={pelviscourse.alt}
                to={pelviscourse.to}
                time={pelviscourse.time}
                className="
                  w-full 
                  max-w-[350px]
                  h-full
                  transform 
                  transition-all 
                  duration-300 
                  hover:scale-105
                  hover:shadow-lg
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PelvisSection;