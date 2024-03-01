import * as Module5 from "@/public/module5";
import Link from "next/link";
import * as course from "@/public/course";

export const slicerTutorial5 = [
  {
    title: "Welcome to 3D slicer - Advanced-Segmentation (Part 5)",
    description: (
      <div>
        Make sure to <span className="font-bold">install</span> your downloaded{" "}
        <span className="font-bold">3D slicer software</span> before you start
        the lesson.
        <p>You can find it in the 3D interface (Part 1).</p>
      </div>
    ),
    image: course.Module4,
    alt: "",
  },
  {
    title: "",
    description:
      "Open 3D Slicer and add DICOM data through the add DICOM data button.",
    image: Module5.Slicer31,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Select the preferred dataset and left click on the import button.",
    image: Module5.Slicer32,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "After successfully loading the file, you should have the 3D object in your screen.",
    image: Module5.Slicer33,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To see the currently loaded objects, access the objects browser through the drop down menu under view.",
    image: Module5.Slicer34,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The object browser will show the available 3D object currently open in the program. Currently, only 1 object is available.",
    image: Module5.Slicer35,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To separate the mandible, left click on the select icon which will activate the brush tool and allow the user to “paint” or select any area of the 3D object. The brush size can be increased or decreased by holding down the left mouse button and dragging the slider.",
    image: Module5.Slicer36,
    alt: "illustration",
  },
  {
    title: "",
    description: "The area highlighted in dark grey is the area of the brush. ",
    image: Module5.Slicer37,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To select or “paint” the area, press the left mouse button once. To continuously paint, hold the left mouse button and drag the brush over the desired area.",
    image: Module5.Slicer38,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To select the entire mandible, paint any area of the mandible using the brush tool and through the modify menu, select “expand to connected”. Alternatively, this can be done by pressing the hotkey “E” or simply double clicking on the left mouse button. The expand to connected function works by expanding the selected area to all the connected areas in an object. Since the mandible has already been separated in 3D slicer, it is not “connected” to the rest of the skull.",
    image: Module5.Slicer39,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To make the mandible as a separate object, access the separate option through the edit menu. This can also be done by typing the hotkey “Y”",
    image: Module5.Slicer40,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once the mandible has been separated, it will appear as a separate object in the object browser. The highlighted object in the object browser is the object that is currently “active”. It will show up as the white object in the screen and all changes will be made on that object. The Objects can be renamed by double clicking on the object name.",
    image: Module5.Slicer41,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once the mandible has been separated, it will appear as a separate object in the object browser. The Objects can be renamed by double clicking on the object name for this tutorial rename the object to “skull”. The objects can be hidden by left clicking on the “visibility” icon on the right.",
    image: Module5.Slicer42,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Hide the rest of the skull and leave only the mandible. We can see that there is a tumor on the right side of the mandible. We can remove this tumor using the plane cut function. Position the mandible by clicking on the “top” area of the view cube.",
    image: Module5.Slicer43,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "We can remove the tumor side of the mandible using the “plane cut” function. ",
    image: Module5.Slicer44,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The “plane cut” function is active when a grid is visible over the screen.",
    image: Module5.Slicer45,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To position the plane in the desired area, hold down the left mouse button and drag downwards through the middle of the mandible. The red line will show the area where the plane will be placed.",
    image: Module5.Slicer46,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "After dragging the red line through the middle, release the left mouse button and the plane will by placed. Note the transparent area is the area that will be cut. To switch this to the other side, left click on the blue arrow.",
    image: Module5.Slicer47,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "You can choose to remove one half or keep both halves through the dropdown menu. For this tutorial, select keep both.",
    image: Module5.Slicer48,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "You can choose to move the plane by clicking on the directional buttons and dragging towards the desired area. Rotating the plane can also be done by clicking and dragging on the curved lines.",
    image: Module5.Slicer49,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "For defects/tumors on one side of the mandible, position the plane slightly away from the middle towards the tumor side to allow for sufficient overlapping of the model during the next few steps. Once the position is sufficient, click on accept.",
    image: Module5.Slicer50,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Select the normal half of the mandible by double clicking using the select tool and separating using the separate function in the edit drop down menu, or simply use the hotkey “Y”.",
    image: Module5.Slicer51,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once Successfully separated, a third object will be available in the object browser. Rename the part to mandiblenormal. Rename the other part to mandibletumor.",
    image: Module5.Slicer52,
    alt: "illustration",
  },
  {
    title: "",
    description: "Hide the mandibletumor object by clicking on the “eye” icon.",
    image: Module5.Slicer53,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To “reconstruct” the missing half, select the mirror function under the “edit” icon.",
    image: Module5.Slicer54,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "You can mirror the normal side of the mandible. It is important to not just reconstruct the missing side but also to make sure that it is in its proper position.",
    image: Module5.Slicer55,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To do this, “show” the “skull” object by clicking on the “eye” icon. Position the view to bottom via the view cube. ",
    image: Module5.Slicer56,
    alt: "illustration",
  },
  {
    title: "",
    description: "Objective",
    image: Module5.Slicer57,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        <p>
          Congratulation, you've able to finish the lesson in advance segmentation. For you to get the
          certificate, take the{" "}
          <Link
            href="http://localhost:3000/quiz/advance"
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
