import React from "react";
import Image from "next/image";
import Image6 from "@/public/Image6.png";

const TeamSection2: React.FC = () => {
  return (
    <div className={`flex flex-col  bg-[#1c1648] text-white`}>
      <div className="area">
        <div className="area ">
          <ul className="circles ">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <p className="font-bold text-4xl pt-10 text-center text-primary">
        THE TEAM
      </p>
      <div className="flex justify-center invert">
        <Image
          alt="somethings never change"
          src={Image6}
          width={200}
          height={100}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between p-4 text-center">
        <p className="pl-3">
          Lemuel Clark Velasco <br />{" "}
          <span className="font-bold text-sm text-[#ffc248] ">Project Leader</span>
        </p>

        <div>
          <p>
            Darelle Jay P. Langga <br /> MD
            <br />
            <span className="font-semibold text-sm text-[#ffc248]"> Content Developer</span>
          </p>
        </div>
        <div className="flex flex-col">
          <p>Jesronne C. Abrea, MD, FPOA</p>
          <p>Mark Louie M. Tangalin, MD</p>
          <p>Abegail Jane L. Jutba, MD</p>
          <p>Angelo Miguel D. Achacoso, MD</p>
          <p className="font-bold pb-4 text-sm text-[#ffc248]">Content Validators</p>
        </div>
        <p>
          Dianne Mel B. Arrubio <br />{" "}
          <span className="font-bold pb-4 text-sm text-[#ffc248]">Pedagogy Manager</span>
        </p>

        <p>
          Zyrene Belle B. Alturas <br />{" "}
          <span className="font-bold pb-4 text-sm text-[#ffc248]">Web Developer</span>
        </p>
      </div>
    </div>
  );
};

export default TeamSection2;