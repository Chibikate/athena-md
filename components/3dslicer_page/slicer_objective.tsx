import React from "react";

interface Props {
  title: string;
  description: React.JSX.Element;
}

const SlicerObjective = ({ title, description }: Props) => {
  return (
    <div>
      <p className="font-bold text-3xl text-[#A46C00]">{title}</p>
      <p className="pt-8 text-xl">{description}</p>
    </div>
  );
};

export default SlicerObjective;
