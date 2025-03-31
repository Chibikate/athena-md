import React from "react";
import { Delius } from "next/font/google";
import Image from "next/image";
import About from "@/public/about.png";
import Navigator from "../navigator";
import AboutSection from "@/components/aboutus/about_section";
import Link from "next/link";
import Footer from "@/components/hero_page/footer";

const delius = Delius({ subsets: ["latin"], weight: "400" });

const Aboutus = () => {
  return (
    <div
      className={`flex flex-col dark:text-primary bg-[#e3f3ff] text-[#043873] min-h-screen ${delius.className}`}
    >
      <Navigator />
      <div className="area relative">
        <div className="area absolute inset-0 overflow-hidden">
          <ul className="circles">
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

      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16 w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-left text-[#043873] leading-snug lg:basis-1/3 mb-6 lg:mb-0">
          Helping individuals <br /> advance their <br /> skills
        </h1>
        <div className="lg:basis-2/3 w-full">
          <Image
            alt="somethings never change"
            src={About}
            width={700}
            height={200}
            className="rounded-lg w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
      
      <div className="bg-white pt-8 sm:pt-12 lg:pt-16">
        <h2 className="text-center font-bold text-[#151A40] text-2xl sm:text-3xl mb-6">
          About Us
        </h2>
        <div className="flex flex-col py-4 sm:py-6 lg:py-10 items-center justify-center text-center px-4 sm:px-8 lg:px-16">
          <p className="text-sm sm:text-base lg:text-lg text-[#165388] max-w-4xl">
            At Web-based Tutorial System, we&apos;re on a mission to make
            learning accessible and enjoyable for everyone. Our team is
            dedicated to creating a user-friendly platform where learning is interactive and engaging.
          </p>
          <p className="pt-4 text-sm sm:text-base lg:text-lg text-[#165388] max-w-4xl">
            We believe that education should be fun and inspiring, and
            that&apos;s why we&apos;re committed to providing a diverse range of
            courses and resources.
          </p>
          <p className="pt-4 text-sm sm:text-base lg:text-lg text-[#165388] max-w-4xl">
            Whether you&apos;re a student looking to expand your knowledge, a
            teacher seeking innovative teaching tools,
            or simply curious about new topics, Web-based Tutorial System is
            here to empower you on your learning journey.
          </p>
        </div>
        
        <div className="text-center px-4 sm:px-6">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl pt-6 sm:pt-8 lg:pt-10 text-center text-[#043873] mb-2 sm:mb-4">
            OUR TEAM
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Our team consists of professionals from different parts of Mindanao.
          </p>
        </div>
      </div>
      
      <AboutSection />
      
      <div className="text-center p-4 sm:p-6 lg:p-8 bg-white">
        <h3 className="text-[#151A40] text-lg sm:text-xl font-bold mb-2">Learn with AthenaMD for free!</h3>
        <p className="text-sm sm:text-base mb-4">Join us and explore the exciting world of learning today!</p>
        <Link href="/main_homepage">
          <button className="mt-2 sm:mt-4 lg:mt-6 bg-[#043873] px-4 sm:px-5 py-2 text-white text-sm sm:text-base rounded-lg hover:bg-[#0f1330] transition-colors duration-300 hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-300">
            View Courses
          </button>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default Aboutus;