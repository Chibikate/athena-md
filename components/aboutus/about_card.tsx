import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  role: string;
  image: string | StaticImageData;
  alt: string;
}

const AboutCard = ({name, role, image, alt} :Props) => {
  return (
    <div className="flex flex-col  items-center rounded-lg shadow-sm p-6 w-64 ">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-[#165388]">
        <Image
          src={image}
          alt={alt}
          width={300}
          height={144}
          className=" h-36 object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-[#165388]">{name}</h3>
      <p className="text-sm text-[#043873]">{role}</p>
    </div>
  );
};

export default AboutCard;
