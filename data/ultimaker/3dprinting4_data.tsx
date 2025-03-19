import * as E4 from "@/public/E4";
import Link from "next/link";
import Printing35 from "@/public/E4/35.png";
import Printing36 from "@/public/E4/36.png";
import Printing37 from "@/public/E4/37.png";
import Printing38 from "@/public/E4/38.png";
import Printing39 from "@/public/E4/39.png";
import Printing40 from "@/public/E4/40.png";
import Printing41 from "@/public/E4/41.png";
import Printing42 from "@/public/E4/42.png";
import Printing43 from "@/public/E4/43.png";
import Printing44 from "@/public/E4/44.png";
import Printing45 from "@/public/E4/45.png";
import Printing46 from "@/public/E4/46.png";

export const printingTutorial4 = [
  {
    title: "Welcome to Ultimaker Cura: Module 4",
    description: (
      <div>
        <div className="flex flex-col items-center justify-center">
          <ul className=" space-y-2">
            <li>
            For today, I will show you the Options on the Print Settings.   
            </li>
          </ul>
        </div>
      </div>
    ),
    image:  Printing35,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Print Settings",
    description: (
      <div>
        {" "}
        <p>
        Click the
          <span className="font-bold text-lg">
          Print Settings
          </span>{" "}
          The rightmost button in the stage menu contains the print settings panel, which includes all settings that define the printing strategy. By default, it opens in the recommended mode. This mode is ideal if you want to do a quick print with optimized printing profiles. 
          There are a few parameters you can set
        </p>
      </div>
    ),
    image: Printing36,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Settings",
    description: (
      <div>
        <p>
        <li>Profiles – Preset option depending on the quality you want on your print. Settings will be pre defaulted according to the print profile you choose.</li>
        <li>Resolution – Choose the layer height quality. The options available depend on your printer configuration</li>
        <li>Recommended Print Settings – This is where we can see more than 200+ options to set on your model. (Please see Module 5 for this option.)</li>
        <li>Strength (Infill) – Where we set how strong our model we want to build. This option can set the percentage of infill, the pattern we want to build, and the thickness of the shell.</li>
        <li>Generate support – This will generate a support structure below overhanging parts of a model to prevent the model from sagging or printing mid-air.</li>
        <li>Build plate adhesion – Adds a brim or raft around the base of the model to ensure the print doesn’t detach from the build plate.</li>

        </p>
      </div>
    ),
    image: Printing37,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Profiles",
    description: (
      <div>
      </div>
    ),
    image: Printing38,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Profiles",
    description: (
      <div>
        <p>
        The layer height is one of the most frequently changed settings. It is the thickness of one printed layer in millimeters. With a thinner layer height, you can increase the quality of the print, leading to a smoother surface and more detail visible in the Z-direction (height) of the model. 
        On the other hand, by using thicker layers, you can decrease the print time substantially.
        </p>
      </div>
    ),
    image: Printing39,
    alt: "",
  },
  {
    title: "Strength: Infill Density",
    description: (
      <div>
      </div>
    ),
    image: Printing40,
    alt: "",
  },
  {
    title: "Strength: Shell Thickness",
    description: (
      <div>
      </div>
    ),
    image: Printing41,
    alt: "",
  },
  {
    title: "Support Button",
    description: (
      <div>
      </div>
    ),
    image: Printing42,
    alt: "",
  },
  {
    title: "",
    description: (
      <div>
        <p>
        What are supports?
An FDM 3D printer works by depositing layer over layer of thermoplastics to create a 3D object. Because of that, each new layer must be supported by the layer beneath it.
If your model has an overhang which is not supported by anything below, there’s a good chance it will drop or even fall, and you’ll need additional 3D printed support structures to ensure a successful print.

        </p>
      </div>
    ),
    image: Printing43,
    alt: "",
  },
  {
    title: "",
    description: (
      <div>
        <p>
        Not all overhangs need to be supported. The general rule of thumb is: if an overhang tilts at an angle less than 45 degrees from the vertical, then you may be able to print that overhang without using 3D printing support structures. Before you start printing models with overhangs, it is a good idea to get an idea of your printer’s ability to print the tamer overhangs.
        TIP: Each different 3D Printer model has different threshold angles where support will be needed

        </p>
      </div>
    ),
    image: Printing44,
    alt: "",
  },
  {
    title: "Adhesion Button",
    description: (
      <div>
      </div>
    ),
    image: Printing45,
    alt: "",
  },
  {
    title: "",
    description: (
      <div>
        <p>
        Congratulations, you already set the best settings for your model. For you to get the certificate, take the{" "}
            <Link href="/quiz/printing4"
              className="font-bold underline"
            >
              Quiz
            </Link>{" "}
        </p>
      </div>
    ),
    image: null,
    alt: "",
  },
];
