// CertificatePage.js
import React from "react";
import Image from "next/image";
import Image1 from "@/public/Image1.svg";
import { EB_Garamond, MonteCarlo } from "next/font/google";
import PropTypes from "prop-types"; // Import PropTypes


const interGaramond = EB_Garamond({ subsets: ["latin"] });
const interMonteCarlo = MonteCarlo({ subsets: ["latin"], weight: "400" });

const PelvisAddDicomCertificate = React.forwardRef(({ fullName, date }, ref) => {
 return (
    <div
      className="container mx-auto flex flex-row items-center justify-center"
      ref={ref}
    >
      <div
        className={`w-[845px] mx-auto bg-[#ffffff] p-1 sm:p-5 border-x-2 m-8 border-y-2 rounded-md shadow-md 
          ${interGaramond.className} border-[#10172c] flex flex-col relative`}
      >
        <div className="rounded-full">
          <Image
            alt="Something never change"
            src={Image1}
            width={900}
            height={500}
            className="w-full h-auto rounded-t-md"
          />
        </div>

        {/* Certificate Heading */}
        <div className="text-left pl-5 sm:pl-20 pt-10 absolute mt-0 p-20 pb-0 sm:mt-10 sm:text-center sm:pb-20">
          <h2 className="text-sm font-semibold mb-0 sm:mb-4 text-primary sm:text-2xl md:text-3xl text-center">
            CERTIFICATE{" "}
            <span
              className={`text-rose-600 italic text-center ${interMonteCarlo.className}`}
            >
              Of
            </span>{" "}
            <br /> COMPLETION
          </h2>

          {/* Recipient Info */}
          <p className="text-sm sm:text-base md:text-lg text-center">This certificate is presented to</p>
          <p
            className={`text-md sm:text-3xl italic text-red-600 my-0 sm:my-4 text-center ${interMonteCarlo.className}`}
          >
            {fullName}
          </p>

          {/* Completion Details */}
          <p className="text-sm sm:text-base md:text-lg text-center">for successful completion of</p>
          <p className="font-bold text-lg sm:text-md md:text-lg my-0 sm:my-2 text-center "> 3D Adding DICOM</p>
          < p className = "text-sm sm:text-base md:text-lg my-0 sm:my-1 text-center" >
            in Mobile-Responsve Tutorial System on <br />
            Virtual Surgical Planning Technologies <br />
            for Pelvis Reconstruction
          </p>

          <p className="absolute bottom-4 right-0 text-sm sm:text-base text-gray-700">{date}</p>
        </div>
      </div>
    </div>
  );
});


// Add PropTypes validation
PelvisAddDicomCertificate.propTypes = {
  fullName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

PelvisAddDicomCertificate.displayName = 'PelvisAddDicomCertificate'; // Set the display name

export default PelvisAddDicomCertificate;
