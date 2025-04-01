import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

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

// Add prop types for validation
ProgressBar.propTypes = {
  currentIndex: PropTypes.number.isRequired, // currentIndex should be a number
  totalSteps: PropTypes.number.isRequired,   // totalSteps should be a number
};

export default ProgressBar;
