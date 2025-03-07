import React from "react";
import MainCardSection from "@/components/main_home/main_section";

const MainHomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#165388] text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Our Courses</h1>
        <p className="mt-4 text-lg">Enhance your skills with our step-by-step tutorials</p>
      </div>
      
      {/* Main Card Section */}
      <MainCardSection />
    </div>
  );
};

export default MainHomePage;