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
    title: "Congratulations!",
    description: (
      <div className="flex flex-col space-y-4">
        <p>
          Great job downloading and installing the Ultimaker Cura software! You've completed the first step toward 3D printing your mandible models.
        </p>
        <p>
          In the next module, we will explore the features of the software and show you how to prepare your models for printing.
        </p>
        <div className="flex justify-center mt-4">
          <Link 
            href="/ultimaker/3D%20Printing%20for%20a%20Mandible-2" 
            className="inline-flex items-center px-6 py-3 bg-[#043873] text-white font-medium rounded-lg hover:bg-[#0a4d8d] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <span>Continue to Next Module</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <p className="text-sm text-gray-600 text-center mt-2">
          Module 2: Exploring Ultimaker Cura Features
        </p>
      </div>
    ),
    image: null,
    alt: "",
  },
];
