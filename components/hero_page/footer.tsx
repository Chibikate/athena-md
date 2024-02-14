import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#FDF9F4] text-center text-black p-6">
        <div className="container mx-auto">
        <p className="text-xs lg:text-sm">
          © {new Date().getFullYear()} Athena Wisdom for doctors
        </p>
        <p className="font-bold text-sm lg:text-base">
          Mindanao State University - Iligan Institute of Technology (MSU-IIT)
        </p>
        <p className="text-xs lg:text-sm">
          Andres Bonifacio Avenue, Tibanga 9200 Iligan City, Philippines
        </p>
        <p className="tex   t-xs lg:text-sm">
          For inquiries, contact:{" "}
          <a href="mailto:contact@example.com">
            lemuelclark.velasco@g.msuiit.edu.ph
          </a>
        </p>

      </div>
    
    </div>
  )
}

export default Footer