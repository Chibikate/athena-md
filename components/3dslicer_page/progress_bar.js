import React from "react";
import PropTypes from "prop-types";

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

// Add prop-types validation
ProgressBar.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
};

export default ProgressBar;