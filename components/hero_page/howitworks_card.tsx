import React from "react";

interface Props {
  title: string;
  description: string;
}

const HowItWorks = ({ title, description }: Props) => {
  return (
    <div className="w-64 h-60 bg-white rounded-lg shadow-lg p-6 text-center flex flex-col justify-center">
      <h3 className="text-xl font-bold text-[#165388] mb-4">
        {title}
      </h3>
      <p className="text-[#165388] text-sm">
        {description}
      </p>
    </div>
  );
};

export default HowItWorks;