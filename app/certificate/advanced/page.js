"use client";
// CertificatePage.js
import React, { useRef } from "react";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";
import AdvanceCertificate from "../../../components/certificate/advanced/advanced_certificate";

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
    <div className="container mx-auto mt-10 text-center min-h-screen">
      <div className="p-4 space-x-1">
        <AdvanceCertificate fullName={name} date={date} ref={certRef} />

        <button
          onClick={downloadCertificate}
          className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 mt-4 inline-block"
        >
          Download Certificate
        </button>
        <Link
          href="https://drive.google.com/drive/u/0/folders/1qal07kayXmvM2ZTiYEacMoYaDebrfF9M?hl=en"
          className="bg-[#043873] text-white px-4 py-2 cursor-pointer rounded-md hover:bg-indigo-600 mt-4 inline-block "
        >
          Submission Bin
        </Link>
      </div>
      <div>
        <Link href="/course/MeshMixer%20-%20Virtual-Surgery">
          <button className="bg-[#043873] text-white font-bold px-4 py-2 cursor-pointer rounded-md hover:bg-[#1c1648] mt-4 inline-block">
            Proceed to the Next Lesson
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
  );
}

export default CertificatePage;
