"use client";
import React from "react";
import Link from "next/link";
import PropTypes from 'prop-types';

/**
 * Reusable certificate page layout component to eliminate code duplication
 */
const CertificateLayout = ({
  certificateComponent,
  downloadCertificate,
  nextLessonLink,
  nextLessonText = "Proceed to the Next Lesson",
  showSubmissionBin = false,
  submissionLink = "https://drive.google.com/drive/u/0/folders/1qal07kayXmvM2ZTiYEacMoYaDebrfF9M?hl=en"
}) => {
  return (
    <div className="container mx-auto mt-10 text-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center p-4">
        <div className="w-full max-w-4xl">
          {certificateComponent}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={downloadCertificate}
            className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Download your certificate as PDF"
          >
            Download Certificate
          </button>
          
          {showSubmissionBin && (
            <Link
              href={submissionLink}
              className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Submit your certificate to the submission folder"
            >
              Submission Bin
            </Link>
          )}
        </div>

        <div className="mt-8">
          <Link
            href={nextLessonLink}
            className="bg-[#043873] text-white font-bold px-6 py-3 cursor-pointer rounded-md hover:bg-[#1c1648] transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label={`Continue to ${nextLessonText}`}
          >
            {nextLessonText}
          </Link>
        </div>

        <div className="mt-6">
          <Link 
            href="/"
            className="text-[#043873] hover:text-indigo-700 underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-block"
            aria-label="Return to the home page"
          >
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
CertificateLayout.propTypes = {
  certificateComponent: PropTypes.node.isRequired,
  downloadCertificate: PropTypes.func.isRequired,
  nextLessonLink: PropTypes.string.isRequired,
  nextLessonText: PropTypes.string,
  showSubmissionBin: PropTypes.bool,
  submissionLink: PropTypes.string
};

export default CertificateLayout;