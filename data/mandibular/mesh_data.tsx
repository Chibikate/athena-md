import * as Module6 from "@/public/module6";
import Link from "next/link";

export const MeshTutorial = [
  {
    title: "3D File Manipulation and Separating the Mandible in Meshmixer",
    description: (
      <div className="flex flex-col items-center justify-center">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Download Meshmixer (version 3.5): </span>
            <Link href="https://meshmixer.com/download.html" target="_blank" className="underline">
              https://meshmixer.com/download.html
            </Link>
          </li>
          <li>
            <span className="font-semibold">Download file for this activity: </span>
            <Link
              href="https://drive.google.com/drive/folders/1uHn8Ozf8MmxCrG45Wsuy-kLPiMcoC1gV?usp=sharing"
              target="_blank"
              className="underline"
            >
              https://drive.google.com/drive/folders/1uHn8Ozf8MmxCrG45Wsuy-kLPiMcoC1gV
            </Link>
          </li>
        </ul>
      </div>
    ),
    image: null,
    alt: "",
  },
  {
    title: "MeshMixer - Virtual Surgery",
    description: (
      <div>
        Left click on the <span className="font-bold">Import</span> icon on the homescreen or toolbar.
      </div>
    ),
    image: Module6.Mesh1,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Virtual Surgery",
    description: (
      <div>
        Access the folder you saved your file in, left click on the file, then click <span className="font-bold">Open</span>.
      </div>
    ),
    image: Module6.Mesh2,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Virtual Surgery",
    description: (
      <div>
        After successfully loading the file, you should see the <span className="font-bold">3D object</span> on your screen.
      </div>
    ),
    image: Module6.Mesh3,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Virtual Surgery",
    description: (
      <div>
        Access the <span className="font-bold">Object Browser</span> from the dropdown menu under <span className="font-bold">View</span>.
      </div>
    ),
    image: Module6.Mesh4,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Virtual Surgery",
    description: (
      <div>
        The <span className="font-bold">Object Browser</span> shows the available <span className="font-bold">3D objects</span>. Currently, only one object is loaded.
      </div>
    ),
    image: Module6.Mesh5,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Separating the Mandible",
    description: (
      <div>
        Left click on the <span className="font-bold">Select</span> icon to activate the <span className="font-bold">Brush Tool</span>. This allows you to “paint” or select any area of the 3D object. Adjust the brush size by holding down the left mouse button and dragging the slider.
      </div>
    ),
    image: Module6.Mesh6,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Brush Tool",
    description: (
      <div>
        The area highlighted in <span className="font-bold">dark grey</span> represents the brush area.
      </div>
    ),
    image: Module6.Mesh7,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Painting the Mandible",
    description: (
      <div>
        To select an area, click once with the left mouse button. To continuously paint, hold and drag the left mouse button.
      </div>
    ),
    image: Module6.Mesh8,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Expand Selection",
    description: (
      <div>
        Paint a portion of the mandible, then use <span className="font-bold">Expand to Connected</span> under the modify menu or press <span className="font-bold">E</span>. Alternatively, double-click the left mouse button.
      </div>
    ),
    image: Module6.Mesh9,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Separate the Mandible",
    description: (
      <div>
        To separate, go to the <span className="font-bold">Edit Menu</span> and select <span className="font-bold">Separate</span> or press <span className="font-bold">Y</span>.
      </div>
    ),
    image: Module6.Mesh10,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Managing Objects",
    description: (
      <div>
        The mandible will appear as a new object in the <span className="font-bold">Object Browser</span>. You can rename it by double-clicking its name.
      </div>
    ),
    image: Module6.Mesh11,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Renaming Objects",
    description: (
      <div>
        Rename the skull object to <span className="font-bold">"skull"</span> and manage visibility using the eye icon.
      </div>
    ),
    image: Module6.Mesh12,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Identifying Tumor",
    description: (
      <div>
        Hide the skull and leave only the mandible visible. Notice the <span className="font-bold">tumor</span> on the <span className="font-bold">right side</span> of the mandible. Use the <span className="font-bold">Plane Cut</span> function to remove it.
      </div>
    ),
    image: Module6.Mesh13,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Plane Cut",
    description: (
      <div>
        Use the <span className="font-bold">Plane Cut</span> function to remove the tumor side of the mandible.
      </div>
    ),
    image: Module6.Mesh14,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Positioning Plane Cut",
    description: (
      <div>
        When active, a grid appears. Drag to position the <span className="font-bold">red line</span> where the cut will be made.
      </div>
    ),
    image: Module6.Mesh15,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Adjusting the Plane",
    description: (
      <div>
        Hold the left mouse button and drag downwards to adjust the plane. Click the blue arrow to flip sides.
      </div>
    ),
    image: Module6.Mesh16,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Cut Settings",
    description: (
      <div>
        In the dropdown menu, choose <span className="font-bold">Keep Both</span> to preserve both halves.
      </div>
    ),
    image: Module6.Mesh17,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Fine-tuning the Cut",
    description: (
      <div>
        Move or rotate the plane using the directional arrows and curved lines.
      </div>
    ),
    image: Module6.Mesh18,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Preparing for Reconstruction",
    description: (
      <div>
        Position the plane slightly toward the tumor side for better overlap. Click <span className="font-bold">Accept</span> when done.
      </div>
    ),
    image: Module6.Mesh19,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Separating Normal Mandible",
    description: (
      <div>
        Select the normal side using the brush tool and separate it using the <span className="font-bold">Separate</span> function or press <span className="font-bold">Y</span>.
      </div>
    ),
    image: Module6.Mesh20,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Renaming Separated Parts",
    description: (
      <div>
        Rename the parts: <span className="font-bold">mandiblenormal</span> and <span className="font-bold">mandibletumor</span>.
      </div>
    ),
    image: Module6.Mesh21,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Hiding Tumor Object",
    description: (
      <div>
        Hide the <span className="font-bold">mandibletumor</span> object by clicking the <span className="font-bold">eye</span> icon.
      </div>
    ),
    image: Module6.Mesh22,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Mirroring the Normal Mandible",
    description: (
      <div>
        Use the <span className="font-bold">Mirror</span> function under <span className="font-bold">Edit</span> to reconstruct the missing half.
      </div>
    ),
    image: Module6.Mesh23,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Positioning the Mirror",
    description: (
      <div>
        Mirror the normal side and adjust to ensure it fits properly.
      </div>
    ),
    image: Module6.Mesh24,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Aligning the Reconstruction",
    description: (
      <div>
        Show the <span className="font-bold">skull</span> object for alignment. Adjust using the View Cube.
      </div>
    ),
    image: Module6.Mesh25,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Adjusting Condyles",
    description: (
      <div>
        Adjust the <span className="font-bold">condyles</span> using the blue directional arrow for proper positioning.
      </div>
    ),
    image: Module6.Mesh26,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Finalizing Reconstruction",
    description: (
      <div>
        Fine-tune and click <span className="font-bold">Accept</span> when satisfied.
      </div>
    ),
    image: Module6.Mesh27,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Confirming Position",
    description: (
      <div>
        Compare with the tumor side if the condyle is in a normal position.
      </div>
    ),
    image: Module6.Mesh28,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Making Solid",
    description: (
      <div>
        Click <span className="font-bold">Edit</span> and <span className="font-bold">Make Solid</span> to prepare for 3D printing.
      </div>
    ),
    image: Module6.Mesh29,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Final Export",
    description: (
      <div>
        Use default settings and click <span className="font-bold">Accept</span>. Export the final model via <span className="font-bold">File → Export</span>.
      </div>
    ),
    image: Module6.Mesh30,
    alt: "Illustration",
  },
  {
    title: "MeshMixer - Course Completion",
    description: (
      <div>
        <p>
          Congratulations! To get your certificate, please take the{" "}
          <Link href="/quiz/meshmixer" className="font-bold underline">
            quiz
          </Link>
          .
        </p>
      </div>
    ),
    image: null,
    alt: "",
  },
];
