import campus from "../../assets/campus.jpg";
import profile from "../../assets/profile.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { UseNavigation } from "../../utils/NavigationContext";
import { HiMenuAlt2 } from "react-icons/hi";
import { HeaderDrop } from "../../utils/HeaderDrop";
import { useState } from "react";

export const Header = () => {
  const { isOpen, toggleNav } = UseNavigation();
  const [menu, setMenu] = useState(false);

  return (
    <header
      className={`fixed flex flex-row justify-between items-center w-full 
        ${!isOpen ? "md:pl-[6.8rem]" : "md:pl-[17.8rem]"} 
        lg:pl-[17.8rem] right-0 z-20 px-6 h-[4.4rem] bg-black overflow-hidden `}
    >
      <img
        className={`absolute ${isOpen ? "pl-[16rem]" : "md:pl-[5rem] lg:pl-[16rem]"} -z-10 right-0 w-full left-0 top-0 opacity-45`}
        src={campus}
        alt=" "
      />
      <button onClick={toggleNav} className="text-white">
        {!isOpen ? (
          <FaArrowRightLong className="w-[1.5rem] h-[1.5rem] lg:hidden" />
        ) : (
          <HiMenuAlt2 className="lg:hidden" />
        )}
      </button>
      <button
        onClick={() => {
          setMenu(!menu);
        }}
        className="flex items-center pl-[1.1rem] md:px-[1.1rem] gap-3 h-full md:bg-[#455358]"
      >
        <img
          className="h-[2.1rem] w-[2.1rem] rounded-full"
          src={profile}
          alt=""
        />
        <p className="hidden xl:block pr-[1.1rem] text-white text-sm">
          Elvis Owusu
        </p>
      </button>
      {menu && (
        <div
          className="fixed right-0 w-full sm:w-[11rem] sm:right-3 top-[4rem]"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <HeaderDrop />
        </div>
      )}
    </header>
  );
};
