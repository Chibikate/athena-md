import Logo from "@/public/logo.svg";
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
      <div className="flex flex-row items-center text-black bg-primary justify-end mt-2 mr-4 space-x-5 pb-2">
      {!isCourse && (
          <Link
          className={`hover:bg-white ${
            !isCourse ? "py-1" : "pt-[8px] "
          } text-[#30365B] hover:text-blue hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-400 px-5 rounded-lg   text-sm font-semibold`}
            href={"/"}
          >
            HOME
          </Link>
        )}
        <Link
          className={`hover:bg-white ${
            !isCourse ? "py-1" : "pt-[8px] "
          } text-[#30365B] hover:text-blue hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-400 px-5 rounded-lg   text-sm font-semibold`}
          href="/contact_form"
        >
          CONTACT
        </Link>
          <Link
          className="bg-blue pt-[10px] py-2  px-4 bg-[#043873] hover:text-[#ffffff]-900 text-white hover:ring-2 hover:ring-offset-2  hover:ring-offset-blue-400 text-sm rounded-lg "
          href="main_homepage"
        >
          Get Certified 
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;