import * as E3 from "@/public/E3";
import Link from "next/link";
import Image from "next/image";
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
        <span className="font-bold text-lg"> Rotate: </span>This settings allow you to set the orientation of your model.
          In a rule of thumb, The flastest surface of your model must be layered flat to the build platform.</p>
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
        <span className="font-bold text-lg">Mirror Mode: </span>This settings allow just rotate the model like a mirror image.
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
        <span className="font-bold text-lg">Per Model Settings: </span>This settings allow set settings per model. 
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
        <span className="font-bold text-lg">Support Blocker: </span>This option will create a cube that you can scale and move anywhere around your model.
        Once this is set. The model inside the cube will block all the support that will generate once you slice the model. 
        </p>
      </div>
    ),
    image: Printing33,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Settings",
    description: (
      <div>
        <p>
        <span className="font-bold text-lg">Print/Extruder selection: </span>This option allows you to choose which Extruder will be using to print the model. 
        </p>
      </div>
    ),
    image: Printing34,
    alt: "",
  },

  {
    title: "Congratulations!",
    description: (
      <div className="flex flex-col space-y-4">
        <p>
          Well done on learning about the Model Settings in Ultimaker Cura! You now understand how to:
        </p>
        <p>
          These skills will help you prepare your mandible models for the best possible print quality.
        </p>
        <div className="flex justify-center mt-4">
          <Link 
            href="/quiz/printing3" 
            className="inline-flex items-center px-6 py-3 bg-[#043873] text-white font-medium rounded-lg hover:bg-[#0a4d8d] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <span>Take the Quiz</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <p className="text-sm text-gray-600 text-center mt-2">
          Complete the quiz to earn your certificate and continue your 3D printing journey
        </p>
      </div>
    ),
    image: null,
    alt: "",
  },
];