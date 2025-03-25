import React from "react";
import CourseCard from "./course_card";
import { courses } from "@/data/mandibular/course_data";

const CourseSection = () => {
  return (
    <div className="bg-[#F5F8FE] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#0b0d0f] mb-12 
          drop-shadow-md">
          Mandible Course
        </h2>
      </div>
      
      {/* Responsive grid layout with improved breakpoints */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            level={course.level}
            alt={course.alt}
            to={course.to}
            time={course.time}
            className="w-full max-w-[350px] transform transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;