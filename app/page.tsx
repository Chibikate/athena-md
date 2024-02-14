import HeroSection from "@/components/hero_page/hero_section";
import Navigator from "@/components/hero_page/navigator";
import Footer from "@/components/hero_page/footer";
import React from "react";
import { Noto_Sans_Javanese, Abhaya_Libre } from "next/font/google";
import LearningSection from "@/components/hero_page/learning_section";
import CourseSection from "@/components/hero_page/course_section";

const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], weight: "400" });
const abhaya = Abhaya_Libre({ subsets: ["latin"], weight: "400" });

const Home = () => {
  return (
    // * * ang rafce (react arrow function component export) para dli naka need mag mano2 og type //
    <section className={` ${javanese.className}`}>
      <Navigator />
      <div className="h-[1px] w-full bg-[#FDCC6D] my-1" />
      <HeroSection />
      <LearningSection/>
      <CourseSection/>
      <Footer/>
    </section>
  );
};

export default Home;
