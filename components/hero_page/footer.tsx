import React from 'react'

const Footer = () => {
  return (
    <div className=" text-center text-[#043873] p-6 bg-[#EDF5FE]">
        <div className="container mx-auto">
        <p className="text-xs lg:text-sm">
          © {new Date().getFullYear()} Athena | Wisdom for Doctors
        </p>
        <p className="font-bold text-sm lg:text-base text-[#043873">
          Mindanao State University - Iligan Institute of Technology (MSU-IIT)
        </p>
        <p className="text-xs lg:text-sm text-[#043873]">
          Andres Bonifacio Avenue, Tibanga 9200 Iligan City, Philippines
        </p>
        <p className="tex   t-xs lg:text-sm text-[#043873]">
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