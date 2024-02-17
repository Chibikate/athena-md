import React from "react";
import Link from "next/link";

const LearningSection = () => {
  return (
    <div className="flex flex-col">
      <p className="text-3xl ml-52 p-10 text-[#772EFF] font-bold">
        Course Overview
      </p>
      <div className="flex flex-col border-2 border-black mr-96 ml-60 p-5">
        <p className="ml-10 pt-6">
          <span className="text-2xl font-bold text-[#A46C00] mr-4">1</span>{" "}
          <span className="text-xl font-bold text-black">
            Virtual surgical planning (VSP)
          </span>
          <br />
          <span className="ml-9">
            is a planning technique that allows pre-surgical planning in a
            virtual environment.
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center mr-44 p-5 pb-11">
        <div className="flex flex-row">
          <Link href="./3dslicer">
            <p className="p-2 rounded-md  text-white hover:font-bold font-bold cursor bg-[#772EFF] hover-border hover:ring-offset-[#b7d5eb]  hover:text-black hover:ring-2 hover:ring-offset-2">
              Start this Course
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;
