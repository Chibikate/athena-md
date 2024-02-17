import React from "react";
import ModuleCard from "./module_card";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: React.JSX.Element;
  module: Module[];
}

interface Module {
  to: string;
  image: StaticImageData;
  alt: string;
  query: string;
}

const ModuleObjective = ({ title, module, description }: Props) => {
  return (
    <div className="bg-[#FDF9F4] p-10">
      <p className="font-bold pl-28 text-4xl text-[#A46C00] underline ">{title}</p>
      <p className="pl-28 pt-4 p-4">{description}</p>
      <div className="flex flex-row items-center justify-center pt-4">
        {module.map((item, index) => (
          <div className="px-4 ">
            <ModuleCard
              key={index}
              alt={item.alt}
              image={item.image}
              to={item.to}
              query={item.query}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleObjective;
