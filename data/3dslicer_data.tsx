import * as Module1 from "@/public/module1";
import * as Module2 from "@/public/module2";
import * as Module3 from "@/public/module3";
import * as Module5 from "@/public/module5";
import * as Module4 from "@/public/module4";

import Link from "next/link";

export const slicerObjetive = [
  {
    index: 0,
    title: "Creating a 3D file from DICOM images",
    description: (
      <div>
        <div className="w-full h-2 mt-4 bg-gray-400">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">
                Download 3D slicer (Stable version 5.6.1):{" "}
              </span>
              <Link
                href=" https://download.slicer.org/"
                className="text-gray-400 text-underline"
                target="_blank"
              >
                https://download.slicer.org/
              </Link>
              <p className="ml-6">Available in Windows, macOS and Linux </p>
            </li>
            <li>
              <span className="font-semibold">Download files: </span>
              <Link
                href="https://drive.google.com/drive/folders/1742qADzEkJDJ-FBMINb89dR9A7L0fbc6"
                className="text-gray-400 text-underline"
                target="_blank"
              >
                https://drive.google.com/drive/folders/1742qADzEkJDJ-FBMINb89dR9A7L0fbc6
              </Link>
              <p className="ml-6">(in zipped folder contains dicom files)</p>
            </li>
          </ul>
          <p className="text-xl dark:text-white font-semibold text-primary">
            After you have downloaded the following software and files.{" "}
            <span className="font-bold text-[#A46C00]">
              Open the downloaded 3D slicer{" "}
            </span>{" "}
            to proceed.
          </p>
        </div>
      </div>
    ),
  },
];
export const slicerIntroduction = [
  {
    index: 0,
    title: "Introduction",
    description: (
      <div>
        {" "}
        <p>
          <span className="font-bold text-lg">
            Virtual surgical planning (VSP)
          </span>{" "}
          is a planning technique that allows pre-surgical planning in a virtual
          environment. This technology provides the surgeon with tools to
          optimize the surgical plan in a risk-free environment. This plan can
          be transferred into an actual physical template using 3D printing.
          This module provides a step-by step process in the basic procedure of
          utilizing a CT scan for virtual surgical planning of a mandibular
          defect. This tutorial on VSP for mandibular reconstruction will serve
          as a guide for individuals in the medical field, including both
          students and professionals. Users will learn how to utilize VSP
          software, such as 3D Slicer and MeshMixer, to create a digital model
          of human anatomy, with a specific focus on mandibular reconstruction.
          This tutorial also extends its applicability to individuals interested
          in the innovative approach to medical.
        </p>
      </div>
    ),
  },
  {
    index: 1,
    title: "Introduction",
    description: (
      <div>
        <p>
          In medical imaging,
          <span className="font-bold "> Computed Tomography (CT)</span> is
          considered the gold standard for evaluating bone pathologies, lesions,
          defects, and other skeletal abnormalities due to its ability to
          produce detailed images of the inside of the body. CT scans are
          particularly effective in providing precise assessments of
          bone-related conditions. On the other hand,{" "}
          <span className="font-bold"> Magnetic Resonance Imaging (MRI) </span>{" "}
          scans, while not ideal for visualizing bones, are valuable for
          generating detailed images of soft tissues and can contribute to
          creating a <span className="font-bold">three-dimensional (3D) </span>{" "}
          model of the human anatomy.
        </p>
      </div>
    ),
  },
  {
    index: 2,
    title: "Introduction",
    description: (
      <div>
        <p>
          <span className="font-bold ">
            Digital Imaging and Communications in Medicine (DICOM)
          </span>{" "}
          is the international standard for storing, transmitting, and managing
          medical imaging information and data. 3D printing in medicine uses
          DICOM files to create custom anatomical parts, such as surgical
          planning guides.
        </p>
      </div>
    ),
  },
];
