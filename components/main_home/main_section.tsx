import React from "react";
import Link from "next/link";
import MainCard from "@/components/main_home/main_card"; 

const MainCardSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#D0E4F2]">
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
              description="Courses offers step-by-step tutorial on tools used for medical planning"
            />
            <Link href="/mandibular-reconstruction">
              <button className="mt-4 px-4 py-2 bg-[#165388] text-white rounded-md">View this course</button>
            </Link>
          </div>
          <div className="text-center">
            <MainCard
              title="Pelvis Reconstruction"
              description="Learn the free and available courses by taking the quiz to retain information"
            />
            <Link href="/pelvis-reconstruction">
              <button className="mt-4 px-4 py-2 bg-[#165388] text-white rounded-md">View this course</button>
            </Link>
          </div>
          <div className="text-center">
            <MainCard
              title="3D Printing"
              description="Acquire background of tools used in the medical field"
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
  
  //The  MainCardSection  component is responsible for rendering the main card section on the home page. It contains three  MainCard  components and a button to view all courses. 
  //The  MainCard  component is responsible for rendering the individual card.