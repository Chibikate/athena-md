import * as Module1 from "@/public/module1";
import Link from "next/link";

export const slicerTutorial1 = [
  {
    title: "Creating a 3D file from DICOM images",
    description: (
      <div>
        <div className="flex flex-col items-center justify-center">
          <ul className="list-disc list-inside space-y-2">
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
                href="https://drive.google.com/drive/folders/1742qADzEkJDJ-FBMINb89dR9A7L0fbc6"
                className="underline"
                target="_blank"
              >
                <span className="underline">
                  https://drive.google.com/drive/folders/1742qADzEkJDJ-FBMINb89dR9A7L0fbc6
                </span>
              </Link>
              <p className="ml-6">(in zipped folder contains dicom files)</p>
            </li>
          </ul>
        </div>
      </div>
    ),
    image: null,
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
    image: null,
    alt: "",
  },
  {
    title: "THE TEAM",
    description: (
      <div>
        <p className="pl-3 pb-4">
          Lemuel Clark Velasco <br />{" "}
          <span className="font-bold text-sm pb-4">
            Project Leader
          </span>
        </p>

        <div className="pb-4">
          <p>
            Dr. Rentor Cafino <br /> MD, DPSO-HNS
            <br />
            <span className="font-semibold text-sm text-[#111033] ">
              {" "}
              Medical Adviser{" "}
            </span>
          </p>
        </div>
        <div className="pb-4">
          <p >
            Dr. Armando T. Isla <br /> MD, FPSO-HNS
            <br />
            <span className="font-semibold text-sm text-[#111033] ">
              {" "}
              Medical Adviser{" "}
            </span>
          </p>
        </div>
        <div className="flex flex-col pb-2">
          <p>Karen Mae Ty - MD, FPSO-HNS</p>
          <p>Jay Pee Amable - MD, FPSO-HNS</p>
          <p>Isaac Cesar De Guzman - MD, FPSO-HNS</p>
          <p>Jehan Grace Maglaya - MD, FPSO-HNS</p>
          <p>Anna Carmina Zantua - MD, FPSO-HNS</p>
          <p className="font-bold text-sm text-[#111033] ">
            Content Validators
          </p>
        </div>
        <p>
          Kaye Q. Velarde <br />{" "}
          <span className="font-bold  text-sm text-[#111033]  ">
            Pedagogy Manager
          </span>
        </p>

        <p>
          Queenie Kate S. Cabanilla <br />{" "}
          <span className="font-bold text-sm text-[#111033]">
            Web Developer
          </span>
        </p>
      </div>
    ),
    image: null,
    alt: "",
  },
  {
    title: "Welcome to 3D Slicer Interface",
    description: (
      <div>
        Make sure to <span className="font-bold">install</span> your downloaded{" "}
        <span className="font-bold">3D slicer software</span> before you start
        the lesson.
      </div>
    ),
    image: Module1.Slicer1,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        The <span className="font-bold">menu bar </span> provides access to drop
        down menu boxes.
      </div>
    ),
    image: Module1.Slicer1,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        The <span className="font-bold">toolbar</span> has quick access buttons
        for commonly used functions.
      </div>
    ),
    image: Module1.Slicer2,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        This can be further customized by{" "}
        <span className="font-bold">right clicking</span> on the toolbar and
        <span className="font-bold"> checking/unchecking</span> the preferred
        choices.
      </div>
    ),
    image: Module1.Slicer3,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        The <span className="font-bold">module interface</span> provides access
        to multiple options depending on the module loaded.
      </div>
    ),
    image: Module1.Slicer4,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        Clicking on the <span className="font-bold">module drop down menu</span>{" "}
        will provide access to different modules available in the program.
      </div>
    ),
    image: Module1.Slicer5,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        Alternatively, the user can search for a{" "}
        <span className="font-bold">module</span> by clicking on the{" "}
        <span className="font-bold">module finder icon.</span>
      </div>
    ),
    image: Module1.Slicer6,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        The <span className="font-bold">DICOM display window</span> displays the
        different views of the imaging of choice{" "}
        <span className="font-bold">(CT scan, MRI, etc.)</span>
      </div>
    ),
    image: Module1.Slicer7,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        Different layouts for the DICOM display windows can be accessed by{" "}
        <span className="font-bold">clicking on the drop down menu</span> in the
        menu bar.
      </div>
    ),
    image: Module1.Slicer8,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        Alternatively, different layouts can be accessed through the{" "}
        <span className="font-bold">toolbar.</span>
      </div>
    ),
    image: Module1.Slicer9,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        <p>
          Congratulation, you've to finish the lesson. For you to get the
          certificate, take the{" "}
          <Link href="/quiz/interface" className="font-bold underline">
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
