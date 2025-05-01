"use client";
import React, { useRef, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NavigatingCertificate from "@/components/certificate/navigating/navigating_certificate";
import { createCertificateDownloader } from "@/utils/certificateUtils";
import CertificateLayout from "@/components/certificate/CertificateLayout";

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

  // Use the shared certificate downloader
  const downloadCertificate = createCertificateDownloader(certRef, name);

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <CertificateLayout
      certificateComponent={<NavigatingCertificate fullName={name} date={date} ref={certRef} />}
      downloadCertificate={downloadCertificate}
      nextLessonLink="/course/MeshMixer%20-%20Virtual-Surgery"
      nextLessonText="Proceed to the Next Lesson"
      showSubmissionBin={true}
    />
  );
}

export default CertificatePage;