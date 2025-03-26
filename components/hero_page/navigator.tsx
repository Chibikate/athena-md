"use client";
import { useState } from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

interface Props {
  isCourse?: boolean;
}

const Navigator = ({ isCourse = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F5F8FE] flex items-center justify-between px-6 md:px-12 lg:px-20 py-3 rounded-b-lg relative z-50 w-full max-w-screen-2xl mx-auto">
      <Link href="/" className="flex-shrink-0">
        <Image 
          className="w-auto max-w-[150px] md:max-w-[200px]" 
          alt="Athena logo" 
          src={Logo} 
          priority 
        />
      </Link>
      
      <button
        className="lg:hidden block text-gray-700 focus:outline-none z-50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      <div
        className={`
          fixed lg:static inset-0 top-16 lg:top-auto
          bg-[#F5F8FE] lg:bg-transparent
          w-full lg:w-auto
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          lg:flex flex-col lg:flex-row 
          items-center justify-between
          p-6 lg:p-0
          space-y-6 lg:space-y-0 lg:space-x-8
          absolute lg:relative
          z-40 lg:z-auto
        `}
      >
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
          <Link
            className="block lg:inline-block w-full lg:w-auto text-center hover:bg-white py-2 px-5 text-[#30365B] hover:text-blue hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-400 rounded-lg text-sm font-semibold"
            href="/aboutus"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            className="block lg:inline-block w-full lg:w-auto text-center hover:bg-white py-2 px-5 text-[#30365B] hover:text-blue hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-400 rounded-lg text-sm font-semibold"
            href="/contact_form"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
          {isCourse ? (
            <Link
              className="block lg:inline-block w-full lg:w-auto text-center bg-[#043873] hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold"
              href="/main_homepage"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          ) : (
            <Link
              className="block lg:inline-block w-full lg:w-auto text-center bg-[#165388] text-white py-2 px-7 rounded-lg text-md hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-700"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-30" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigator;