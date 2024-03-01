import * as Module2 from "@/public/module2";
import Link from "next/link";

export const slicerTutorial2 = [
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description: (
      <div>
        Make sure to <span className="font-bold">install</span> your downloaded{" "}
        <span className="font-bold">3D slicer software</span> before you start
        the lesson. If you haven't downloaded the software yet, click <Link href="http://localhost:3000/course/3D%20slicer%20interface/data?content=3D%20slicer%20Part%201" className="font-bold underline">here</Link>.
      </div>
    ),
    image: Module2.Slicer10,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To add datasets to the program, left click on the add DICOM data button located in the module interface panel.",
    image: Module2.Slicer11,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Alternatively, the add DICOM data button is also available in the toolbar.",
    image: Module2.Slicer13,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The add DICOM data button is also available in the drop down menu in the menu bar under “File”.",
    image: Module2.Slicer14,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Left clicking on the add DICOM data will direct the user to the add DICOM database module.",
    image: Module2.Slicer15,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The DICOM data interface will show the details of the available datasets.",
    image: Module2.Slicer16,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The search bar above can be used to quickly search for previously imported datasets.",
    image: Module2.Slicer17,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once in the DICOM database module, left click on the import DICOM files button.",
    image: Module2.Slicer18,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Navigate to your saved DICOM files and left click on the dataset of choice and click on import.",
    image: Module2.Slicer19,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The selected dataset will be available in the DICOM database. Left click on the dataset and left click on the load button.",
    image: Module2.Slicer20,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The DICOM images will immediately be loaded into the DICOM display window for viewing.",
    image: Module2.Slicer21,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Congratulations! You have successfully added a DICOM dataset into 3D slicer. For you to get the certificate, take the quiz first by clicking the next button.",
    image: Module2.Slicer21,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        <p>
          Congratulation, you've to finish the lesson. For you to get the
          certificate, take the{" "}
          <Link
            href="http://localhost:3000/quiz/adddicom"
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
