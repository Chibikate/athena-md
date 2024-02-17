import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navigator = () => {
  return (
    <nav className="bg-[#FDF9F4] flex flex-row justify-between px-4 pb-1">
      <Link href="/">
        <Image alt="Athena logo" src={Logo} />
      </Link>
      <div className="flex flex-row items-center text-black bg-primary justify-end mt-2 mr-4 space-x-4">
      <Link href="/">
          <p className="text-[#A46C00] font-bold hover-border hover:border-white-400 hover:ring-2 ring-offset-2 hover:ring-offset-purple-950 hover-border px-3 py-2 rounded-md text-lg">
            Home
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;
