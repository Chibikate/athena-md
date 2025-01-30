import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navigator = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 w-full flex flex-row items-center px-4 py-3 shadow-md z-50 sm:px-6 md:px-8 lg:px-10">

      <Link href="/">
        <Image className="invert" alt="Athena logo" src={Logo} />
      </Link>
      <div className="flex flex-row items-center text-black bg-primary justify-end space-x-4">
        <Link href="/courses">
          <p className="bg-blue py-[4px] hover:text-blue-900 hover:ring-2 hover:ring-offset-2 hover:ring-offset-blue-300 hover:ring-offset-purple-950 text-xl px-5 rounded-lg text-md font-bold">
            Home
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;
 