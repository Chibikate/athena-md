import * as Module6 from "@/public/module6";
import Link from "next/link";

export const MeshTutorial = [
  {
    title:
      "3D file manipulation and separating the mandible in Meshmixer (Autodesk, San Rafael, California)",
    description: (
      <div>
        <div className="flex flex-col items-center justify-center">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">
                Download Meshmixer (version 3.5):{" "}
              </span>
              <Link href="https://meshmixer.com/download.html" target="_blank">
                <span className="underline">
                  https://meshmixer.com/download.html
                </span>
              </Link>
            </li>
            <li>
              <span className="font-semibold ">
                Download file to use for this activity:{" "}
              </span>
              <Link
                href="https://drive.google.com/drive/folders/1uHn8Ozf8MmxCrG45Wsuy-kLPiMcoC1gV?usp=sharing"
                target="_blank"
              >
                <span className=" underline">
                  https://drive.google.com/drive/folders/1uHn8Ozf8MmxCrG45Wsuy-kLPiMcoC1gV?usp=sharing
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    ),
    image: null,
    alt: "",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      "Left click on the import icon on the homescreen or the toolbar.",
    image: Module6.Mesh1,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Access the folder you saved your file in, left click on the file and left click on open. ",
    image: Module6.Mesh2,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "After successfully loading the file, you should have the 3D object in your screen.",
    image: Module6.Mesh3,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To see the currently loaded objects, access the objects browser through the drop down menu under view.",
    image: Module6.Mesh4,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The object browser will show the available 3D object currently open in the program. Currently, only 1 object is available.",
    image: Module6.Mesh5,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To separate the mandible, left click on the select icon which will activate the brush tool and allow the user to “paint” or select any area of the 3D object. The brush size can be increased or decreased by holding down the left mouse button and dragging the slider.",
    image: Module6.Mesh6,
    alt: "illustration",
  },
  {
    title: "",
    description: "The area highlighted in dark grey is the area of the brush. ",
    image: Module6.Mesh7,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To select or “paint” the area, press the left mouse button once. To continuously paint, hold the left mouse button and drag the brush over the desired area.",
    image: Module6.Mesh8,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To select the entire mandible, paint any area of the mandible using the brush tool and through the modify menu, select “expand to connected”. Alternatively, this can be done by pressing the hotkey “E” or simply double clicking on the left mouse button. The expand to connected function works by expanding the selected area to all the connected areas in an object. Since the mandible has already been separated in 3D slicer, it is not “connected” to the rest of the skull.",
    image: Module6.Mesh9,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To make the mandible as a separate object, access the separate option through the edit menu. This can also be done by typing the hotkey “Y”",
    image: Module6.Mesh10,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once the mandible has been separated, it will appear as a separate object in the object browser. The highlighted object in the object browser is the object that is currently “active”. It will show up as the white object in the screen and all changes will be made on that object. The Objects can be renamed by double clicking on the object name.",
    image: Module6.Mesh11,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once the mandible has been separated, it will appear as a separate object in the object browser. The Objects can be renamed by double clicking on the object name for this tutorial rename the object to “skull”. The objects can be hidden by left clicking on the “visibility” icon on the right.",
    image: Module6.Mesh12,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Hide the rest of the skull and leave only the mandible. We can see that there is a tumor on the right side of the mandible. We can remove this tumor using the plane cut function. Position the mandible by clicking on the “top” area of the view cube.",
    image: Module6.Mesh13,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "We can remove the tumor side of the mandible using the “plane cut” function. ",
    image: Module6.Mesh14,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The “plane cut” function is active when a grid is visible over the screen.",
    image: Module6.Mesh15,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To position the plane in the desired area, hold down the left mouse button and drag downwards through the middle of the mandible. The red line will show the area where the plane will be placed.",
    image: Module6.Mesh16,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "After dragging the red line through the middle, release the left mouse button and the plane will by placed. Note the transparent area is the area that will be cut. To switch this to the other side, left click on the blue arrow.",
    image: Module6.Mesh17,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "You can choose to remove one half or keep both halves through the dropdown menu. For this tutorial, select keep both.",
    image: Module6.Mesh18,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "You can choose to move the plane by clicking on the directional buttons and dragging towards the desired area. Rotating the plane can also be done by clicking and dragging on the curved lines.",
    image: Module6.Mesh19,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "For defects/tumors on one side of the mandible, position the plane slightly away from the middle towards the tumor side to allow for sufficient overlapping of the model during the next few steps. Once the position is sufficient, click on accept.",
    image: Module6.Mesh20,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Select the normal half of the mandible by double clicking using the select tool and separating using the separate function in the edit drop down menu, or simply use the hotkey “Y”.",
    image: Module6.Mesh21,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once Successfully separated, a third object will be available in the object browser. Rename the part to mandiblenormal. Rename the other part to mandibletumor.",
    image: Module6.Mesh22,
    alt: "illustration",
  },
  {
    title: "",
    description: "Hide the mandibletumor object by clicking on the “eye” icon.",
    image: Module6.Mesh23,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To “reconstruct” the missing half, select the mirror function under the “edit” icon.",
    image: Module6.Mesh24,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "You can mirror the normal side of the mandible. It is important to not just reconstruct the missing side but also to make sure that it is in its proper position.",
    image: Module6.Mesh25,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To do this, “show” the “skull” object by clicking on the “eye” icon. Position the view to bottom via the view cube. ",
    image: Module6.Mesh26,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Take note of the position of the condyles. Drag the blue directional arrow until the left condyle is sitting in a similar position as the normal mandible.",
    image: Module6.Mesh27,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "You can further manipulate the objects to fine-tune your reconstruction. Once satisfied with the position of the mirrored mandible, click “accept”.",
    image: Module6.Mesh28,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "The position can be further confirmed by making the tumor side of the mandible visible and comparing the position of the condyle. This can only be done if the condyle in the tumor side is in its normal position. Very large tumors may displace the condyle away from its regular position and may serve as a good reference.",
    image: Module6.Mesh29,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "Once satisfied, make the object into a solid by clicking on the “edit” icon and clicking on “make solid”. This will “fill” the object and remove any internal geometry making it ready for 3D printing.",
    image: Module6.Mesh30,
    alt: "illustration",
  },
  {
    title: "",
    description: "Use the default settings and click on “accept”.",
    image: Module6.Mesh31,
    alt: "illustration",
  },
  {
    title: "",
    description:
      "To save the object, click on “file” then “export” and save the mandible into your desired folder. Congratulations! You have successfully removed the tumor side as well as reconstructed the mandible. This object can be used as a guide for pre-bending titanium implants. Although not a standalone process in mandibular reconstruction, this process shows the basics in extraction and manipulation of the mandible in a 3D environment.",
    image: Module6.Mesh32,
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
            href="http://localhost:3000/quiz/meshmixer"
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
