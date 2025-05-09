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
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description:
      (
      <div>To <span className="font-bold">add datasets</span> to the program, left click on the  <span className="font-bold">add DICOM data button</span> located in the module interface panel.</div>
      ),
    image: Module2.Slicer11,
    alt: "illustration",
  },
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
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
    title: "3D slicer - Adding DICOM datasets (Part 2)",
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
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description:
      (
        <div><span className="font-bold">Left clicking</span> on the Add DICOM data will direct the user to the add DICOM database module.</div>
      ),
    image: Module2.Slicer15,
    alt: "illustration",
  },
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description:
      (
        <div>The <span className="font-bold">DICOM data interface</span> will show the details of the available datasets.</div>
      ),
    image: Module2.Slicer16,
    alt: "illustration",
  },
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description:
      (
        <div>The <span className="font-bold">search bar</span> above can be used to quickly search for previously imported datasets.</div>
      ),
    image: Module2.Slicer17,
    alt: "illustration",
  },
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description:
      (
        <div>Once in the DICOM database module, <span className="font-bold">left click</span> on the <span className="font-bold">import DICOM files</span> button.</div>
      ),
    image: Module2.Slicer18,
    alt: "illustration",
  },
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description:
      (
        <div>Navigate to your saved DICOM files and left click on the dataset of choice and click on <span className="font-bold">import</span>.</div>
      ),
    image: Module2.Slicer19,
    alt: "illustration",
  },
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description:
      (
        <div>The selected dataset will be available in the DICOM database. <span className="font-bold">Left click</span> on the dataset and <span className="font-bold">left click</span> on the <span className="font-bold">load</span> button.</div>
      ),
    image: Module2.Slicer20,
    alt: "illustration",
  },
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description:
     (
      <div>The DICOM images will immediately be loaded into the <span className="font-bold">DICOM display window</span> for viewing.</div>
     ),
    image: Module2.Slicer21,
    alt: "illustration",
  },
  {
    title: "3D slicer - Adding DICOM datasets (Part 2)",
    description: (
      <div className="flex flex-col space-y-4">
        <p>
          Congratulations! You have successfully added a DICOM dataset into 3D
          slicer.
        </p>
        <div className="flex justify-center mt-6">
          <Link 
            href="/quiz/adddicom" 
            className="inline-flex items-center px-6 py-3 bg-[#043873] text-white font-medium rounded-lg hover:bg-[#0a4d8d] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <span>Take the Quiz</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <p className="text-sm text-gray-600 text-center mt-2">
          Complete the quiz to earn your certificate
        </p>
      </div>
    ),
    image: null,
    alt: "",
  },
];
