"use client";
// CertificatePage.js
import React, { useRef, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";
import AddDicommCertificate from "../../../components/certificate/adddicom/add_dicomm_certificate";

function CertificatePage() {
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const certRef = useRef();

  useEffect(() => {
    // Ensure this runs only on the client
    setIsMounted(true);
    setName(searchParams.get("name") || ""); // Default to empty string if null
    setDate(searchParams.get("date") || ""); // Default to empty string if null
  }, [searchParams]);

  const downloadCertificate = () => {
    const certificateElement = certRef.current;

    html2canvas(certificateElement, {
      x: 0,
      y: 0,
      width: certificateElement.offsetWidth,
      height: certificateElement.offsetHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4"); // set PDF to A4 size in landscape orientation
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");
    });
  };

  if (!isMounted) {
    // Prevent rendering on the server
    return null;
  }

  return (
    <div className="container mx-auto mt-10 text-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="p-4">
        <AddDicommCertificate fullName={name} date={date} ref={certRef} />

        <button
          onClick={downloadCertificate}
          className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 mt-4 inline-block w-full sm:w-auto"
        >
          Download Certificate
        </button>
      </div>

      <div className="mt-6">
        <Link href="/course/3D%20slicer%20-%20Navigating%20DICOM%20display">
          <button className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 mt-4 inline-block w-full sm:w-auto">
            Proceed to the Next Lesson
          </button>
        </Link>
      </div>

      <div className="mt-6">
        <Link href="/">
          <button className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 mt-4 inline-block w-full sm:w-auto">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CertificatePage;