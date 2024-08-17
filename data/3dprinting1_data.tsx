import * as E1 from "@/public/E1";
import Link from "next/link";
import Printing1 from "@/public/E1/1.png";
import Printing2 from "@/public/E1/2.png";
import Printing3 from "@/public/E1/3.png";

export const printingTutorial1 = [
  {
    title: "Introduction of Ultimaker Cura",
    description: (
      <div>
        <div className="flex flex-col items-center justify-center">
          <ul className=" space-y-2">
            <li>
              <span className="font-semibold pb-4">
                Download Ultimaker Cura {" "}
              </span>
              <Link
                href="  https://ultimaker.com/software/ultimaker-cura/"
                className="underline"
                target="_blank"
              >
                 https://ultimaker.com/software/ultimaker-cura/
              </Link>
              <p className="ml-6">Available in Windows, macOS and Linux </p>
            </li>
          </ul>
        </div>
      </div>
    ),
    image:  Printing1,
    alt: "",
  },
  {
    title: "",
    description: (
      <div>
        {" "}
        <p>
        Click the
          <span className="font-bold text-lg">
          “Download for free icon”
          </span>{" "}
           to get the latest version. Select the version according to the OS you are using.
        </p>
      </div>
    ),
    image: Printing2,
    alt: "",
  },
  {
    title: "",
    description: (
      <div>
        <p>
        Once download is done. You can proceed to install the application. 
        Once you reach this part, this mean the software is ready to launch.
        </p>
      </div>
    ),
    image: Printing3,
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
