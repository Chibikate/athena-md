import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navigator = () => {
  return (
    <nav className="bg-[#fffff] rounded-sm flex flex-row justify-between px-4">
      <Link href="/">
        <Image alt="Athena logo" src={Logo} />
      </Link>
    </nav>
  );
};

export default Navigator;
