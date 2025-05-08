import * as C5 from "@/public/basic3D/C5";
import Link from "next/link";
import * as course from "@/public/course";

export const slicerTutorial10 = [
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description: (
      <div>
        Make sure to <span className="font-bold">install</span> your downloaded{" "}
        <span className="font-bold">3D slicer software</span> before you start
        the lesson.
        <p>You can find it in the Pelvis 3D interface (C-1).</p>
      </div>
    ),
    image: C5.picture49,
    alt: "",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div><span className="font-bold">Open 3D Slicer</span> and <span className="font-bold">Add DICOM data</span> through the add DICOM data button.</div>
      ),
    image: C5.picture50,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Select the preferred dataset and left click on the <span className="font-bold">import button.</span></div>
      ),
    image: C5.picture51,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div><span className="font-bold">Left click</span> on the imported dataset and left click on the <span className="font-bold">load button.</span></div>
      ),
    image: C5.picture52,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div><span className="font-bold">Left click</span> on the module dropdown box to access the different modules.</div>
      ),
    image: C5.picture53,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Left click on <span className="font-bold">Segment Editor.</span></div>
      ),
    image: C5.picture54,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Add a <span className="font-bold">“segment”</span> by left clicking on the <span className="font-bold">“add”</span> button. <span className="font-bold">Do this twice.</span></div>
      ),
    image: C5.picture55,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description: (
      <div><span className="font-bold">Rename</span> the right segment to <span className="font-bold">“Right Ilium”</span> and the left segment to <span className="font-bold">“Left Ilium”</span>. These segments will represent the structures we will isolate. Changing the colors of each segment into contrasting colors will help improve visualization of the different areas of segmentation.</div>
    ),
    image: C5.picture56,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Access the <span className="font-bold">“threshold”</span> function by <span className="font-bold">left clicking</span> on the <span className="font-bold">“threshold”</span> button.</div>
      ),
    image: C5.picture57,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div><span className="font-bold">Left click and drag</span> the slider button until the desired threshold intensity is achieved. Click on <span className="font-bold">“use for masking”.</span></div>
      ),
    image: C5.picture58,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Clicking on <span className="font-bold">“use for  masking”</span> will automatically activate the <span className="font-bold">“paint”</span> function. This will allow the user to <span className="font-bold">“paint” any area</span> using the previously selected threshold intensity.</div>
      ),
    image: C5.picture59,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>The <span className="font-bold">diameter of the brush</span> can be changed by <span className="font-bold">holding down the left mouse button</span> and <span className="font-bold">dragging the slider</span> until the desired diameter is reached. Alternatively, the user can select any preset brush diameter available.</div>
      ),
    image: C5.picture60,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Using the <span className="font-bold">middle mouse scroll wheel</span>, adjust the <span className="font-bold">image views</span> so that the right and left ilium, the fragment and sacrum are together in one image. Perform this action for all windows.</div>
      ),
    image: C5.picture61,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Make sure the <span className="font-bold">“Right Ilium”</span> segment is selected by <span className="font-bold">left clicking on it</span>. Using the paint function, <span className="font-bold">“paint”</span> areas of the Pelvis that are near the mandible.Do the same for the “Left Ilium”</div>
      ),
    image: C5.picture62,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div><span className="font-bold">Left click</span> on the <span className="font-bold">“Sacrum”</span> segment to activate it, then <span className="font-bold">“paint”</span> the sacrum using the <span className="font-bold">paint function</span>.Do this also for the “Fragment”. Make sure that the highlighted areas do not overlap. This can be done in different slices to ensure higher accuracy. Attention should be placed where both structures <span className="font-bold">(sacroiliac joint, acetabulum and hip joint) </span> overlap.</div>
      ),
    image: C5.picture63,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>If satisfied with the highlighted areas, <span className="font-bold">Left click on the “grow from seeds” function.</span></div>
      ),
    image: C5.picture64,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>To start the grow from seeds function, <span className="font-bold">left click on “initialize”</span>.</div>
      ),
    image: C5.picture65,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Once the initialization process is complete, <span className="font-bold">left click on the “show 3D” button</span> to preview the 3D model.</div>
      ),
    image: C5.picture66,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>To increase the opacity of the 3D model preview.</div>
      ),
    image: C5.picture67,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>With structures that have overlapping areas, segmentation tends to be less precise. This can be refined further by further <span className="font-bold">painting the overlapping areas.</span></div>
      ),
    image: C5.picture68,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div><span className="font-bold">Selecting the “Right Ilium”</span> or <span className="font-bold">“Sacrum”</span> segments and painting the overlapping areas respectively will automatically update the preview.</div>
      ),
    image: C5.picture69,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>When satisfied with the result, <span className="font-bold">left click</span> on the <span className="font-bold">“apply”</span> button. </div>
      ),
    image: C5.picture70,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Click on <span className="font-bold">“show 3D”</span> to show the final 3D image.</div>
      ),
    image: C5.picture71,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description: (
      <div>Clicking on the small <span className="font-bold">“eye”</span> icon will show or hide the segment.</div>
    ),
    image: C5.picture72,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div><span className="font-bold">Left click</span> on the  small arrow and left click on <span className="font-bold">“export to files”</span></div>
      ),
    image: C5.picture73,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Each segment can be saved separately. If the <span className="font-bold">“Visible segments”</span> box is checked, hidden segments will not be saved.</div>
      ),
    image: C5.picture74,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description:
      (
        <div>Checking the <span className="font-bold">“merge into a single file”</span> box will save the file one. Meaning the file will have two separate components but will be saved in relation to each other. This is advantageous when importing the file into another 3D software. If the box is <span className="font-bold">unchecked</span>, the components will be <span className="font-bold">saved as two separate files.</span></div>
      ),
    image: C5.picture75,
    alt: "illustration",
  },
  {
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description: (
      <div>Left click on the <span className="font-bold">“export” button</span> to export the file into the destination folder.</div>
    ),
    image: C5.picture76,
    alt: "illustration",
  },
  {
    title: "Congratulations!",
    description: (
      <div className="flex flex-col space-y-4">
        <p>
          Outstanding work! You've mastered advanced segmentation techniques for pelvic modeling. You now know how to:
        </p>
        <p>
          These advanced skills enable you to create highly accurate and anatomically correct 3D models for surgical planning, education, and medical device design.
        </p>
        <div className="flex justify-center mt-6">
          <Link 
            href="/quiz/pelvis_advanced" 
            className="inline-flex items-center px-6 py-3 bg-[#043873] text-white font-medium rounded-lg hover:bg-[#0a4d8d] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <span>Take the Quiz</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <p className="text-sm text-gray-600 text-center mt-2">
          Complete the quiz to earn your certificate and master pelvis modeling techniques
        </p>
      </div>
    ),
    image: null,
    alt: "",
  },
];
