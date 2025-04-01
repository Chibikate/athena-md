import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ currentIndex, totalSteps, label }) => {
  const progress = ((currentIndex + 1) / totalSteps) * 100;
  
  return (
    <div className="w-full text-center my-4 md:my-6 px-2 md:px-0">
      {label && (
        <div className="text-sm md:text-md font-medium text-blue-800 mb-1 transition-all">
          {label}
        </div>
      )}
      
      <div className="w-full bg-gray-100 rounded-full h-4 md:h-5 mb-2 shadow-inner overflow-hidden border border-gray-200 transition-all">
        {/* Removed the DNA-like pattern in background */}
        <div className="relative w-full h-full">
          {/* Enhanced progress bar with 4-color gradient */}
          <div
            className="h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end px-2"
            style={{ 
              width: `${progress}%`,
              background: "linear-gradient(to right,rgb(169, 195, 237),rgb(55, 147, 234),rgb(136, 92, 246),rgb(212, 37, 235))"
            }}
          >
            {progress > 10 && (
              <div className="text-xs font-bold text-white truncate">
                {Math.round(progress)}%
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-xs md:text-sm transition-all">
        <div className="text-gray-500 flex items-center">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 inline-block mr-1 animate-pulse"></span>
          <span className="hidden xs:inline">Start</span>
        </div>
        <div className="font-semibold text-blue-900">
          Step {currentIndex + 1} of {totalSteps}
        </div>
        <div className="text-gray-500 flex items-center">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 inline-block mr-1"></span>
          <span className="hidden xs:inline">Complete</span>
        </div>
      </div>
    </div>
  );
};

// Add prop types for validation
ProgressBar.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  label: PropTypes.string
};

export default ProgressBar;