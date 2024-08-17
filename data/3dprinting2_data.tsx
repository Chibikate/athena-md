import * as E2 from "@/public/E2";
import Link from "next/link";
import Printing4 from "@/public/E2/4.png";
import Printing5 from "@/public/E2/5.png";
import Printing6 from "@/public/E2/6.png";
import Printing7 from "@/public/E2/7.png";
import Printing8 from "@/public/E2/8.png";
import Printing9 from "@/public/E2/9.png";
import Printing10 from "@/public/E2/10.png";
import Printing11 from "@/public/E2/11.png";
import Printing12 from "@/public/E2/12.png";
import Printing13 from "@/public/E2/13.png";
import Printing14 from "@/public/E2/14.png";
import Printing15 from "@/public/E2/15.png";
import Printing16 from "@/public/E2/16.png";
import Printing17 from "@/public/E2/17.png";
import Printing18 from "@/public/E2/18.png";
import Printing19 from "@/public/E2/19.png";
import Printing20 from "@/public/E2/20.png";
import Printing21 from "@/public/E2/21.png";
import Printing22 from "@/public/E2/22.png";
import Printing23 from "@/public/E2/23.png";
import Printing24 from "@/public/E2/24.png";
import Printing25 from "@/public/E2/25.png";
import Printing26 from "@/public/E2/26.png";



export const printingTutorial2 = [
  {
    title: "Welcome to Ultimaker Cura. ",
    description: (
      <div>
        <div className="flex flex-col items-center justify-center">
          <ul className=" space-y-2">
            <li>
              For today, I will show you the features of this software.
            </li>
          </ul>
        </div>
      </div>
    ),
    image:  Printing4,
    alt: "",
  },
  {
    title: "",
    description: (
      <div>
        {" "}
        <p>
          For today, I will show you the features of this software.
        </p>
      </div>
    ),
    image: Printing5,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Navigation Tools",
    description: (
      <div>
        <p>
        <li>1. Open file – Opens a 3D file.</li>
        <li>2. Printer selection panel – Displays the selected printer.</li>
        <li>3. Configuration panel – Contains the material and print core setup.</li>
        <li>4. Stages – The Prepare, Preview and Monitor stage. Each stage is arranged to efficiently go through each 3D printing step.</li>

        </p>
      </div>
    ),
    image: Printing6,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Navigation Tools",
    description: (
      <div>
        <p>
        <li>5. Print settings panel – Contains all the slice strategy parameters.</li>
        <li>6. Marketplace – Contains plugins and material packages.</li>
        <li>7. Ultimaker account – Allows access to cloud functionality, Marketplace plugins and print profiles, backups and more.</li>
        </p>
      </div>
    ),
    image: Printing6,
    alt: "",
  },
  {
    title: "",
    description: (
      <div>
        <p>
        Congratulations on downloading the Ultimaker Cura software. On the next module, 
        we will discuss the features of the software.{" "}         
          <Link href="" className="font-bold underline">
            Next Module
          </Link>{" "}
        </p>
      </div>
    ),
    image: null,
    alt: "",
  },
  
];
