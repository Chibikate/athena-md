import * as E3 from "@/public/E3";
import Link from "next/link";
import Printing27 from "@/public/E3/27.png";
import Printing28 from "@/public/E3/28.png";
import Printing29 from "@/public/E3/29.png";
import Printing30 from "@/public/E3/30.png";
import Printing31 from "@/public/E3/31.png";
import Printing32 from "@/public/E3/32.png";
import Printing33 from "@/public/E3/33.png";
import Printing34 from "@/public/E3/34.png";

export const printingTutorial3 = [
  {
    title: "Welcome to Ultimaker Cura: Module 3",
    description: (
      <div>
        <div className="flex flex-col items-center justify-center">
          <ul className=" space-y-2">
            <li>
            For today, I will show you the Options on the Model Settings. 
            </li>
          </ul>
        </div>
      </div>
    ),
    image:  Printing27,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Settings",
    description: (
      <div>
     <span className="font-bold text-lg"> Move: </span>
     <p>This settings allow you to move the model in Cartesian coordinates. The number you will see are the exact coordinate of your model. </p>
      </div>
    ),
    image: Printing28,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Settings",
    description: (
      <div>
        <p>
       <span className="font-bold text-lg"> Scale:</span>This settings allow you to adjust the Size of your model.
        You can adjust scale in percentage or in actual size in metric. 
        </p>
      </div>
    ),
    image: Printing29,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Settings",
    description: (
      <div>
        <p>
        <span className="font-bold text-lg"> Rotate: </span>This settings allow you to set the orientation of your model
          In a rule of thumb, The flastest surface of your model must be layered flat to the build platform.
        </p>
      </div>
    ),
    image: Printing30,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Settings",
    description: (
      <div>
        <p>
        Mirror Mode: This settings allow just rotate the model like a mirror image
        If you click the arrow it will move according to the placement of the arrow.
        </p>
      </div>
    ),
    image: Printing31,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Settings",
    description: (
      <div>
        <p>
        Per Model Settings: This settings allow set settings per model. 
        </p>
      </div>
    ),
    image: Printing32,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Settings",
    description: (
      <div>
        <p>
        Support Blocker: This option will create a cube that you can scale and move anywhere around your model.
        Once this is set. The model inside the cube will block all the support that will generate once you slice the model. 
        </p>
      </div>
    ),
    image: Printing33,
    alt: "",
  },
  {
    title: "",
    description: (
      <div>
        <p>
        Congratulations you already set your model on the best placement. For you to get the certificate, take the{" "}
            <Link href="/quiz/3dprinting3"
              className="font-bold underline"
            >
              Quiz
            </Link>{" "}
        </p>
      </div>
    ),
    image: Printing34,
    alt: "",
  },
];
