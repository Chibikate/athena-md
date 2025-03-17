import React from "react";
import { Delius } from "next/font/google";
import Image6 from "@/public/Image6.png";
import Image from "next/image";
import About from "@/public/About.png";
import Navigator from "../navigator";
import ProfileCard from "@/components/aboutus/about_card";
import AboutSection from "@/components/aboutus/about_section";
import Link from "next/link";
import Footer from "@/components/hero_page/footer";

// const delius = Delius({ subsets: ["latin"], weight: "400" });

// ${delius.className}
const Aboutus = () => {
  return (
    <div
      className={`flex flex-col dark:text-primary  bg-[#e3f3ff] text-[#043873]`}
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

      <div className="flex flex-col  lg:flex-row items-center justify-center gap-8 py-16 w-[80%] mx-auto ">
        <p className="font-bold text-4xl text-left text-[#043873] leading-snug lg:basis-1/3 ">
          Helping <br /> individuals <br /> advance their <br /> skills
        </p>
        <Image
          alt="somethings never change"
          src={About}
          width={700}
          height={200}
          className="rounded-lg lg:basis-2/3"
        />
      </div>
      <div className="bg-white pt-16">
        <p className="text-center font-bold text-[#151A40] text-3xl">
          About Us
        </p>
        <div className="flex flex-row sm:flex-col py-10 items-center justify-center text-center text-sm sm:text-lg  text-[#165388]">
          <p>
            At Web-based Tutorial System, we&apos;re on a mission to make
            learning accessible and enjoyable for everyone. Our team is
            dedicated to creating a user-friendly <br />
            platform where learning is interactive and engaging.
          </p>
          <p className="pt-4">
            We believe that education should be fun and inspiring, and
            that&apos;s why we&apos;re committed to providing a diverse range of{" "}
            <br />
            courses and resources.
          </p>
          <p className="pt-4">
            Whether you&apos;re a student looking to expand your knowledge, a
            teacher seeking innovative teaching tools, <br />
            or simply curious about new topics, Web-based Tutorial System is
            here to empower you on your learning journey.
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold text-4xl pt-10 text-center text-[#043873]">
            OUR TEAM
          </p>
          <p>
            Our team consists of professionals from different parts of Mindanao.
             
          </p>
        </div>
      </div>
      <AboutSection />
      {/* <div className="flex flex-col sm:flex-row  justify-between p-4 text-center">
        <p className="pl-3">
          Lemuel Clark Velasco <br />{" "}
          <span className="font-bold text-sm text-[#043873]">
            Project Leader
          </span>
        </p>

        <div>
          <p>
            Rentor Cafino, <br /> MD, DPBO-HNS
            <br />
            <span className="font-semibold text-sm text-[#043873]">
              {" "}
              Medical Adviser{" "}
            </span>
          </p>
        </div>
        <div>
          <p>
            Armando T. Isla, <br /> MD, FPSO-HNS
            <br />
            <span className="font-semibold text-sm text-[#043873]">
              {" "}
              Medical Adviser{" "}
            </span>
          </p>
        </div>

        <p>
          Kaye Q. Velarde <br /> Dianne Mel B. Arrubio <br />{" "}
          <span className="font-bold pb-4 text-sm text-[#043873]">
            Pedagogy Managers
          </span>
        </p>

        <p>
          Queenie Kate S. Cabanilla <br /> Zyrene Belle B. Alturas <br />{" "}
          <span className="font-bold pb-4 text-sm text-[#043873]">
            Web Developers
          </span>
        </p>
      </div>
      {/* <div className="pt-4 text-center x-4 "> */}
      {/* <p className="py-2 ">
          If you have any questions, concerns, or feedback, please feel free to
          reach out to our dedicated team.
          <br /> We&apos;re here to assist you, and your input is valuable to
          us.
        </p>
        <div className=" py-4 items-center text-center ">
          <div className="flex flex-col text-center ">
            <p className=" font-bold text-[#043873]">Email</p>
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
              zyrenebelle.alturas@g.msuiit.edu.ph
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
              diannemel.arrubio@g.msuiit.edu.ph
            </p>
          </div>
        </div>
      </div> */}
      <div className="text-center p-4">
        <p className="text-[#151A40] text-xl font-bold">Learn with AthenaMD for free!</p>
        <p>Join us and explore the exciting world of learning today!</p>
        <Link href="main_homepage">
            <button className="mt-6 pt-[10px] bg-blue px-5 py-2  bg-[#043873] hover:text-[#ffffff]-900 text-white hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-300 text-sm rounded-lg hover:bg-[#0f1330]">
              View Courses
            </button>
          </Link>
      </div>
      <Footer />
    </div>
    
  );
};

export default Aboutus;
