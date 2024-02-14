import Slicer1 from "@/public/module1/slicer1.png";
import Slicer2 from "@/public/module1/slicer2.png";
import Slicer3 from "@/public/module1/slicer3.png";
import Slicer4 from "@/public/module1/slicer4.png";
import Slicer5 from "@/public/module1/slicer5.png";
import Slicer6 from "@/public/module1/slicer6.png";
import Slicer7 from "@/public/module1/slicer7.png";
import Slicer8 from "@/public/module1/slicer8.png";
import Slicer9 from "@/public/module1/slicer9.png";

import Link from "next/link";

export const slicerObjetive = [
  {
    index: 0,
    title: "Creating a 3D file from DICOM images",
    description: (
      <div>
        <div className="w-full h-2 mt-4 bg-gray-400"></div>
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
          After you have downloaded the following software and files. You can
          now proceed to 3D Slicer.
        </p>
      </div>
    ),
  },
  {
    index: 0,
    title: "Objectives",
    description: (
      <div className="dark:text-white min-h-screen rounded-lg shadow-md p-4 md:p-14">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 py-4"></div>
          <div className="w-full sm:w-1/2">
            <h2 className="text-3xl font-bold">Objectives:</h2>
            <p>by the end of the lesson, students will be able to:</p>
            <div className="h-1 bg-gray-300 mt-3"></div>

            <li className="mt-4 space-y-2">
              Familiarise oneself with the user interface of a{" "}
              <span className="font-bold text-black dark:text-amber-400">
                3D editing app.
              </span>
              .
            </li>
            <li className="mt-4 space-y-2">
              Narrow down regions of interest by{" "}
              <span className="font-bold text-black dark:text-amber-400">
                cropping
              </span>
              .
            </li>
            <li className="mt-4 space-y-2">
              Separate bone using{" "}
              <span className="font-bold text-black dark:text-amber-400">
                threshold
              </span>{" "}
              based{" "}
              <span className="font-bold text-black dark:text-amber-400">
                segmentation
              </span>
              .
            </li>
            <li className="mt-4 space-y-2">
              Export file as{" "}
              <span className="font-bold text-black dark:text-amber-400">
                .STL.
              </span>
            </li>
          </div>
        </div>
        <div className="flex justify-center sm:flex sm:justify-end mt-4">
          <div className="w-32 h-12 hover-border hover:border-white-400 bg-primary hover-border hover:border-white-400 hover:border-2 hover:text-white flex items-center justify-center text-white font-bold rounded-lg shadow-md cursor-pointer">
            <Link href="/mandiweb/3d-slicer/3Dinterface">Continue!</Link>
          </div>
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
export const slicerTutorial = [
  {
    index: 0,
    title: "Module1",
    description: (
      <p>Objective: Familiarize oneself with the basic 3D slicer interface</p>
    ),
    image: Slicer1,
    alt: "illustration",
  },
  {
    index: 1,
    title: "3D Interface",
    description: 
      "one"
    ,
    image: Slicer2,
    alt: "illustration",
  },
  {
    index: 2,
    title: "3D Interface",
    description: "two",
    image: Slicer3,
    alt: "illustration",
  },
  {
    index: 3,
    title: "3D Interface",
    description: "three",
    image: Slicer4,
    alt: "illustration",
  },
  {
    index: 4,
    title: "3D Interface",
    description: "four",
    image: Slicer5,
    alt: "illustration",
  },
  {
    index: 5,
    title: "3D Interface",
    description: "five",
    image: Slicer6,
    alt: "illustration",
  },
  {
    index: 6,
    title: "3D Interface",
    description: "six",
    image: Slicer7,
    alt: "illustration",
  },
  {
    index: 7,
    title: "3D Interface",
    description: "seven",
    image: Slicer8,
    alt: "illustration",
  },
  {
    index: 8,
    title: "3D Interface",
    description: "eight",
    image: Slicer9,
    alt: "illustration",
  },
];
