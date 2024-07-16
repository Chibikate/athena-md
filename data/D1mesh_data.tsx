import * as D1 from "@/public/basic3D/D1";
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
                href="https://drive.google.com/drive/folders/1742qADzEkJDJ-FBMINb89dR9A7L0fbc6"
                target="_blank"
              >
                <span className=" underline">
                https://drive.google.com/drive/folders/1uHn8Ozf8MmxCrG45Wsuy-kLPiMcoC1gV?fbclid=IwAR2sDCWMPkmXUNW6XvM95z63wzESKFvaoWQlBN-CrB2zn40OiuFilkHdRsA
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
    title: "",
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
    title: "",
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
    title: "",
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
    title: "",
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
    title: "",
    description: (
      <div>
        To separate the mandible, left click on the{" "}
        <span className="font-bold">Select</span> icon which will activate the
        <span className="font-bold">brush tool</span> and allow the user to{" "}
        <span className="font-bold">“paint”</span> or select any area of the 3D
        object. The <span className="font-bold">brush size</span> can be
        <span className="font-bold">increased or decreased</span> by holding down the left mouse button and
        dragging the slider.
      </div>
    ),
    image: D1.picture82,
    alt: "illustration",
  },
  {
    title: "",
    description: <div>The area highlighted in <span className="font-bold">dark grey</span> is the area of the brush.</div>,
    image: D1.picture83,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To <span className="font-bold">select or “paint”</span> the area, press the <span className="font-bold">left mouse button</span> once. To continuously paint, <span className="font-bold">hold the left mouse button and drag the brush</span> over the desired area.</div>
      ),
    image: D1.picture84,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To select the entire mandible, paint any area of the mandible using the brush tool and through the modify menu, select <span className="font-bold">“expand to connected”</span>. Alternatively, this can be done by pressing the hotkey <span className="font-bold">“E”</span> or simply <span className="font-bold">double clicking</span> on the left mouse button. The expand to connected function works by expanding the selected area to all the connected areas in an object. Since the mandible has already been separated in 3D slicer, it is not <span className="font-bold">“connected”</span> to the rest of the skull.</div>
      ),
    image: D1.picture85,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To make the mandible as a separate object, access the separate option through the <span className="font-bold">edit menu</span>. This can also be done by typing the hotkey <span className="font-bold">“Y”</span></div>
      ),
    image: D1.picture86,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Once the mandible has been separated, it will appear as a separate object in the <span className="font-bold">object browser</span>. The <span className="font-bold">highlighted object</span> in the object browser is the object that is currently <span className="font-bold">“active”</span>. It will show up as the white object in the screen and all changes will be made on that object. The <span className="font-bold">Objects can be renamed</span> by <span className="font-bold">double clicking</span> on the object name.</div>
      ),
    image: D1.picture87,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Once the mandible has been separated, it will appear as a separate object in the object browser. The Objects can be <span className="font-bold">renamed</span> by <span className="font-bold">double clicking</span> on the object name for this tutorial rename the object to <span className="font-bold">“skull”</span>. The objects can be <span className="font-bold">hidden</span> by <span className="font-bold">left clicking on the “visibility”</span> icon on the right.</div>
      ),
    image: D1.picture88,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div> <span className="font-bold">Hide the rest of the skull</span> and <span className="font-bold">leave only the mandible</span>. We can see that there is a <span className="font-bold">tumor</span> on the <span className="font-bold">right side</span> of the mandible. We can remove this tumor using the <span className="font-bold">plane cut</span> function. Position the mandible by clicking on the <span className="font-bold">“top”</span> area of the view cube.</div>
      ),
    image: D1.picture89,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>We can remove the tumor side of the mandible using the <span className="font-bold">“plane cut”</span> function.</div>
      ),
    image: D1.picture90,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>The <span className="font-bold">“plane cut”</span> function is active when a grid is visible over the screen.</div>
      ),
    image: D1.picture91,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To position the plane in the desired area, <span className="font-bold">hold down the left mouse</span> button and <span className="font-bold">drag downwards</span> through the middle of the mandible. The <span className="font-bold">red line</span> will show the area where the plane will be placed.</div>
      ),
    image: D1.picture92,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>After dragging the red line through the middle, release the left mouse button and the plane will by placed. Note the transparent area is the area that will be cut. To <span className="font-bold">switch</span> this to the other side, <span className="font-bold">left click on the blue arrow.</span></div>
      ),
    image: D1.picture93,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>You can choose to <span className="font-bold">remove one half or keep both halves</span> through the dropdown menu. For this tutorial, select <span className="font-bold">keep both.</span></div>
      ),
    image: D1.picture94,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>You can choose to move the plane by clicking on the <span className="font-bold">directional buttons and dragging</span> towards the desired area. <span className="font-bold">Rotating the plane</span> can also be done by clicking and dragging on the curved lines.</div>
      ),
    image: D1.picture95,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>For defects/tumors on one side of the mandible, position the plane slightly away from the middle towards the tumor side to allow for sufficient overlapping of the model during the next few steps. Once the position is sufficient, click on <span className="font-bold">accept.</span></div>
      ),
    image: D1.picture96,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div> <span className="font-bold">Select the normal half of the mandible</span> by double clicking using the <span className="font-bold">select tool</span> and separating using the <span className="font-bold">separate function</span> in the edit drop down menu, or simply use the hotkey <span className="font-bold">“Y”</span>.</div>
      ),
    image: D1.picture97,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Once Successfully separated, a third object will be available in the object browser. <span className="font-bold">Rename</span> the part to <span className="font-bold">mandiblenormal</span>. Rename the other part to <span className="font-bold">mandibletumor.</span></div>
      ),
    image: D1.picture98,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>Hide the mandibletumor object by clicking on the <span className="font-bold">“eye”</span> icon.</div>
    ),
    image: D1.picture99,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To <span className="font-bold">“reconstruct”</span> the missing half, select the mirror function under the <span className="font-bold">“edit”</span> icon.</div>
      ),
    image: D1.picture100,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>You can <span className="font-bold">mirror</span> the normal side of the mandible. It is important to not just reconstruct the missing side but also to make sure that it is in its <span className="font-bold">proper position.</span></div>
      ),
    image: D1.picture101,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To do this, <span className="font-bold">“show” the “skull”</span> object by clicking on the <span className="font-bold">“eye”</span> icon. Position the view to bottom via the view cube.</div>
      ),
    image: D1.picture102,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Take note of the position of the <span className="font-bold">condyles</span>. <span className="font-bold">Drag the blue</span> directional arrow until the left condyle is sitting in a similar position as the normal mandible.</div>
      ),
    image: D1.picture103,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>You can further <span className="font-bold">manipulate</span> the objects to fine-tune your reconstruction. <span className="font-bold">Once satisfied</span> with the position of the mirrored mandible, click <span className="font-bold">“accept”</span>.</div>
      ),
    image: D1.picture104,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>The position can be further confirmed by making the tumor side of the mandible visible and comparing the position of the condyle. This can only be done if the condyle in the tumor side is in its normal position. Very large tumors may displace the condyle away from its regular position and may serve as a good reference.</div>
      ),
    image: D1.picture105,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>Once satisfied, make the object into a solid by clicking on the <span className="font-bold">“edit”</span> icon and clicking on <span className="font-bold">“make solid”</span>. This will <span className="font-bold">“fill” the object and remove any internal geometry</span> making it ready for 3D printing.</div>
      ),
    image: D1.picture106,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>Use the default settings and click on  <span className="font-bold">“accept”.</span></div>
    ),
    image: D1.picture107,
    alt: "illustration",
  },
  {
    title: "",
    description:
      (
        <div>To save the object, click on <span className="font-bold">“file”</span> then <span className="font-bold">“export”</span> and save the mandible into your desired folder. Congratulations! You have successfully removed the tumor side as well as reconstructed the mandible. This object can be used as a guide for pre-bending titanium implants. Although not a standalone process in mandibular reconstruction, this process shows the basics in extraction and manipulation of the mandible in a 3D environment.</div>
      ),
    image: D1.picture108,
    alt: "illustration",
  },
  {
    title: "",
    description: (
      <div>
        <p>
          Congratulations, you've to finish the lesson. For you to get the
          certificate, take the{" "}
          <Link
            href="https://athena-md.vercel.app/quiz/meshmixer"
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
