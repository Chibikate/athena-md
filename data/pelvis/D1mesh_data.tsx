import * as D1 from "@/public/basic3D/D1";
import Link from "next/link";

export const MeshTutorial2 = [
  {
    title:
      "3D file manipulation, separating and fixing the fractured acetabulum in Meshmixer (Autodesk, San Rafael, California)",
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
                href="https://drive.google.com/drive/folders/1vu7eIYR-DXGZm0KrN8XzSK1sDx_4eQVI?usp=drive_link "
                target="_blank"
              >
                <span className=" underline">
                https://drive.google.com/drive/folders/1vu7eIYR-DXGZm0KrN8XzSK1sDx_4eQVI?usp=drive_link 
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
    description: (
      <div>
        Left click on the <span className="font-bold">import</span> icon on the
        homescreen or the toolbar.
      </div>
    ),
    image: D1.picture77,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description: (
      <div>
        Access the folder you saved your file in, left click on the file and
        left click on <span className="font-bold">open.</span>
      </div>
    ),
    image: D1.picture78,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description: (
      <div>
        After successfully loading the file, you should have the{" "}
        <span className="font-bold">3D object</span> in your screen.
      </div>
    ),
    image: D1.picture79,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description: (
      <div>
        To see the currently loaded objects, access the{" "}
        <span className="font-bold">Objects Browse</span>r through the drop down
        menu under view.
      </div>
    ),
    image: D1.picture80,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description: (
      <div>
        The <span className="font-bold">object browser</span> will show the available{" "}
        <span className="font-bold">3D object</span> currently open in the
        program. Currently, only 1 object is available.
      </div>
    ),
    image: D1.picture81,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description: (
      <div>
        To separate the Right Ilium, left click on the{" "}
        <span className="font-bold">Select</span> icon which will activate the
        <span className="font-bold">brush tool</span> and allow the user to{" "}
        <span className="font-bold">“paint”</span> or select any area of the 3D
        object. The <span className="font-bold">brush size</span> can be
        <span className="font-bold"> increased or decreased</span> by holding down the left mouse button and
        dragging the slider.
      </div>
    ),
    image: D1.picture82,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>To <span className="font-bold">select or “paint”</span> the area, press the <span className="font-bold">left mouse button</span> once. To continuously paint, <span className="font-bold">hold the left mouse button and drag the brush</span> over the desired area.</div>
      ),
    image: D1.picture83,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>To select the entire Right Ilium, paint any area of the pelvis using the brush tool and through the modify menu, select <span className="font-bold">“expand to connected”</span>. Alternatively, this can be done by pressing the hotkey <span className="font-bold">“E”</span> or simply <span className="font-bold">double clicking</span> on the left mouse button. The expand to connected function works by expanding the selected area to all the connected areas in an object. Since the Right Ilium has already been separated in 3D slicer, it is not <span className="font-bold">“connected”</span> to the rest of the pelvis.</div>
      ),
    image: D1.picture84,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>To make the Right Ilium as a separate object, access the separate option through the <span className="font-bold">edit menu</span>. This can also be done by typing the hotkey <span className="font-bold">“Y”</span></div>
      ),
    image: D1.picture85,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Once the Right Ilium has been separated, it will appear as a separate object in the <span className="font-bold">object browser</span>. The <span className="font-bold">highlighted object</span> in the object browser is the object that is currently <span className="font-bold">“active”</span>. It will show up as the white object in the screen and all changes will be made on that object. The <span className="font-bold">Objects can be renamed</span> by <span className="font-bold">double clicking</span> on the object name. Do the same for the other Parts.</div>
      ),
    image: D1.picture86,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Once the Right Ilium has been separated, it will appear as a separate object in the object browser. The objects can be <span className="font-bold">hidden</span> by <span className="font-bold">left clicking on the “visibility”</span> icon on the right.</div>
      ),
    image: D1.picture87,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div> <span className="font-bold">We can see that the posterior wall fracture fragment is on the</span> and <span className="font-bold">right side</span>. We can fix this “fracture” in place using the <span className="font-bold">"Transform"</span> function. Position the pelvis posteriorly.</div>
      ),
    image: D1.picture88,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Click select, and double click the fragment. Click Transform. The fragment can be rotated and manipulated to fix it in the fractured area.</div>
      ),
    image: D1.picture89,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>You can rotate the Whole model as needed by holding  <span className="font-bold">“Right Click and dragging the mouse ”</span> in the direction you want.</div>
      ),
    image: D1.picture90,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>You can freely position or drag the fragment by  <span className="font-bold">Left Clicking and holding the Red or Blue Triangle </span> and dragging it to the position you want.</div>
      ),
    image: D1.picture91,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Rotate the fragment as needed until near the configuration to <span className="font-bold"> “fix” </span> it to the right acetabulum .</div>
      ),
    image: D1.picture92,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Fit it to the Defect. To reduce and <span className="font-bold"> “fix” </span> the fracture fragment. Rotate the whole model to check good fracture reduction</div>
      ),
    image: D1.picture93,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Fit it to the Defect. To reduce and <span className="font-bold"> “fix” </span> the fracture fragment. Rotate the whole model to check good fracture reduction</div>
      ),
    image: D1.picture94,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Fit it to the Defect. To reduce and <span className="font-bold"> “fix” </span> the fracture fragment. Rotate the whole model to check good fracture reduction</div>
      ),
    image: D1.picture95,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>You can compare your reduction with an intact Ilium <span className="font-bold">Mirroring</span>  the Left Ilium to the Right Ilium. Select the <span className="font-bold">Left Ilium </span> in the  <span className="font-bold">Object Browser</span>. Select Edit and<span className="font-bold">“Mirror”</span>.</div>
      ),
    image: D1.picture96,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>This Creates a Mirror of the Left Ilium. For now, hide the  <span className="font-bold">"Right Ilium"</span> Select the mirror and separate it as another object by pressing <span className="font-bold"> "Y" </span> in the keyboard. This will create another object in Object Browser. We will rename it as <span className="font-bold">“LeftIlium Mirror”. </span></div>
      ),
    image: D1.picture97,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description: (
      <div>This Creates a Copy of the Left Ilium and deselects the original. We will rename it as <span className="font-bold"> “Left Illium Mirror” </span></div>
    ),
    image: D1.picture98,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Hide the original <span className="font-bold">“Left Ilium”</span> and select the <span className="font-bold">“LeftIlium Mirror”</span></div>
      ),
    image: D1.picture99,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Since the pelvis is still unreduced, we can manipulate the mirrored object to fix it, by Clicking <span className="font-bold">Transform</span></div>
      ),
    image: D1.picture100,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Same with the fragment reduction earlier, we will manipulate the Mirror to reduce the pelvis. Check in all Views to carefully assess the reduction.</div>
      ),
    image: D1.picture101,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Now show the <span className="font-bold">"Right Ilium"</span> and <span className="font-bold">"Fragment"</span> objects in the browser. </div>
      ),
    image: D1.picture102,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>This shows good overlap of the  <span className="font-bold">Left Ilium Mirror</span> the RightIlium and Fragment Objects.</div>
      ),
    image: D1.picture103,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>Once satisfied, make the object into a solid by clicking on the <span className="font-bold">“edit”</span> icon and clicking on <span className="font-bold">“make solid”</span>. This will <span className="font-bold">“fill” the object and remove any internal geometry</span> making it ready for 3D printing. Do this for every object you are planning to print. For this case, we are only printing the fragment and the Right Ilium</div>
      ),
    image: D1.picture104,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>We want our print to be as Accurate as possible, so click Accurate and adjust the Solid Accuracy Slider to Max. Do this for every object you want to print.</div>
      ),
    image: D1.picture105,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description: (
      <div>click on  <span className="font-bold">“accept”.</span></div>
    ),
    image: D1.picture106,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description:
      (
        <div>To save the object, click on <span className="font-bold">“file”</span> then <span className="font-bold">“export”</span> and save the Right Ilium into your desired folder. Congratulations! You have successfully fixed the fractured side as well as Compare it to a Mirrored normal side. This object can be used as a guide for pre-bending your Stainless Steel Recon plates. Although not a standalone process in Pelvic Surgery, this process shows the basics in fixation and manipulation of the Fractured Fragments in a 3D environment.</div>
      ),
    image: D1.picture107,
    alt: "illustration",
  },
  {
    title: "MeshMixer - Virtual-Surgery",
    description: (
      <div>
        <p>
          Congratulations, you've to finish the lesson. For you to get the
          certificate, take the{" "}
          <Link
            href="/quiz/meshmixer2"
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
