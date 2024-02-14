import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navigator = () => {
  return (
    <nav className="bg-[#FDF9F4] rounded-sm flex flex-row justify-between px-4">
      <Link href="/">
        <Image alt="Athena logo" src={Logo} />
      </Link>
      <div className="flex flex-row items-center text-black bg-primary justify-end mt-2 mr-4 space-x-4">
        <Link href="/contactus">
          <p className="p-2 rounded-md cursor-pointer hover:ring-2 ring-[#FF5C00]">
            Contact Us
          </p>
        </Link>
        {/* TODO: Add link sa duha #FDCC6D */}
        <Link href="./mandiweb">
          <p className="p-2 rounded-md items-center justify-center hover:font-bold font-bold cursor bg-[#FDCC6D] hover-border hover:ring-offset-[#b7d5eb]  hover:text-amber-700 hover:ring-2 hover:ring-offset-2">
            Courses
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;
