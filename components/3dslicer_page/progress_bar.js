import React from "react";

const ProgressBar = ({ currentIndex, totalSteps }) => {
  const progress = ((currentIndex + 1) / totalSteps) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto py-2">
      <div className="relative w-full h-4 bg-gray-300 rounded-full shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-in-out shadow-md"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center text-sm mt-2 text-gray-700 font-semibold">
        Step {currentIndex + 1} of {totalSteps}
      </p>
    </div>
  );
};

export default ProgressBar;
