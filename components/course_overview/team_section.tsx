import React from "react";
import Image from "next/image";
import Image13 from "@/public/Image13.png";


const TeamSection = () => {
  return (
    <div className="flex flex-col bg-[#EDF5FE] text-[#043873]">
      <div className="area">
        <div className="area">
          <ul className="circles">
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
          src={Image13}
          width={150}
          height={80}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between p-4 text-center">
        <p className="pl-3">
          Lemuel Clark Velasco <br />
          <span className="font-bold text-sm text-[#043873]">
            Project Leader
          </span>
        </p>
        <br></br>
        <div>
          <p>
            Rentor Cafino <br /> MD, DPBO-HNS
            <br />
            <span className="font-bold text-sm text-[#043873]">
              Content Developer
            </span>
          </p>
        </div>
        <br></br>
        <div>
          <p>
            Armando T. Isla <br /> MD, FPSO-HNS
            <br />
            <span className="font-bold text-sm text-[#043873]">
              Medical Adviser
            </span>
          </p>
        </div>
        <br></br>
        <div className="flex flex-col">
          <p>Karen Mae Ty, MD, FPSO-HNS</p>
          <p>Jay Pee Amable, MD, FPSO-HNS</p>
          <p>Isaac Cesar De Guzman, MD, FPSO-HNS</p>
          <p>Jehan Grace Maglaya, MD, FPSO-HNS</p>
          <p>Anna Carmina Zantua, MD, FPSO-HNS</p>
          <p className="font-bold pb-4 text-sm text-[#043873]">
            Content Validators
          </p>
        </div>
        
        <p>
          Kaye Q. Velarde <br />
          <span className="font-bold pb-4 text-sm text-[#043873]">
            Pedagogy Manager
          </span>
        </p>
        
        <p>
          Queenie Kate S. Cabanilla <br />
          <span className="font-bold pb-4 text-sm text-[#043873]">
            Web Developer
          </span>
        </p>
      </div>
    </div>
  );
};

export default TeamSection;