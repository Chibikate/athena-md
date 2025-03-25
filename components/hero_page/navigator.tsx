"use client"; // Add this line at the top

import { useState } from "react";
import Logo from "@/public/logo.svg";
import Logo1 from "@/public/logo1.png";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

interface Props {
  isCourse: boolean;
}

const Navigator = ({ isCourse }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F5F8FE] flex items-center justify-between px-4 py-3 rounded-b-lg relative">
      <Link href="/">
        <Image className="w-28" alt="Athena logo" src={Logo} />
      </Link>
      
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden block text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {/* Navigation Links */}
      <div
        className={`lg:flex flex-col lg:flex-row items-center bg-[#F5F8FE] lg:bg-transparent absolute lg:static top-16 right-0 w-full lg:w-auto transition-all duration-300 ease-in-out space-y-4 lg:space-y-0 lg:space-x-5 p-4 lg:p-0 shadow-lg lg:shadow-none text-right ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div className="lg:flex lg:items-center lg:space-x-5">
          <Link
            className="block lg:inline-block hover:bg-white py-2 px-5 text-[#30365B] hover:text-blue hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-400 rounded-lg text-sm font-semibold"
            href="/aboutus"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            className="block lg:inline-block hover:bg-white py-2 px-5 text-[#30365B] hover:text-blue hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-400 rounded-lg text-sm font-semibold"
            href="/contact_form"
            onClick={() => setIsOpen(false)}
            passHref
          >
            <span>CONTACT</span>
          </Link>
          {isCourse ? (
            <Link
              className="block lg:inline-block bg-[#043873] hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold"
              href="/main_homepage"
              onClick={() => setIsOpen(false)}
              passHref
            >
              <span>Get Started</span>
            </Link>
          ) : (
            <Link
              className="block lg:inline-block bg-[#165388] text-white py-2 px-7 rounded-lg text-md hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-700"
              href="/"
              onClick={() => setIsOpen(false)}
              passHref
            >
              <span>Home</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

Navigator.defaultProps = {
  isCourse: false, // Default value for isCourse if not provided
};

export default Navigator;