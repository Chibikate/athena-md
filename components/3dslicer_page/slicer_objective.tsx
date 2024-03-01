import React from "react";

interface Props {
  title: string;
  description: React.JSX.Element;
}

const SlicerObjective = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold text-3xl text-[#1c1648] pb-2">{title}</p>
      <p className="pt-4 text-xl">{description}</p>
    </div>
  );
};

export default SlicerObjective;
