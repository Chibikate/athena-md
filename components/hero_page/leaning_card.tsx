import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  alt: string;
  bg: boolean;
  large: boolean;
  swap: boolean;
}
// * * sa arrow function kay nag butang kag parameter (title, des, image, alt and bg). So ikaw mag buot kung unsa imo e butang sa parameter. Then, Nagbutang kag props, which is kanang naa sa taas si Interface. Kung unsa imo ibutang sa interface, mao pud dapat naa sa Props.//
const LearningCard = ({
  title,
  description,
  image,
  alt,
  bg,
  large,
  swap,
}: Props) => {
  return (
    <div
      className={`flex flex-col sm:flex-row text-white items-center justify-center py-4 
       ${bg ? "bg-[#1c1648]" : null}`}
    >
      {swap && <Image className="" src={image} alt={alt} height={400} />}

      {swap && <div className="w-44" />}
      <div className={`${large ? "w-[350px]" : "w-[235px] "}`}>
        <p className="font-bold text-2xl pb-2 text-[#ffc248]">{title}</p>
        <p className="">{description}</p>
      </div>
      {!swap && <div className="w-44" />}
      {!swap && <Image src={image} alt={alt} height={400} />}
    </div>
  );
};

export default LearningCard;
