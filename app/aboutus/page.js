import React from "react";
import { Delius } from "next/font/google";
import Image6 from "@/public/Image6.png";
import Image from "next/image";
import Navigator from "../navigator";

const delius = Delius({ subsets: ["latin"], weight: "400" });

const Aboutus = () => {
  return (
    <div
      className={`flex flex-col dark:text-primary ${delius.className} bg-[#1c1648] text-white`}
    >
      <Navigator />
      <div className="area">
        <div className="area ">
          <ul className="circles ">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-10 items-center justify-center text-center text-sm sm:text-lg ">
        <p>
          At Web-based Tutorial System, we&apos;re on a mission to make learning
          accessible and enjoyable for everyone. Our team is dedicated to
          creating a user-friendly platform where learning is interactive and
          engaging. We believe that education should be fun and inspiring, and
          that&apos;s why we&apos;re committed to providing a diverse range of
          courses and resources. Whether you&apos;re a student looking to expand
          your knowledge, a teacher seeking innovative teaching tools, or simply
          curious about new topics, Web-based Tutoiral system, is here to
          empower you on your learning journey. Join us and explore the exciting
          world of learning today!
        </p>
      </div>
      <p className="font-bold text-4xl pt-10 text-center text-[#ffc248]">
        THE TEAM
      </p>
      <div className="flex justify-center invert">
        <Image
          alt="somethings never change"
          src={Image6}
          width={200}
          height={100}
        />
      </div>
      <div className="flex flex-col sm:flex-row  justify-between p-4 text-center">
        <p className="pl-3">
          Lemuel Clark Velasco <br />{" "}
          <span className="font-bold text-sm text-[#ffc248]">
            Project Leader
          </span>
        </p>

        <div>
          <p>
            Rentor Cafino, <br /> MD, DPBO-HNS
            <br />
            <span className="font-semibold text-sm text-[#ffc248]">
              {" "}
              Content Developer{" "}
            </span>
          </p>
        </div>
        <div>
          <p>
            Armando T. Isla, <br /> MD, FPSO-HNS
            <br />
            <span className="font-semibold text-sm text-[#ffc248]">
              {" "}
              Medical Consultant{" "}
            </span>
          </p>
        </div>

        <p>
          Kaye Q. Velarde <br />{" "}
          <span className="font-bold pb-4 text-sm text-[#ffc248]">
            Pedagogy Manager
          </span>
        </p>

        <p>
          Queenie Kate S. Cabanilla <br />{" "}
          <span className="font-bold pb-4 text-sm text-[#ffc248]">
            Web Developer
          </span>
        </p>
      </div>
      <div className="pt-4 text-center x-4 ">
        <p className="py-2 ">
          If you have any questions, concerns, or feedback, please feel free to
          reach out to our dedicated team.
          <br /> We&apos;re here to assist you, and your input is valuable to
          us.
        </p>
        <div className=" py-4 items-center text-center ">
          <div className="flex flex-col text-center ">
            <p className=" font-bold text-[#ffc248]">Email</p>
          </div>

          <div className="text-center hover-border-white-400 hover-border-2">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5l9 4-9 4-9-4 9-4zm0 0v6"
                />
              </svg>
              queeniekate.cabanilla@g.msuiit.edu.ph
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5l9 4-9 4-9-4 9-4zm0 0v6"
                />
              </svg>
              kaye.velarde@g.msuiit.edu.ph
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
