import * as Module4 from "@/public/module4";
import Link from "next/link";
import * as course from "@/public/course";

export const slicerTutorial4 = [
  {
    title: "Welcome to 3D slicer - Basic-Segmentation (Part 4)",
    description: (
      <div>
        Make sure to <span className="font-bold">install</span> your downloaded{" "}
        <span className="font-bold">3D slicer software</span> before you start
        the lesson.
      </div>
    ),
    image: course.Module5,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Open 3D Slicer and add DICOM data through the add DICOM data button.",
    image: Module4.Slicer58,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Select the preferred dataset and left click on the import button.",
    image: Module4.Slicer59,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Left click on the imported dataset and left click on the load button.",
    image: Module4.Slicer60,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Left click on the module dropdown box to access the different modules.",
    image: Module4.Slicer61,
    alt: "illustration",
  },
  {
    title: "",
    description: "Left click on segment Editor.",
    image: Module4.Slicer62,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To start the segmentation process, left click on the add button. This will add a “segment”.",
    image: Module4.Slicer63,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Double clicking with the left mouse button on the segment name will allow the user to rename the segment. For now, rename the segment to “Skull”.",
    image: Module4.Slicer64,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Double clicking with the left mouse button on the segment color box will allow the user to select different colors to represent the segmented area. Each structure has a color by default.",
    image: Module4.Slicer65,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "However, the user can choose any color by left clicking on the color selection button. Once the preferred color has been chosen, confirm the choice by left clicking on the “OK” button. For now, retain the default color (green).",
    image: Module4.Slicer66,
    alt: "illustration",
  },
  {
    title: "",
    description: "Left click on the “threshold” function button.",
    image: Module4.Slicer67,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The threshold function will allow the user to isolate structures based on the threshold intensity range. ",
    image: Module4.Slicer68,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To change the threshold intensity, click on the slider and hold down left button. Drag the slider until the desired threshold intensity is reached. This can be determined if the highlighted areas in the DICOM window are to the users preference (in this case the skull).",
    image: Module4.Slicer69,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once satisfied with the threshold intensity, left click on the “apply” button to apply the changes.",
    image: Module4.Slicer70,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once the threshold intensity is confirmed, a 3D image is now available to the user. To access this, left click on the show 3D button.",
    image: Module4.Slicer71,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "After clicking on the show 3D button, the 3D image will appear on the blue window.",
    image: Module4.Slicer72,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Sometimes, the 3D image will not immediately show in the blue window due to the positioning of the image. To bring the 3D image into the window, click on the center view button.",
    image: Module4.Slicer73,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once the 3D image of the skull is centered in the blue window, maximize the blue window by double clicking with the left mouse button. Often times, the 3D image has artifacts. ",
    image: Module4.Slicer74,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Minimize the blue window by double clicking with the left mouse button. The user can remove the unwanted artifacts using the “island” function.",
    image: Module4.Slicer75,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Left click on the “islands” function button to access the islands function.",
    image: Module4.Slicer76,
    alt: "illustration",
  },
  {
    title: "",
    description: "Left click on the “keep selected island” option to select.",
    image: Module4.Slicer77,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Left click on any part of the skull. This will remove the components not connected to the selected area hence removing the artifacts.",
    image: Module4.Slicer78,
    alt: "illustration",
  },
  {
    title: "",
    description: "This image shows the skull with the artifacts removed.",
    image: Module4.Slicer80,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To save the 3D file, left click on the drop-down button and left click on “export to files”.",
    image: Module4.Slicer81,
    alt: "illustration",
  },
  {
    title: "",
    description: "",
    image: Module4.Slicer82,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        <p>
          Congratulation, you've able finish the lesson about Basic
          Segmentation. For you to get the certificate, take the{" "}
          <Link
            href="http://localhost:3000/quiz/basic"
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
