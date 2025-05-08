"use client";

import React, { useState } from 'react';
import MainCard from "@/components/main_home/main_card";
import Mandibular from "@/public/main_course/mandibular.png";
import Pelvis from "@/public/main_course/Pelvis.png";
import Printing from "@/public/main_course/printing.png";
import Link from "next/link";

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
    <div className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-[#F5F8FE]">
        
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#165388] drop-shadow-md">
            Explore Courses
          </h2>
          <div className="w-24 sm:w-32 h-0.5 bg-[#165388] mx-auto mt-1"></div>
        </div>
        
        {/* Toggle Buttons - Improved for iPad */}
        <div className="flex justify-center my-4 sm:my-6">
          <div className="flex w-full sm:w-auto max-w-full sm:max-w-md border border-gray-300 rounded-md overflow-hidden">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleToggle(category.id)}
                className={`flex-1 px-3 sm:px-8 py-2 text-xs sm:text-sm md:text-base font-medium transition-colors duration-200 whitespace-nowrap
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
        
        {/* Courses Grid - iPad optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="flex justify-center px-0 sm:px-4 md:px-2">
              <MainCard
                title={course.title}
                description={course.description}
                alt={course.alt}
                time={course.time}
                lesson={course.lesson}
                image={course.image}
                to={course.to}
                className="w-full sm:w-[90%] md:max-w-[350px] transform transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-[#0A3977]"
              />
            </div>
          ))}
        </div>
        
        {/* Course pagination indicator - Mobile and iPad */}
        {filteredCourses.length > 2 && (
          <div className="mt-8 text-center text-sm text-gray-500 md:hidden">
            <div className="flex justify-center space-x-2">
              {Array.from({ length: Math.ceil(filteredCourses.length / 2) }).map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
          </div>
        )}
        
        {/* Welcome to AthenaMD Section - Before Why Choose Section */}
        <div className="mt-16 sm:mt-20 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#165388]">
                Welcome to Athena MD
              </h2>
              <div className="w-20 sm:w-24 h-0.5 bg-[#165388] mx-auto mt-2"></div>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none text-center">
              <p className="text-gray-700 mb-4">
                Thank you for joining Athena MD, your dedicated platform for advancing medical education in Virtual Surgical Planning and 3D Printing technologies.
              </p>
              
              <p className="text-gray-700 mb-4">
                Our mission is to provide accessible, high-quality education to medical professionals worldwide. Through our expertly designed courses, we aim to bridge the gap between traditional medical training and cutting-edge technological advancements.
              </p>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-[#0A3977] mb-4 text-center">How to Get Started</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="inline-block w-8 h-8 rounded-full bg-[#E6EEF8] text-[#0A3977] font-bold text-lg flex items-center justify-center mb-2">1</div>
                    <p className="text-sm text-gray-600">Browse our course catalog</p>
                  </div>
                  <div>
                    <div className="inline-block w-8 h-8 rounded-full bg-[#E6EEF8] text-[#0A3977] font-bold text-lg flex items-center justify-center mb-2">2</div>
                    <p className="text-sm text-gray-600">Work through interactive lessons</p>
                  </div>
                  <div>
                    <div className="inline-block w-8 h-8 rounded-full bg-[#E6EEF8] text-[#0A3977] font-bold text-lg flex items-center justify-center mb-2">3</div>
                    <p className="text-sm text-gray-600">Earn your professional certificate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Combined Benefits Section - Removes redundancy */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#165388] drop-shadow-md">
              Why Choose AthenaMD
            </h2>
            <div className="w-20 sm:w-28 h-0.5 bg-[#165388] mx-auto mt-1"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E6EEF8] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0A3977]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0A3977] mb-2">Free Education</h3>
              <p className="text-gray-600 text-sm">Access comprehensive medical education without financial barriers</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E6EEF8] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0A3977]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0A3977] mb-2">Expert Instructors</h3>
              <p className="text-gray-600 text-sm">Learn from practicing medical professionals with real-world experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E6EEF8] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0A3977]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0A3977] mb-2">Earn Certificates</h3>
              <p className="text-gray-600 text-sm">Complete courses and quizzes to earn certificates that showcase your skills</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MainCardSection;