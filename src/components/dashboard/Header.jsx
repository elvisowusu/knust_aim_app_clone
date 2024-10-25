import campus from "../../assets/campus.jpg";
import profile from "../../assets/profile.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="fixed flex flex-row justify-between items-center w-full lg:pl-[16.5rem] right-0 z-20 px-6 h-[4.4rem] bg-black overflow-hidden">
      <img
        className="absolute -z-10 right-0 w-full left-0 top-0 opacity-45"
        src={campus}
        alt=""
      />
      <button className="text-white">
        <FaArrowRightLong className="w-[1.5rem] h-[1.5rem]" />
      </button>
      <button className="flex items-center px-[1.1rem] gap-3 h-full md:bg-[#455358]">
        <img className="h-[2.3rem] w-[2.3rem] rounded-full" src={profile} alt="" />
        <p className="hidden xl:block text-white text-sm">Elvis Owusu</p>
      </button>
    </header>
  );
};
