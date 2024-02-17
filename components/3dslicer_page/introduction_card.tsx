import React from "react";

interface Props {
  title: string;
  description: React.JSX.Element;
}

const IntroductionPage = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col justify-center flow-x-hidden ml-40 mr-40">
      <div className="flex flex-col items-center justify-center dark:bg-white">
        <p className="p-4 text-center font-bold text-4xl rounded-lg text-black">
          {title}
        </p>
        <p className="text-center flex-col pt-14 p-7 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default IntroductionPage;
