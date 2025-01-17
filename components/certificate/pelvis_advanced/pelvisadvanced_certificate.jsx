// CertificatePage.js
import React from "react";
import Image from "next/image";
import Image1 from "@/public/Image1.svg";
import { EB_Garamond, MonteCarlo } from "next/font/google";


const interGaramond = EB_Garamond({ subsets: ["latin"] });
const interMonteCarlo = MonteCarlo({ subsets: ["latin"], weight: "400" });

const PelvisAdvancedCertificate = React.forwardRef(({ fullName, date }, ref) => {
  return (

    <div className="container mx-auto flex flex-row items-center justify-center" ref={ref}>
      <div className={`w-[845px] mx-auto  bg-[#ffffff] p-5 border-x-2 m-8 border-y-2 rounded-md shadow-md ${interGaramond.className} border-[#10172c] flex flex-col`}>
        <div className="rounded-full">
          <Image
            alt="Something never change"
            src={Image1}
            width={900}
            height={283}
          />
        </div>

        <h2 className="absolute text-3xl font-semibold mb-4 pt-14 font-3xl ml-40 text-primary text-left">
          CERTIFICATE <span className={`text-rose-600 italic ${interMonteCarlo.className}`}>Of</span> <br /> COMPLETION
        </h2>
        <p className="absolute pt-36 ml-44">This certificate is presented to</p>
        <p className={`absolute ml-36 pt-48 text-3xl italic text-red-600 ${interMonteCarlo.className}`}>{fullName}</p>

        <p className="absolute pt-64 ml-44">for successful completion of</p>
        <p className="absolute pt-80 mb-24 ml-28 items-center"><span className="font-bold text-xl"J>3D ADVANCED SEGMENTATION</span><br/> in Mobile-Responsive Web-based Tutorial System <br />
          on Virtual Surgical Planning Technologies <br />
          for Pelvis Reconstruction</p>
        <p className="absolute mt-[450px] ml-[613px]">
          {date}
        </p>
      </div>
    </div>
   
  );
});

PelvisAdvancedCertificate.displayName = 'PelvisAdvancedCertificate'; // Set the display name

export default PelvisAdvancedCertificate;
