"use client";
// CertificatePage.js
import React, { useRef, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";
import NavigatingCertificate from "@/components/certificate/navigating/navigating_certificate";

function CertificatePage() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const certRef = useRef();

  // Fix hydration issues by setting state in useEffect
  useEffect(() => {
    setName(searchParams.get("name") || "");
    setDate(searchParams.get("date") || "");
    setIsMounted(true);
  }, [searchParams]);

  const downloadCertificate = () => {
    if (!certRef.current) return;
    
    const certificateElement = certRef.current;
    
    html2canvas(certificateElement, {
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: true,
      x: 0,
      y: 0,
      width: certificateElement.offsetWidth,
      height: certificateElement.offsetHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`certificate-${name.replace(/\s+/g, '-').toLowerCase() || 'athena-md'}.pdf`);
    });
  };

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 text-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <NavigatingCertificate fullName={name} date={date} ref={certRef} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={downloadCertificate}
            className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Download your certificate as PDF"
          >
            Download Certificate
          </button>
          
          <Link
            href="https://drive.google.com/drive/u/0/folders/1qal07kayXmvM2ZTiYEacMoYaDebrfF9M?hl=en"
            className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Submit your certificate to the submission folder"
          >
            Submission Bin
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/course/MeshMixer%20-%20Virtual-Surgery"
            className="bg-[#043873] text-white font-bold px-6 py-3 cursor-pointer rounded-md hover:bg-[#1c1648] transition-colors inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Continue to the next lesson on MeshMixer Virtual Surgery"
          >
            Proceed to the Next Lesson
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
}

export default CertificatePage;