import React from "react";
import MainCardSection from "@/components/main_home/main_section";
import Navigator from "@/components/hero_page/navigator";
import Footer from "@/components/hero_page/footer";


const MainHomePage = () => {
  return (
    <div>
            <Navigator />
      {/* Hero Section */}
      
      {/* Main Card Section */}
      <MainCardSection />
      <Footer />
    </div>
  );
};

export default MainHomePage;