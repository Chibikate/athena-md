import Logo from "@/public/logo.svg";
import Logo1 from "@/public/logo1.png";
import Link from "next/link";
import Image from "next/image";

interface Props {
  isCourse: boolean;
}

const Navigator = ({ isCourse }: Props) => {
  return (
    <nav className="bg-[#F5F8FE] flex flex-row justify-between px-4 py-2 rounded-b-lg  ">
      <Link href="/">
        <Image className="" alt="Athena logo" src={Logo} />
      </Link>
      <div className="flex flex-row items-center text-blue bg-primary justify-end mt-2 mr-4 space-x-5 pb-2">
        <Link
          className={`hover:bg-white ${
            !isCourse ? "py-1" : "pt-[8px] "
          } text-[#30365B] hover:text-blue hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-400 px-5 rounded-lg   text-sm font-semibold`}
          href="/aboutus"
        >
          ABOUT
        </Link>
        <Link
          className={`hover:bg-white ${
            !isCourse ? "py-1" : "pt-[8px] "
          } text-[#30365B] hover:text-blue hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-400 px-5 rounded-lg   text-sm font-semibold`}
          href="/"
        >
          CONTACT
        </Link>
        {isCourse && (
          // <Link
          //   className="bg-blue pt-[12px] py-1 bg-[#043873] hover:text-[#ffffff]-900 text-white hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-400 text-sm px-5 rounded-lg "
          //   href={"/courses"}
          // >
          //   Get Started
          // </Link>
          <Link
          className="bg-blue pt-[12px] py-1 bg-[#043873] hover:text-[#ffffff]-900 text-white hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-400 text-sm px-5 rounded-lg "
          href={"components/main_home/dashboard"}
        >
          Get Started
        </Link>
        )}
        {!isCourse && (
          <Link
            className="bg-blue py-[4px] hover:text-blue-900 hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-400 text-xl px-5 rounded-lg  text-md font-bold"
            href={"/"}
          >
            Home
          </Link>
        )}
      </div>
    </nav>
  );
};
Navigator.defaultProps = {
  isCourse: false, // Default value for isCourse if not provided
};

export default Navigator;
