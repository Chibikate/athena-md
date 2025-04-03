import React from "react";
import MainCard from "@/components/main_home/main_card";
import Mandibular from "@/public/main_course/mandibular.png";
import Pelvis from "@/public/main_course/Pelvis.png";
import Printing from "@/public/main_course/printing.png";

const MainCardSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FE]">
      <div className="text-center mb-12">
        <h2 className="
              text-2xl 
              md:text-3xl 
              font-bold 
              text-[#165388] 
              text-center
              drop-shadow-md
            ">
              EXPLORE COURSES
            </h2>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          <div className="flex justify-center">
            <MainCard
              title="Mandibular Reconstruction"
              description="Learn to reconstruct the mandible using Virtual Surgical Planning"
              image={Mandibular}
              alt="Mandibular Reconstruction"
              time="1hr"
              lesson="6 Lessons"
              to="/courses"
              className="w-full max-w-[350px] transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex justify-center">
            <MainCard
              title="Pelvis Reconstruction"
              description="Learn to reconstruct the pelvis using Virtual Surgical Planning"
              image={Pelvis}
              time="1hr"
              lesson="6 Lessons"
              alt="Pelvis Reconstruction"
              to="/pelviscourses"
              className="w-full max-w-[350px] transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex justify-center">
            <MainCard
              title="Ultimaker Cura"
              description="Learn to use Ultimaker Cura for 3D printing preparation"
              image={Printing}
              time="1hr"
              lesson="4 Lessons"
              alt="3D Printing"
              to="/ultimakercourses"
              className="w-full max-w-[350px] transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCardSection;