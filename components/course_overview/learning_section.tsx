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
        <p className="ml-10 pt-6">
          <span className="text-2xl font-bold text-[#A46C00]  mr-4">2</span>{" "}
          <span className="text-xl font-bold text-black">
            Computed Tomography (CT)
          </span>
            <br />
          <span className="ml-9">
            is considered the gold standard for evaluating bone pathologies,
            lesions, defects, and other skeletal{" "}
            <span className="ml-9">
              abnormalities due to its ability to produce detailed images of the
              inside of the body.
            </span>{" "}
          </span>
        </p>
        <p className="ml-10 pt-6 pb-6">
          <span className="text-2xl font-bold text-[#A46C00]  mr-4">3</span>{" "}
          <span className="text-xl font-bold text-black">
            Digital Imaging and Communications in Medicine (DICOM){" "}
          </span>
          <br />{" "}
          <span className="ml-9">
            is the international standard for storing, transmitting, and
            managing medical imaging information and{" "}
            <span className="ml-9">data.</span>
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
