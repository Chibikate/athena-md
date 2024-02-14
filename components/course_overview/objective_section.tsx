import React from "react";
import Image from "next/image";
import Image5 from "@/public/Image5.svg";
import Image6 from "@/public/Image6.svg";

const ObjectiveSection = () => {
  return (
    <div className="flex flex-col p-10 pl-60   ">
      <p className="p-5 font-bold">With this course, you will:</p>
      <div className="flex flex-row items-center p-4">
        <Image alt="check" src={Image5} width={50} height={20} />
        <p>Learn 3D Slicer and MeshMixer step by step from start to finish</p>
      </div>
      <div className="flex flex-row items-center  p-4">
        <Image alt="check" src={Image5} width={50} height={20} />
        <p>
          To develop the necessary knowledge and skills to create 3D models{" "}
          <br /> from CT scans.
        </p>
 
      </div>
      <div className="flex flex-row items-center  p-4">
        <Image alt="check" src={Image5} width={50} height={20} />
        <p>Created an Anatomic Facsimile Model</p>
      </div>
      <div className="flex flex-col items-end justify-end mr-44">
        {" "}
        <Image
          className="absolute"
          alt="check"
          src={Image6}
          width={300}
        />
          
      </div>
      <div className="text-end font-bold text-[#772EFF] mr-44">
      <p>Here's some sneak peek</p>
      </div>
    </div>
  );
};

export default ObjectiveSection;
