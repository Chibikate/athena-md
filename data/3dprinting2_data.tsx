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
    title: "Ultimaker Cura: Navigation Tools",
    description: (
      <div>
        <p>
        <li>8. Action panel – Contains an action button dependent on the current stage.</li>
        <li>9. Print over network – Allows you to print over network, save gcode to removable disk or save to file.</li>
        <li>10. Preview – Proceeds to the next stage, the preview stage
        </li>
        </p>
      </div>
    ),
    image: Printing7,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Navigation Tools",
    description: (
      <div>
        <p>
        <li>11. Camera position tool – Easily positions the camera to default viewing angles.</li>
        <li>12. Model information – Contains the model name and dimensions of all printable models on the build plate.</li>
        <li>13. Model Settings – Contains all settings you can do on your model to fit into the build platform of the tour printer. This will only highlight once the model is selected</li>
        </p>
      </div>
    ),
    image: Printing7,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        <li><span className="font-bold text-lg">Open 3D Files</span></li>
        The easiest way to open 3D models is by the ‘Open file’ button. The button is in the top left corner and is the first button in the stage menu. 
        Select the model you want to prepare for printing and open it. The model will now be loaded and shown on the 3D viewer.</p>
      </div>
    ),
    image: Printing8,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        <li><span className="font-bold text-lg">Alternative Tip:</span></li>
        Click and drag to CURA interface</p>
      </div>
    ),
    image: Printing9,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        <li><span className="font-bold text-lg">Alternative Tip:</span></li>
        Click and drag to CURA interface</p>
      </div>
    ),
    image: Printing10,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Object List",
    description: (
      <div>
        <p>
        Once model is loaded. You will able to see in the object list the file name and the dimension of the model.</p>
      </div>
    ),
    image: Printing11,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        This is where we select the printer we want to use to print the model. Since Ultimaker Cura is open-source software. 
        We can also use any other 3D printer brand included in this software.</p>
      </div>
    ),
    image: Printing12,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        What we need to do is to select the “Add printer icon”</p>
      </div>
    ),
    image: Printing13,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        Select “Ultimaker printer” </p>
      </div>
    ),
    image: Printing14,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        Select “Add local Printer”  </p>
      </div>
    ),
    image: Printing15,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        <li><span className="font-bold text-lg">There are 3 ways to add printers on Ultimaker Software.</span></li>
        <li>1. Add a networked printer.</li>
        <li>2. Add printer by IP.</li>
        <li>3. Add a non – Networked printer.</li></p></div>
    ),
    image: Printing16,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        Once your machine and your PC are connected into one network, you will be able to see the unit in the networked printer section</p>
      </div>
    ),
    image: Printing17,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        Alternative way is to add the printer's IP address. Once your Ultimaker is connected to a network, The printer will produce an IP address that you can connect to print models remotely. </p>
      </div>
    ),
    image: Printing18,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p>
        <li><span className="font-bold text-lg">Adding a non-networked printer is one way to print offline.You just need to do the following:</span></li>
        <li>1. Select the printer to be used</li>
        <li>2.The click the “Add” icon to appear on the User interface. </li></p></div>
    ),
    image: Printing19,
    alt: "",
  },
  {
    title: "Slicing: Ultimaker CURA",
    description: (
      <div>
        <p>
        Once you select the printer you will be able to see on the user interface the Machine you selected.</p>
      </div>
    ),
    image: Printing20,
    alt: "",
  },
  {
    title: "Ultimaker Cura: Model Selection",
    description: (
      <div>
        <p><li><span className="font-bold text-lg">Configure your Setup</span></li>
        <li>Network-enabled printers will indicate a valid connection with a checkmark icon. Select the printer you would like to use.
        </li>
        <li>Click on the configuration panel. Once opened, the panel displays your current print core/nozzle and material setup.</li>
        <li>Network-enabled printers will display available configurations in your printer group. Non-network enabled printers need to be configured manually.
        </li></p>
      </div>
    ),
    image: Printing21,
    alt: "",
  },
  {
    title: "Slicing: Ultimaker CURA",
    description: (
      <div>
        <p>
        Ultimaker S series are printers with dual extruders. Just need to click either 1 or 2 to configure the material and printcore installed on the machine.
You can Enable or Disable an extruder, but this is not necessary once we select the extruder.</p>
      </div>
    ),
    image: Printing22,
    alt: "",
  },
  {
    title: "Slicing: Ultimaker CURA",
    description: (
      <div>
        <p>Ultimaker 3D printers have different settings in different materials that are optimized for each. For us users to have the best quality and successful print.
        <li>You can choose from Ultimaker material to Generic material if you are using non-Ultimaker brand filaments.</li></p>
      </div>
    ),
    image: Printing23,
    alt: "",
  },
  {
    title: "Slicing: Ultimaker CURA",
    description: (
      <div>
        <p>This option is where we will select the Printcore we are about to use to print our model. 
        <li>Note: AA 0.4 is the default printcore and this will be used to print this model. </li></p>
      </div>
    ),
    image: Printing24,
    alt: "",
  },
  {
    title: "Slicing: Ultimaker CURA",
    description: (
      <div>
        <p>Once you are done with the configuration of the material and the printcore the Interface should look like this.
        <li>You were able to see the Material and the printcore you are about to use.</li></p>
      </div>
    ),
    image: Printing25,
    alt: "",
  },
  {
    title: "Slicing: Ultimaker CURA",
    description: (
      <div>
        <p>This option is where we will select the Printcore we are about to use to print our model. 
        <li>Note: AA 0.4 is the default printcore and this will be used to print this model. </li></p>
      </div>
    ),
    image: Printing26,
    alt: "",
  },
  {
    title: "",
    description: (
      <div>
        <p>
        Congratulations on learning the different features of the software.For you to get the certificate, take the{" "}
            <Link href=""
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
