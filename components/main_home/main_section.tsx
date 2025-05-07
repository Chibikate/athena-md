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
    <div className="py-8 md:py-10 px-3 sm:px-6 lg:px-8 bg-[#F5F8FE]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#165388] drop-shadow-md">
            Explore Courses
          </h2>
          <div className="w-24 sm:w-32 h-0.5 bg-[#165388] mx-auto mt-1"></div>
        </div>
        
        {/* Toggle Buttons - Enhanced for mobile */}
        <div className="flex justify-center my-4 sm:my-6">
          <div className="flex flex-wrap md:flex-nowrap w-full max-w-xs sm:max-w-md border border-gray-300 rounded-md overflow-hidden">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleToggle(category.id)}
                className={`flex-1 px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap
                  ${activeCategory === category.id 
                    ? 'bg-[#0A3977] text-white' 
                    : 'bg-white text-[#0A3977] hover:bg-gray-100'}`}
                aria-pressed={activeCategory === category.id}
                aria-label={`Show ${category.label} courses`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Empty state for no courses */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">No courses available in this category yet.</p>
          </div>
        )}
        
        {/* Courses Grid - Improved responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="flex justify-center px-2 sm:px-0">
              <MainCard
                title={course.title}
                description={course.description}
                alt={course.alt}
                time={course.time}
                lesson={course.lesson}
                image={course.image}
                to={course.to}
                className="w-full max-w-[350px] transform transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-[#0A3977]"
              />
            </div>
          ))}
        </div>
        
        {/* Footer note for mobile - optional */}
        <div className="mt-8 text-center text-xs text-gray-500 hidden sm:block">
          <p>Swipe or scroll to view more courses</p>
        </div>
      </div>
    </div>
  );
};

export default MainCardSection;