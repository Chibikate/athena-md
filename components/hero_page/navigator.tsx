import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navigator = () => {
  return (
    <nav>
      <Link href="/">
        <Image alt="Athena logo" src={Logo} />
      </Link>
      <div></div>
    </nav>
  );
};

export default Navigator;
