import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

interface Props {
  isCourse: boolean;
}

const Navigator = ({ isCourse }: Props) => {
  return (
    <nav className="bg-[#160c35] flex flex-row justify-between px-4 py-2 rounded-b-lg  ">
      <Link href="/">
        <Image className="invert" alt="Athena logo" src={Logo} />
      </Link>
      <div className="flex flex-row items-center text-black bg-primary justify-end mt-2 mr-4 space-x-5 pb-2">
        {!isCourse && (
          <Link
            className="bg-white py-[4px] hover:text-emerald-900 ring-2 ring-offset-2 ring-offset-blue-300 hover:ring-offset-purple-950 text-xl px-5 rounded-lg  text-md font-bold"
            href={"/"}
          >
            Home
          </Link>
        )}
        <Link
          className="bg-white  py-[4px] hover:text-emerald-900 ring-2 ring-offset-2 ring-offset-blue-300 hover:ring-offset-purple-950 text-xl px-5 rounded-lg  text-md font-bold"
          href={"/courses"}
        >
          Courses
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;
