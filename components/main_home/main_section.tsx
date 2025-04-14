"use client";

import React, { useState } from 'react';
import MainCard from "@/components/main_home/main_card";
import Mandibular from "@/public/main_course/mandibular.png";
import Pelvis from "@/public/main_course/Pelvis.png";
import Printing from "@/public/main_course/printing.png";

const MainCardSection = () => {
  const [activeCategory, setActiveCategory] = useState('VSP');
  
  const categories = [
    { id: 'VSP', label: 'Virtual Surgical Planning' },
    { id: '3DP', label: '3D Printing' }
  ];
  
  // Course data with category
  const courses = [
    {
      id: 1,
      title: "Mandibular Reconstruction",
      description: "Learn step-by-step process of virtual surgical planning for Mandible Reconstruction",
      alt: "Mandibular Reconstruction",
      time: "1 Hour",
      lesson: "6 Lessons",
      category: "VSP",
      image: Mandibular,
      to: "/courses"
    },
    {
      id: 2,
      title: "Pelvis Reconstruction",
      description: "Learn step-by-step process of virtual surgical planning for Pelvis Reconstruction",
      alt: "Pelvis Reconstruction",
      time: "1 Hour",
      lesson: "6 Lessons",
      category: "VSP",
      image: Pelvis,
      to: "/pelviscourses"
    },
    {
      id: 3,
      title: "Ultimaker Cura",
      description: "Learn to use Ultimaker Cura for 3D printing preparation",
      alt: "3D Printing",
      time: "1 Hour",
      lesson: "4 Lessons",
      category: "3DP",
      image: Printing,
      to: "/ultimakercourses"
    }
  ];
  
  // Filter courses based on active category
  const filteredCourses = courses.filter(course => course.category === activeCategory);
  
  const handleToggle = (categoryId: string) => {
    setActiveCategory(categoryId);
  };
  
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F5F8FE]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#165388] drop-shadow-md">
            Explore Courses
          </h2>
          <div className="w-32 h-0.5 bg-[#165388] mx-auto mt-1"></div>
        </div>
        
        {/* Toggle Buttons */}
        <div className="flex justify-center my-6">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleToggle(category.id)}
                className={`px-6 py-2 text-sm font-medium transition-colors duration-200 
                  ${activeCategory === category.id 
                    ? 'bg-[#0A3977] text-white' 
                    : 'bg-white text-[#0A3977]'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <MainCard
                title={course.title}
                description={course.description}
                alt={course.alt}
                time={course.time}
                lesson={course.lesson}
                image={course.image}
                to={course.to}
                className="w-full max-w-[350px] transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCardSection;