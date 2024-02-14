import React from "react";
import Navigator from "@/components/course_overview/navigator";
import HeroSection from "@/components/course_overview/hero_section";
import LearningSection from "@/components/course_overview/learning_section";
import Footer from "@/components/hero_page/footer";
import ObjectiveSection from "@/components/course_overview/objective_section";
import GoalSection from "@/components/course_overview/goal_section";

const Home = () => {
  return (
    <section>
      <Navigator />
      <div className="h-[1px] w-full bg-[#FDCC6D]" />
      <HeroSection />
      <LearningSection />
      <ObjectiveSection />
      <GoalSection />
      <Footer />
   
    </section>
  );
};

export default Home;
