import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import TimeLogo from "@/public/time_icon.svg";
import Lesson from "@/public/lesson.png";
import Video from "@/public/video.png";

interface Props {
  title: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
  to: string;
  time: string;
  video: string;
  lesson: string;
}

const MainCard = ({ title, description, image, alt, to, time, video, lesson }: Props) => {
  return (
    <div className="w-72 bg-white rounded-md shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">

      <Image
        src={image}
        alt={alt}
        width={300}
        height={144}
        className=" h-36 object-cover"
      />

      <h3 className="text-lg font-bold text-[#151A40] mb-1 p-2">
        {title}
      </h3>
      <p className="text-[#5A5A5A] text-sm mb-4 p-2">
        {description}
      </p>

      <div className="flex items-center justify-around border-t pt-3 p-2">
        <div className="flex items-center text-sm">
          <Image src={TimeLogo} alt="Time Icon" width={20} height={20} />
          <span className="pl-1">{time}</span>
        </div>

        <div className="flex items-center text-sm">
          <Image src={Video} alt="Video Icon" width={20} height={20} />
          <span className="pl-1">{video}</span>
        </div>

        <div className="flex items-center text-sm">
          <Image src={Lesson} alt="Lesson Icon" width={20} height={20} />
          <span className="pl-1">{lesson}</span>
        </div>

      </div>
      <div className="px-16 pb-2 pt-3">
        <Link href={to}>
          <div className=" bg-[#165388] text-white text-center font-semibold p-2 rounded-lg cursor-pointer text-sm">
            View this course
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainCard;