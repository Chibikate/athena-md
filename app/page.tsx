"use client";
import HeroSection from "@/components/hero_page/hero_section";
import Navigator from "@/components/hero_page/navigator";
import Footer from "@/components/hero_page/footer";
import React from "react";
import { Noto_Sans_Javanese } from "next/font/google";
import LearningSection from "@/components/hero_page/learning_section";
import HowItWorks from "@/components/hero_page/howitworks_section";
import Image from "next/image";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Head from "next/head"; // Import Head

const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], weight: "400" });

const Home = () => {
  return (
    <>
      <Head>
        <title>AthenaMD - Learning Platform</title>
        <meta
          name="description"
          content="Explore AthenaMD's learning platform for surgical planning and 3D printing."
        />
      </Head>
      <section
        className={`relative rounded-lg bg-[#EDF5FE] ${javanese.className} text-sm sm:text-xl`}
      >
        {/* Background animation that won't interfere with buttons */}
        <BackgroundAnimation />

        {/* Main content with higher z-index to ensure interactivity */}
        <div className="relative z-10">
          <Navigator isCourse={true} />
          <HeroSection />
          <div className="w-full">
            <Image
              src="/explore.png"
              alt="Explore Design"
              width={1920}
              height={500}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <HowItWorks />
          <LearningSection />
          <div className="py-5" />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;