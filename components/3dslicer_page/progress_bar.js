// ProgressBar.js
import React from "react";

const ProgressBar = ({ currentIndex , totalSteps }) => {
  const progress = ((currentIndex + 1) / totalSteps) * 100;

  return (
    <div className="w-full h-3 bg-gray-200 rounded-md">
      <div
        className="h-full bg-blue-500 rounded-md"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
