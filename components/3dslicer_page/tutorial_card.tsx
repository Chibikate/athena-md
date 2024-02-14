import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: React.JSX.Element;
  image: StaticImageData;
  alt: string;
}

const TutorialCard = ({ title, description, image, alt }: Props) => {
  return (
    <div className="flex flex-col justify-center flow-x-hidden py-20 ml-40 mr-40">
      <div className="flex flex-col items-center justify-center dark:bg-white">
        <p className="p-4 text-center font-bold text-4xl rounded-lg text-black">
          {title}
        </p>
        <p className="text-center flex-col pt-14 p-7 text-lg">{description}</p>
        <Image src={image} alt={alt} />
      </div>
    </div>
  );
};

export default TutorialCard;
