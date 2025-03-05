import React from "react";

interface Props {
  title: string;
  description: string;
}

const HowItWorks = ({ title, description }: Props) => {
  return (
    <div className="w-52 h-56 bg-white rounded-lg shadow-lg p-6 text-center">
      <h3 className="text-xl font-bold text-[#165388] mb-4 ">
        {title}
      </h3>
      <p className="text-[#165388] text-xs">
        {description}
      </p>
    </div>
  );
};

export default HowItWorks;