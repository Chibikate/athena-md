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
        <p>You can find it in the 3D interface (Part 1).</p>
      </div>
    ),
    image: course.Module5,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
      <div><span className="font-bold">Open 3D Slicer</span> and <span className="font-bold">Add DICOM data</span> through the add DICOM data button.</div>
      ),
    image: Module4.Slicer58,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Select the preferred dataset and left click on the <span className="font-bold">import button</span>.</div>
      ),
    image: Module4.Slicer59,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Left click</span> on the imported dataset and left click on the <span className="font-bold">load button</span>.</div>
      ),
    image: Module4.Slicer60,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Left click</span> on the module dropdown box to access the different modules.</div>
      ),
    image: Module4.Slicer61,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>Left click on <span className="font-bold">Segment Editor</span>.</div>
    ),
    image: Module4.Slicer62,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To start the segmentation process, left click on the <span className="font-bold">add button</span>. This will add a <span className="font-bold">“segment”.</span></div>
      ),
    image: Module4.Slicer63,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Double clicking</span> with the left mouse button on the segment name will allow the user to <span className="font-bold">rename the segment</span>. For now, rename the segment to <span className="font-bold">“Skull”</span>.</div>
      ),
    image: Module4.Slicer64,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Double clicking</span> with the left mouse button on the <span className="font-bold">segment color box</span> will allow the user to select different colors to represent the segmented area. Each structure has a <span className="font-bold">color by default</span>.</div>
      ),
    image: Module4.Slicer65,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>However, the user can choose any color by <span className="font-bold">left clicking</span> on the <span className="font-bold">color selection button</span>. Once the preferred color has been chosen, confirm the choice by <span className="font-bold">left clicking on the “OK” button</span>. For now, retain the <span className="font-bold">default color (green).</span></div>
      ),
    image: Module4.Slicer66,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>Left click on the <span className="font-bold">“threshold”</span> function button.</div>
    ),
    image: Module4.Slicer67,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>The threshold function will allow the user to isolate structures based on the threshold <span className="font-bold">intensity range.</span> </div>
      ),
    image: Module4.Slicer68,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To change the threshold intensity, <span className="font-bold">click on the slider and hold down left button.</span> <span className="font-bold">Drag the slider</span> until the desired threshold intensity is reached. This can be determined if the highlighted areas in the DICOM window are to the users preference <span className="font-bold">(in this case the skull).</span></div>
      ),
    image: Module4.Slicer69,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Once satisfied</span> with the threshold intensity, left click on the  <span className="font-bold">“apply”</span> button to apply the changes.</div>
      ),
    image: Module4.Slicer70,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Once the threshold intensity is confirmed, a 3D image is now available to the user. To access this, left click on the show <span className="font-bold">3D button.</span></div>
      ),
    image: Module4.Slicer71,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>After clicking on the show 3D button, the 3D image will appear on the <span className="font-bold">blue window.</span></div>
      ),
    image: Module4.Slicer72,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Sometimes, the <span className="font-bold">3D image will not immediately show in the blue window</span> due to the positioning of the image. To bring the 3D image into the window, click on the <span className="font-bold">center view button</span>.</div>
      ),
    image: Module4.Slicer73,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Once the 3D image of the skull is centered</span> in the blue window, maximize the blue window by <span className="font-bold">double clicking with the left mouse button.</span> Often times, the 3D image has artifacts.</div>
      ),
    image: Module4.Slicer74,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Minimize the blue window by double clicking with the left mouse button. The user can <span className="font-bold">remove</span> the unwanted artifacts using the <span className="font-bold">“island”</span> function.</div>
      ),
    image: Module4.Slicer75,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Left click</span> on the <span className="font-bold">“islands”</span> function button to access the islands function.</div>
      ),
    image: Module4.Slicer76,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>Left click on the <span className="font-bold">“keep selected island”</span> option to select.</div>
    ),
    image: Module4.Slicer77,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>
        <span className="font-bold">Left click</span> on <span className="font-bold">any part of the skull</span>. This will <span className="font-bold">remove</span> the components not connected to the selected area hence removing the artifacts.
        </div>
      ),
    image: Module4.Slicer78,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>This image shows the skull with the <span className="font-bold">artifacts removed.</span></div>
    ),
    image: Module4.Slicer79,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To <span className="font-bold">save</span> the 3D file, left click on the drop-down button and left click on <span className="font-bold">“export to files”.</span></div>
      ),
    image: Module4.Slicer80,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>This will open up the window for exporting segments. The user can left click on the <span className="font-bold">destination folder</span> to change the destination folder. For now, leave all other options as default.</div>
    ),
    image: Module4.Slicer81,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>Left click on the <span className="font-bold">“export”</span> button to export the file. The file you saved will be named <span className="font-bold">“Segmentation_Skull”.</span></div>
    ),
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
            href="/quiz/basic"
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
