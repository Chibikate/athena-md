import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navigator = () => {
  return (
    <nav className="bg-[#ffffff] flex flex-row justify-between px-4 pb-1">

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
 