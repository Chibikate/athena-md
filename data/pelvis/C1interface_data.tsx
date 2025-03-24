import C1 from "@/public/basic3D/C1";
import Link from "next/link";

export const slicerTutorial6 = [
    {
        title: "3D Modeling - Pelvis (C-1)",
        description: (
            <div>
              <div className="flex flex-col items-center justify-center">
                <ul className=" space-y-2">
                  <li>
                    <span className="font-semibold pb-4">
                      Download 3D slicer (Stable version 5.6.1):{" "}
                    </span>
                    <Link
                      href=" https://download.slicer.org/"
                      className="underline"
                      target="_blank"
                    >
                      https://download.slicer.org/
                    </Link>
                    <p className="ml-6">Available in Windows, macOS and Linux </p>
                  </li>
                  <li>
                    <span className="font-semibold">Download files: </span>
                    <Link
                      href="https://drive.google.com/drive/folders/1Gq2A8EL0izlRR7N0UtZFBZ9u-A6cFMSe"
                      className="underline"
                      target="_blank"
                    >
                      <span className="underline">
                      https://drive.google.com/drive/folders/1Gq2A8EL0izlRR7N0UtZFBZ9u-A6cFMSe
                      </span>
                    </Link>
                    <p className="ml-6">(in zipped folder contains dicom files)</p>
                  </li>
                </ul>
              </div>
            </div>
          ),
          image:  null,
          alt: "",
        },
        {
          title: "",
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
          image: null,
          alt: "",
        },
        {
          title: "",
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
          image: null,
          alt: "",
        },
        {
          title: "",
          image: C1,
          alt: "",
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
{
title: "",
      description: (
        <div>
          <p>
            Congratulations! You have successfully added a DICOM dataset into 3D
            slicer. For you to get the certificate, take the{" "}
            <Link
              href="/quiz/pelvis_interface"
              className="font-bold underline"
            >
              Quiz
            </Link>{" "}
            first.
          </p>
        </div>
      ),
      image: null,
      alt: "",
    },
  ];