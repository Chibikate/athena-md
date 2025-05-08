import * as Module3 from "@/public/module3";
import Link from "next/link";

export const slicerTutorial3 = [
  {
    title: "Welcome to 3D slicer - Navigating DICOM display (Part 3)",
    description: (
      <div>
        Make sure to <span className="font-bold">install</span> your downloaded{" "}
        <span className="font-bold">3D slicer software</span> before you start
        the lesson.
        <p>You can find it in the 3D interface (Part 1).</p>
      </div>
    ),
    image: Module3.Slicer22,
    alt: "",
  },
  {
    title: "Navigating DICOM display (Part 3)",
    description:
      (
        <div>The <span className="font-bold">middle mouse button</span> can be used to scroll through the DICOM files. <span className="font-bold">Hovering the mouse pointer</span> over a window will <span className="font-bold">“select”</span> the window and activate the function.</div>
      ),
    image: Module3.Slicer22,
    alt: "illustration",
  },
  {
    title: "Navigating DICOM display (Part 3)",
    description:
      (
        <div>
          Alternatively, <span className="font-bold">holding down the left mouse button </span>with the cursor on the slider button and <span className="font-bold">dragging</span> will also allow the user to scroll through the DICOM files. 
        </div>
      ),
    image: Module3.Slicer23,
    alt: "illustration",
  },
  {
    title: "Navigating DICOM display (Part 3)",
    description:
      (
        <div>Quickly tapping the left mouse button twice <span className="font-bold">(double click) </span>will maximize the selected window.</div>
      ),
    image: Module3.Slicer24,
    alt: "illustration",
  },
  {
    title: "Navigating DICOM display (Part 3)",
    description:
      (
        <div><span className="font-bold">Double clicking again</span> will return the window to its original size. This function can be utilized for all the windows in the DICOM display.</div>
      ),
    image: Module3.Slicer25,
    alt: "illustration",
  },
  {
    title: "Navigating DICOM display (Part 3)",
    description:
      (
        <div><span className="font-bold">Holding down the right mouse</span> button while dragging downwards will zoom in the image. <span className="font-bold">Dragging upwards</span> will zoom out.</div>
      ),
    image: Module3.Slicer26,
    alt: "illustration",
  },
  {
    title: "Navigating DICOM display (Part 3)",
    description:
      (
        <div>On the <span className="font-bold">3D panel (blue) holding the left mouse button while dragging</span> will allow the user to move the 3D object around.</div>
      ),
    image: Module3.Slicer27,
    alt: "illustration",
  },
  {
    title: "Navigating DICOM display (Part 3)",
    description:
      (
        <div><span className="font-bold">Scrolling upwards</span> using the middle mouse button will zoom in on the 3D model. <span className="font-bold">Scrolling downwards</span> will zoom out.</div>
      ),
    image: Module3.Slicer28,
    alt: "illustration",
  },
  {
    title: "Navigating DICOM display (Part 3)",
    description:
      (
        <div><span className="font-bold">Holding down</span> the middle mouse button and <span className="font-bold">dragging</span> will pan the 3D image.</div>
      ),
    image: Module3.Slicer29,
    alt: "illustration",
  },
  {
    title: "Navigating DICOM display (Part 3)",
    description:
      (
        <div>Alternatively, <span className="font-bold">holding down the right mouse button while dragging upwards</span> will zoom in on the 3D model. Dragging downwards will zoom out.</div>
      ),
    image: Module3.Slicer30,
    alt: "illustration",
  },
  {
    title: "Congratulations!",
    description: (
      <div className="flex flex-col space-y-4">
        <p>
          Congratulations! You've successfully completed the DICOM Navigation module in 3D Slicer.
        </p>
        <div className="flex justify-center mt-6">
          <Link 
            href="/quiz/navigation" 
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
