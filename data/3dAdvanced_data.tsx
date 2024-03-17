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
      (
        <div><span className="font-bold">Open 3D Slicer</span> and <span className="font-bold">Add DICOM data</span> through the add DICOM data button.</div>
      ),
    image: Module5.Slicer31,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Select the preferred dataset and left click on the <span className="font-bold">import button.</span></div>
      ),
    image: Module5.Slicer32,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Left click</span> on the imported dataset and left click on the <span className="font-bold">load button.</span></div>
      ),
    image: Module5.Slicer33,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Left click</span> on the module dropdown box to access the different modules.</div>
      ),
    image: Module5.Slicer34,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Left click on <span className="font-bold">Segment Editor.</span></div>
      ),
    image: Module5.Slicer35,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Add a <span className="font-bold">“segment”</span> by left clicking on the <span className="font-bold">“add”</span> button. <span className="font-bold">Do this twice.</span></div>
      ),
    image: Module5.Slicer36,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div><span className="font-bold">Rename</span> the upper segment to <span className="font-bold">“Skull”</span> and the lower segment to <span className="font-bold">“Mandible”</span>. These segments will represent the structures we will isolate. Changing the colors of each segment into contrasting colors will help improve visualization of the different areas of segmentation.</div>
    ),
    image: Module5.Slicer37,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Access the <span className="font-bold">“threshold”</span> function by <span className="font-bold">left clicking</span> on the <span className="font-bold">“threshold”</span> button.</div>
      ),
    image: Module5.Slicer38,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Left click and drag</span> the slider button until the desired threshold intensity is achieved. Click on <span className="font-bold">“use for masking”.</span></div>
      ),
    image: Module5.Slicer39,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Clicking on <span className="font-bold">“use for  masking”</span> will automatically activate the <span className="font-bold">“paint”</span> function. This will allow the user to <span className="font-bold">“paint” any area</span> using the previously selected threshold intensity.</div>
      ),
    image: Module5.Slicer40,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>The <span className="font-bold">diameter of the brush</span> can be changed by <span className="font-bold">holding down the left mouse button</span> and <span className="font-bold">dragging the slider</span> until the desired diameter is reached. Alternatively, the user can select any preset brush diameter available.</div>
      ),
    image: Module5.Slicer41,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Using the <span className="font-bold">middle mouse scroll wheel</span>, adjust the <span className="font-bold">image views</span> so that the mandible and the rest of the skull are together in one image. Perform this action for all windows.</div>
      ),
    image: Module5.Slicer42,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Make sure the <span className="font-bold">“skull”</span> segment is selected by <span className="font-bold">left clicking on it</span>. Using the paint function, <span className="font-bold">“paint”</span> areas of the skull that are near the mandible.</div>
      ),
    image: Module5.Slicer43,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Left click</span> on the <span className="font-bold">“mandible”</span> segment to activate it, then <span className="font-bold">“paint”</span> the mandible using the <span className="font-bold">paint function</span>. Make sure that the highlighted areas do not overlap. This can be done in different slices to ensure higher accuracy. Attention should be placed where both structures <span className="font-bold">(mandible & the rest of the skull)</span> overlap such as the teeth.</div>
      ),
    image: Module5.Slicer44,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>If satisfied with the highlighted areas, <span className="font-bold">Left click on the “grow from seeds” function.</span></div>
      ),
    image: Module5.Slicer45,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To start the grow from seeds function, <span className="font-bold">left click on “initialize”</span>.</div>
      ),
    image: Module5.Slicer46,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Once the initialization process is complete, <span className="font-bold">left click on the “show 3D” button</span> to preview the 3D model.</div>
      ),
    image: Module5.Slicer47,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To increase the opacity of the 3D model preview.</div>
      ),
    image: Module5.Slicer48,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>With structures that have overlapping areas, segmentation tends to be less precise. This can be refined further by further <span className="font-bold">painting the overlapping areas.</span></div>
      ),
    image: Module5.Slicer49,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Selecting the “skull”</span> or <span className="font-bold">“mandible”</span> segments and painting the overlapping areas respectively will automatically update the preview.</div>
      ),
    image: Module5.Slicer50,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>When satisfied with the result, <span className="font-bold">left click</span> on the <span className="font-bold">“apply”</span> button. </div>
      ),
    image: Module5.Slicer51,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Click on <span className="font-bold">“show 3D”</span> to show the final 3D image.</div>
      ),
    image: Module5.Slicer52,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>Clicking on the small <span className="font-bold">“eye”</span> icon will show or hide the segment.</div>
    ),
    image: Module5.Slicer53,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div><span className="font-bold">Left click</span> on the  small arrow and left click on <span className="font-bold">“export to files”</span></div>
      ),
    image: Module5.Slicer54,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Each segment can be saved separately. If the <span className="font-bold">“Visible segments”</span> box is checked, hidden segments will not be saved.</div>
      ),
    image: Module5.Slicer55,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Checking the <span className="font-bold">“merge into a single file”</span> box will save the file one. Meaning the file will have two separate components but will be saved in relation to each other. This is advantageous when importing the file into another 3D software. If the box is <span className="font-bold">unchecked</span>, the components will be <span className="font-bold">saved as two separate files.</span></div>
      ),
    image: Module5.Slicer56,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>Left click on the <span className="font-bold">“export” button</span> to export the file into the destination folder.</div>
    ),
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
            href="/quiz/advance"
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
