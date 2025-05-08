import * as C2 from "@/public/basic3D/C2";
import Link from "next/link";

export const slicerTutorial7 = [
    {
      title: "3D Modeling Pelvis- Adding DICOM (C-2)",
      description: (
        <div>
          Make sure to <span className="font-bold">install</span> your downloaded{" "}
          <span className="font-bold">3D slicer software</span> before you start
          the lesson. 
          <p>You can find it in the 3D interface (C1).</p>
        </div>
      ),
      image: C2.picture2,
      alt: "illustration",
    },
    {
      title: "",
      description:
        (
        <div>To <span className="font-bold">add datasets</span> to the program, left click on the  <span className="font-bold">add DICOM data button</span> located in the module interface panel.</div>
        ),
      image: C2.picture3,
      alt: "illustration",
    },
    {
      title: "3D Modeling Pelvis- Adding DICOM (C-2)",
      description:
        (
          <div>
            The <span className="font-bold">Add DICOM data button</span> is also available in the drop down menu in the menu bar under <span className="font-bold">“File”</span>.
          </div>
        ),
      image: C2.picture4,
      alt: "illustration",
    },
    {
      title: "3D Modeling Pelvis- Adding DICOM (C-2)",
      description:
        (
          <div><span className="font-bold">Left clicking</span> on the Add DICOM data will direct the user to the add DICOM database module.</div>
        ),
      image: C2.picture5,
      alt: "illustration",
    },
    {
      title: "3D Modeling Pelvis- Adding DICOM (C-2)",
      description:
        (
          <div>The <span className="font-bold">DICOM data interface</span> will show the details of the available datasets.</div>
        ),
      image: C2.picture6,
      alt: "illustration",
    },
    {
      title: "3D Modeling Pelvis- Adding DICOM (C-2)",
      description:
        (
          <div>The <span className="font-bold">search bar</span> above can be used to quickly search for previously imported datasets.</div>
        ),
      image: C2.picture7,
      alt: "illustration",
    },
    {
      title: "3D Modeling Pelvis- Adding DICOM (C-2)",
      description:
        (
          <div>Once in the DICOM database module, <span className="font-bold">left click</span> on the <span className="font-bold">import DICOM files</span> button.</div>
        ),
      image: C2.picture8,
      alt: "illustration",
    },
    {
      title: "3D Modeling Pelvis- Adding DICOM (C-2)",
      description:
        (
          <div>Navigate to your saved DICOM files and left click on the dataset of choice and click on <span className="font-bold">"import"</span>.</div>
        ),
      image: C2.picture9,
      alt: "illustration",
    },
    {
      title: "3D Modeling Pelvis- Adding DICOM (C-2)",
      description:
        (
          <div>The selected dataset will be available in the DICOM database. <span className="font-bold">Left click</span> on the dataset and <span className="font-bold">left click</span> on the <span className="font-bold">load</span> button.</div>
        ),
      image: C2.picture10,
      alt: "illustration",
    },
    {
        title: "3D Modeling Pelvis- Adding DICOM (C-2)",
        description:
         (
          <div>The DICOM images will immediately be loaded into the <span className="font-bold">DICOM display window</span> for viewing.</div>
         ),
        image: C2.picture11,
        alt: "illustration",
      },
    {
      title: "Congratulations!",
      description: (
        <div className="flex flex-col space-y-4">
          <p>
            Well done! You have successfully learned how to add and load DICOM datasets into 3D Slicer. This critical skill allows you to:
          </p>
          <p>
            These skills form the essential foundation for creating accurate 3D models of the pelvis for surgical planning and education.
          </p>
          <div className="flex justify-center mt-6">
            <Link 
              href="/quiz/pelvis_addDicom"
              className="inline-flex items-center px-6 py-3 bg-[#043873] text-white font-medium rounded-lg hover:bg-[#0a4d8d] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <span>Take the Quiz</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <p className="text-sm text-gray-600 text-center mt-2">
            Complete the quiz to earn your certificate and unlock the next module in pelvic modeling
          </p>
        </div>
      ),
      image: null,
      alt: "",
    },
  ];