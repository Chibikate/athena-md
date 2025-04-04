import * as C3 from "@/public/basic3D/C3";
import Link from "next/link";

export const slicerTutorial8 = [
    {
        title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
        description: (
            <div>
              Make sure to <span className="font-bold">install</span> your downloaded{" "}
              <span className="font-bold">3D slicer software</span> before you start
              the lesson.
              <p>You can find it in the 3D interface (C-1).</p>
            </div>
          ),
          image: C3.picture12,
          alt: "",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description:
            (
              <div>The <span className="font-bold">middle mouse button</span> can be used to scroll through the DICOM files. <span className="font-bold">Hovering the mouse pointer</span> over a window will <span className="font-bold">“select”</span> the window and activate the function.</div>
            ),
          image: C3.picture13,
          alt: "illustration",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description:
            (
              <div>
                Alternatively, <span className="font-bold">holding down the left mouse button </span>with the cursor on the slider button and <span className="font-bold">dragging</span> will also allow the user to scroll through the DICOM files. 
              </div>
            ),
          image: C3.picture14,
          alt: "illustration",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description:
            (
              <div>Quickly tapping the left mouse button twice <span className="font-bold">(double click) </span>will maximize the selected window.</div>
            ),
          image: C3.picture15,
          alt: "illustration",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description:
            (
              <div><span className="font-bold">Double clicking again</span> will return the window to its original size. This function can be utilized for all the windows in the DICOM display.</div>
            ),
          image: C3.picture16,
          alt: "illustration",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description:
            (
              <div><span className="font-bold">Holding down the right mouse</span> button while dragging downwards will zoom in the image. <span className="font-bold">Dragging upwards</span> will zoom out.</div>
            ),
          image: C3.picture17,
          alt: "illustration",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description:
            (
              <div>On the <span className="font-bold">3D panel (blue) holding the left mouse button while dragging</span> will allow the user to move the 3D object around.</div>
            ),
          image: C3.picture19,
          alt: "illustration",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description:
            (
              <div><span className="font-bold">Scrolling upwards</span> using the middle mouse button will zoom in on the 3D model. <span className="font-bold">Scrolling downwards</span> will zoom out.</div>
            ),
          image: C3.picture20,
          alt: "illustration",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description:
            (
              <div><span className="font-bold">Holding down</span> the middle mouse button and <span className="font-bold">dragging</span> will pan the 3D image.</div>
            ),
          image: C3.picture21,
          alt: "illustration",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description:
            (
              <div>Alternatively, <span className="font-bold">holding down the right mouse button while dragging upwards</span> will zoom in on the 3D model. Dragging downwards will zoom out.</div>
            ),
          image: C3.picture22,
          alt: "illustration",
        },
        {
          title: "3D Modeling Pelvis - Navigating DICOM (C-3)",
          description: (
            <div>
              <p>
                Congratulations, you've able to finish the lesson. For you to get the
                certificate, take the{" "}
                <Link
                  href="/quiz/pelvis_navigate"
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