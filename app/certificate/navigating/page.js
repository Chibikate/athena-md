"use client";
// CertificatePage.js
import React, { useRef } from "react";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";
import { Suspense } from "react";
import NavigatingCertificate from "../../../components/certificate/navigating/navigating_certificate";

function CertificatePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const date = searchParams.get("date");

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

  const certRef = useRef();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto mt-10 text-center min-h-screen">
        <div className="p-4">
          <NavigatingCertificate fullName={name} date={date} ref={certRef} />

          <button
            onClick={downloadCertificate}
            className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 mt-4 inline-block"
          >
            Download Certificate
          </button>
        </div>
        <div>
          <Link href="/course/3D%20slicer%20-%20Basic-Segmentation">
            <button className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 mt-4 inline-block">
              Click here to proceed to the next Lesson
            </button>
          </Link>
        </div>
        <Link href="/">
          <div className="pt-4 ">
            <p className="underline p-2 cursor-pointer text-primary">
              Click here to go back in the home page
            </p>
          </div>
        </Link>
      </div>
    </Suspense>
  );
}

export default CertificatePage;
