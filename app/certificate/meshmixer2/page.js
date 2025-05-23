"use client";
import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";
import Meshmixer2Certificate from "../../../components/certificate/meshmixer2/meshmixer2_certificate";
import Navigator from "@/components/hero_page/navigator";
import Footer from "@/components/hero_page/footer";

function CertificatePage() {
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const certRef = useRef();

  useEffect(() => {
    setIsMounted(true);
    setName(searchParams.get("name") || "");
    setDate(searchParams.get("date") || "");
  }, [searchParams]);

  const downloadCertificate = async () => {
    setIsDownloading(true);
    const certificateElement = certRef.current;

    try {
      const canvas = await html2canvas(certificateElement, {
        scale: 2, // Higher resolution
        useCORS: true,
        allowTaint: true,
        x: 0,
        y: 0,
        width: certificateElement.offsetWidth,
        height: certificateElement.offsetHeight,
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF("l", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${name.replace(/\s+/g, "_")}_Meshmixer2_Certificate.pdf`);
    } catch (error) {
      console.error("Error generating certificate:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FEFCFA] flex flex-col">
      <Navigator />

      <main className="flex-grow flex flex-col items-center px-4 py-8 md:py-12">
        <div className="w-full max-w-5xl">
          {/* Certificate Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[#043873]">
              Your Certificate of Completion
            </h1>
            <p className="mt-2 text-gray-600">
              Congratulations on completing the Meshmixer Advanced module!
            </p>
          </div>

          {/* Certificate Container */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8 border border-[#FDCC6D]/20">
            {/* Certificate Preview */}
            <div className="mb-6 overflow-hidden rounded-lg">
              <Meshmixer2Certificate
                fullName={name}
                date={date}
                ref={certRef}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-8">
            <button
              onClick={downloadCertificate}
              disabled={isDownloading}
              className="flex items-center justify-center bg-[#043873] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#032d5c] transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed w-full md:w-auto"
            >
              {isDownloading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating PDF...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Certificate
                </>
              )}
            </button>

            <Link
              href="https://drive.google.com/drive/u/0/folders/1TDPx-77IlDwHfEuy2nsCkjsqNKBPdqzO"
              className="flex items-center justify-center bg-[#FDCC6D] text-[#043873] px-6 py-3 rounded-lg text-base font-medium hover:bg-[#FDCC6D]/80 transition-colors shadow-md w-full md:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8"
                />
              </svg>
              Submission Bin
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center border-2 border-[#043873] text-[#043873] px-6 py-[10px] rounded-lg text-base font-medium hover:bg-[#043873]/5 transition-colors w-full md:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7"
                />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5">
              <div className="flex items-start">
                <div className="rounded-full bg-blue-50 p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#043873]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#043873] mb-2">
                    Share Your Achievement
                  </h3>
                  <p className="text-gray-600">
                    Add this certificate to your LinkedIn profile or resume to
                    showcase your advanced skills in Meshmixer for medical 3D
                    modeling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5">
              <div className="flex items-start">
                <div className="rounded-full bg-blue-50 p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#043873]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#043873] mb-2">
                    Continue Learning
                  </h3>
                  <p className="text-gray-600">
                    Explore more courses to deepen your knowledge in medical 3D
                    modeling and printing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CertificatePage;
