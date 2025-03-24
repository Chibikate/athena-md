import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import TimeLogo from "@/public/time_icon.svg";
import { Pelvis } from "@/public/main_course";

interface NewProps {
  image: StaticImageData;
  title: string;
  description: string;
  level: string;
  time: string;
  to: string;
  alt: string;
}

const PelvisCard = ({
  image,
  title,
  description,
  level,
  time,
  to,
  alt,
}: NewProps) => {
  return (
    <div className="w-96 border-2 rounded-lg shadow-3xl space-y-2 text-sm p-4">
      {/* Fixed Image Height & Consistent Sizing */}
      <div className="h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          alt={alt}
          src={image.src}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      <p className="font-bold text-xl">{title}</p>
      <p>{description}</p>
      <p className="font-bold">Level: {level}</p>
      <div className="flex items-center">
        <Image src={TimeLogo} alt="" width={25} height={25} />
        <p className="pt-1 pl-2">{time} activity</p>
      </div>

      <div className="flex-start">
        <div
          className="cursor-pointer hover:border-white-400 hover:border-2 text-black hover-border rounded-md p-2 bg-[#a2bfde]"
        >
          <Link href={to}>
            <p className="font-semibold text-center">Start now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PelvisCard;
