import React from "react";


const ProgressBar = ({ currentIndex, totalSteps }) => {
  const progress = ((currentIndex + 1) / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-text">
        Step {currentIndex + 1} of {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;