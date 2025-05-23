import React from "react";
import Image from "next/image";
import Image5 from "@/public/Image5.svg";
import { ObjectiveProps } from "@/data/mandibular/course_data";

const ObjectiveSection = ({ objective }: ObjectiveProps) => {
  const { objectives } = objective;
  return (
    <div className="flex flex-col">
      <p className="font-bold p-10 sm:pl-60">With this course, you will:</p>
      {objectives.map((data) => (
        <div
          className="flex flex-row items-center p-4 sm:pl-60 pb-4"
          key={data}
        >
          <Image alt="check" src={Image5} width={50} height={20} />
          <p>{data}</p>
        </div>
      ))}
    </div>
  );
};

export default ObjectiveSection;
