import * as Module2 from "@/public/module2";
import Link from "next/link";

export const slicerTutorial2 = [
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description: (
      <div>
        Make sure to <span className="font-bold">install</span> your downloaded{" "}
        <span className="font-bold">3D slicer software</span> before you start
        the lesson. 
        <p>You can find it in the 3D interface (Part 1).</p>
      </div>
    ),
    image: Module2.Slicer10,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
      <div>To <span className="font-bold">add datasets</span> to the program, left click on the  <span className="font-bold">add DICOM data button</span> located in the module interface panel.</div>
      ),
    image: Module2.Slicer11,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>
          Alternatively, the <span className="font-bold">Add DICOM data button</span> is also available in the <span className="font-bold">toolbar</span>.
        </div>
      ),
    image: Module2.Slicer13,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>
          The <span className="font-bold">Add DICOM data button</span> is also available in the drop down menu in the menu bar under <span className="font-bold">“File”</span>.
        </div>
      ),
    image: Module2.Slicer14,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Left clicking</span> on the Add DICOM data will direct the user to the add DICOM database module.</div>
      ),
    image: Module2.Slicer15,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>The <span className="font-bold">DICOM data interface</span> will show the details of the available datasets.</div>
      ),
    image: Module2.Slicer16,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>The <span className="font-bold">search bar</span> above can be used to quickly search for previously imported datasets.</div>
      ),
    image: Module2.Slicer17,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Once in the DICOM database module, <span className="font-bold">left click</span> on the <span className="font-bold">import DICOM files</span> button.</div>
      ),
    image: Module2.Slicer18,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Navigate to your saved DICOM files and left click on the dataset of choice and click on <span className="font-bold">import</span>.</div>
      ),
    image: Module2.Slicer19,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>The selected dataset will be available in the DICOM database. <span className="font-bold">Left click</span> on the dataset and <span className="font-bold">left click</span> on the <span className="font-bold">load</span> button.</div>
      ),
    image: Module2.Slicer20,
    alt: "illustration",
  },
  {
    title: "",
    description:
     (
      <div>The DICOM images will immediately be loaded into the <span className="font-bold">DICOM display window</span> for viewing.</div>
     ),
    image: Module2.Slicer21,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        <p>
          Congratulations! You have successfully added a DICOM dataset into 3D
          slicer. For you to get the certificate, take the{" "}
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
