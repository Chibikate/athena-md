import React from "react";
import Link from "next/link";
import MainCard from "@/components/main_home/main_card";
import Mandibular  from "@/public/main_course/mandibular.png";
import Pelvis from "@/public/main_course/pelvis.png";
import Printing3 from "@/public/main_course/printing.png";

const MainCardSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FE]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#151A40] mb-4">
            EXPLORE COURSES
          </h2>
        </div>
        
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <MainCard
              title="Mandibular Reconstruction"
              description="Courses offer step-by-step tutorial on tools used for medical planning"
              image={Mandibular}
              alt="Mandibular Reconstruction"
            />
            <Link href="/main_homepage/courses/mandible">
              <button className="mt-4 px-4 py-2 bg-[#165388] text-white rounded-md">View this course</button>
            </Link>
          </div>
          <div className="text-center">
            <MainCard
              title="Pelvis Reconstruction"
              description="Learn the free and available courses by taking the quiz to retain information"
              image={Pelvis}
              alt="Pelvis Reconstruction"
            />
            <Link href="/pelvis-reconstruction">
              <button className="mt-4 px-4 py-2 bg-[#165388] text-white rounded-md">View this course</button>
            </Link>
          </div>
          <div className="text-center">
            <MainCard
              title="3D Printing"
              description="Acquire background of tools used in the medical field"
              image={Printing3}
              alt="3D Printing"
            />
            <Link href="/3d-printing">
              <button className="mt-4 px-4 py-2 bg-[#165388] text-white rounded-md">View this course</button>
            </Link>
          </div>
        </div>    
      </div>
    </div>
  );
};

export default MainCardSection;
