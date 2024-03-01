import * as Module3 from "@/public/module3";
import Link from "next/link";

export const slicerTutorial3 = [
  {
    title: "Welocme to 3D slicer - Navigating DICOM display (Part 3)",
    description: (
      <div>
        Make sure to <span className="font-bold">install</span> your downloaded{" "}
        <span className="font-bold">3D slicer software</span> before you start
        the lesson.
      </div>
    ),
    image: Module3.Slicer22,
    alt: "",
  },
  {
    title: "",
    description:
      "The middle mouse button can be used to scroll through the DICOM files. Hovering the mouse pointer over a window will “select” the window and activate the function.",
    image: Module3.Slicer22,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Alternatively, holding down the left mouse button with the cursor on the slider button and dragging will also allow the user to scroll through the DICOM files. ",
    image: Module3.Slicer23,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Quickly tapping the left mouse button twice (double click) will maximize the selected window.",
    image: Module3.Slicer24,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Double clicking again will return the window to its original size. This function can be utilized for all the windows in the DICOM display.",
    image: Module3.Slicer25,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Holding down the right mouse button while dragging downwards will zoom in the image. Dragging upwards will zoom out.",
    image: Module3.Slicer26,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "On the 3D panel (blue) holding the left mouse button while dragging will allow the user to move the 3D object around.",
    image: Module3.Slicer27,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Scrolling upwards using the middle mouse button will zoom in on the 3D model. Scrolling downwards willl zoom out.",
    image: Module3.Slicer28,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Holding down the middle mouse button and dragging will pan the 3D image.",
    image: Module3.Slicer29,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Alternatively, holding down the right mouse button while dragging upwards will zoom in on the 3D model. Dragging downwards will zoom out.",
    image: Module3.Slicer30,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        <p>
          Congratulation, you've able to finish the lesson. For you to get the
          certificate, take the{" "}
          <Link
            href="http://localhost:3000/quiz/navigation"
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
