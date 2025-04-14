"use client";
import React, { useState } from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigator3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F5F8FE] flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 rounded-b-lg relative z-50 w-full max-w-screen-l mx-auto shadow-md">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image 
          className="w-auto max-w-[180px] md:max-w-[200px]" 
          alt="Athena logo" 
          src={Logo} 
          priority 
        />
      </Link>
      
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden block text-gray-700 focus:outline-none z-50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#ffffff]
          transition-transform duration-300 ease-in-out transform
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0 lg:static lg:h-auto lg:w-auto lg:bg-transparent
          flex flex-col lg:flex-row items-start lg:items-center
          p-6 lg:p-0 shadow-lg lg:shadow-none z-40
        `}
      >
          <Link
            className="block lg:inline-block w-full lg:w-auto text-left lg:text-center py-2 px-5 text-[#30365B] hover:text-blue-900 hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-300 rounded-lg text-md font-bold transition"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </div>

      {/* Overlay (closes menu on click) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-md lg:hidden z-30 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigator3;