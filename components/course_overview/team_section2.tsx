import React from "react";
import Image from "next/image";
import Image13 from "@/public/Image13.png";


const TeamSection2 = () => {
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
          Darelle Jay P. Langga,  MD
            <br />
            <span className="font-bold text-sm text-[#043873]">
              Content Developer
            </span>
          </p>
        </div>
        <br></br>
        <div className="flex flex-col">
              <p>Jesronne C. Abrea, MD, FPOA</p>
              <p>Mark Louie M. Tangalin, MD</p>
              <p>Abegail Jane L. Jutba, MD</p>
              <p>Angelo Miguel D. Achacoso, MD</p>
              <p className="font-bold pb-4 text-sm text-[#043873]">
                Content Validators
              </p>
            </div>
        <br></br>
        <p>
          Dianne Mel Arrubio <br />
          <span className="font-bold pb-4 text-sm text-[#043873]">
            Pedagogy Manager
          </span>
        </p>
        
        <p>
          Zyrene Belle Alturas<br />
          <span className="font-bold pb-4 text-sm text-[#043873]">
            Web Developer
          </span>
        </p>
      </div>
    </div>
  );
};

export default TeamSection2;