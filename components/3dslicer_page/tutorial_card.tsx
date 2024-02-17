import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
}

const TutorialCard = ({ title, description, image, alt }: Props) => {
  return (
    <div className="flex flex-col justify-center flow-x-hidden ml-40 mr-40 text-black">
      <div className="flex flex-col items-center justify-center dark:bg-white">
        <p className="p-4 text-center font-bold text-4xl rounded-lg ">
          {title}
        </p>
        <p className="text-center flex-col pt-14 p-7 text-lg text-black">{description}</p>
        <Image src={image} alt={alt}/>
      </div>
    </div>
  );
};

export default TutorialCard;
