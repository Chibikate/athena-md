import React from "react";
import MainCard from "@/components/main_home/main_card";
import Mandibular from "@/public/main_course/mandibular.png";
import Pelvis from "@/public/main_course/pelvis.png";
import Printing3 from "@/public/main_course/printing.png";

const MainCardSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F8FE]">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#151A40] mb-4">
          EXPLORE COURSES
        </h2>
      </div>

      <div className="flex justify-center space-x-8">
        <MainCard
          title="Mandibular Reconstruction"
          description="Courses offer step-by-step tutorial on tools used for medical planning"
          image={Mandibular}
          alt="Mandibular Reconstruction"
          time="1hr"
          video="2 Video"
          lesson="8 Lesson"
          to="/main_homepage/courses/mandible"

        />

        <MainCard
          title="Pelvis Reconstruction"
          description="Learn the free and available courses by taking the quiz to retain information"
          image={Pelvis}
          time="1hr"
          video="1 Video"
          lesson="5 Lesson"
          alt="Pelvis Reconstruction"
          to="/pelvis-reconstruction"
        />

        <MainCard
          title="3D Printing"
          description="Acquire background of tools used in the medical field"
          image={Printing3}
          time="1hr"
          video="2 Video"
          lesson="5 Lesson"
          alt="3D Printing"
          to="/3d-printing"
        />
      </div>

    </div>
  );
};

export default MainCardSection;