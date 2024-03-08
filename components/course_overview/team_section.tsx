import React from "react";
import Image from "next/image";
import Image6 from "@/public/Image6.png";

const TeamSection: React.FC = () => {
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
            Dr. Rentor Cafino <br /> MD, DPSO-HNS
            <br />
            <span className="font-semibold text-sm text-[#ffc248]"> Medical Adviser</span>
          </p>
        </div>
        <div>
          <p>
            Dr. Armando T. Isla <br /> MD, FPSO-HNS
            <br />
            <span className="font-semibold text-sm text-[#ffc248]">Medical Adviser</span>
          </p>
        </div>
        <div className="flex flex-col">
          <p>Karen Mae Ty - MD, FPSO-HNS</p>
          <p>Jay Pee Amable - MD, FPSO-HNS</p>
          <p>Isaac Cesar De Guzman - MD, FPSO-HNS</p>
          <p>Jehan Grace Maglaya - MD, FPSO-HNS</p>
          <p>Anna Carmina Zantua - MD, FPSO-HNS</p>
          <p className="font-bold pb-4 text-sm text-[#ffc248]">Content Validators</p>
        </div>
        <p>
          Kaye Q. Velarde <br />{" "}
          <span className="font-bold pb-4 text-sm text-[#ffc248]">Pedagogy Manager</span>
        </p>

        <p>
          Queenie Kate S. Cabanilla <br />{" "}
          <span className="font-bold pb-4 text-sm text-[#ffc248]">Web Developer</span>
        </p>
      </div>
    </div>
  );
};

export default TeamSection;
