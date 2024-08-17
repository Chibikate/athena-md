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
    image:  Printing27,
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
    image: Printing28,
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
    image: Printing29,
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
    image: Printing30,
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
    image: Printing31,
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
    image: Printing32,
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
    image: Printing33,
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
    image: Printing34,
    alt: "",
  },
];
