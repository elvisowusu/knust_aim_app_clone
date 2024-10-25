import { NavItems, OtherServices } from "../../utils/NavItems_Services";
import brandLogo from "../../assets/brandLogo.png";
export const NavBar = () => {
  return (
    <nav className="w-[16rem] lg:static">
      <div
        className="fixed md:hidden z-20 opacity-30 bg-slate-600
       left-0 h-[100vh]"
      ></div>
      <div className="fixed z-30 bg-white w-[16rem] h-[100vh] pr-[0.1rem] flex flex-col justify-between gap-[17rem] overflow-y-scroll scroll-container shadow-xl md:shadow-none">
        <div className="mb-[5rem]">
          <img
            src={brandLogo}
            alt=""
            className="fixed hidden md:block h-[4.4rem] w-[16rem] pr-[0.05rem]"
          />
          <h1 className="text-[0.7rem] md:mt-[5rem] pt-[1.23rem] mb-[0.9rem] pl-[1.5rem] font-semibold text-[#9ea9ad] ">
            NAVIGATION
          </h1>
          {NavItems.map(({ icon, name }) => {
            return (
              <>
                <button className="pl-[2rem] flex gap-2 items-center h-[3rem] w-full hover:text-[#007427] border border-y-0 border-x-0 cursor-pointer focus:bg-green-100 focus:border-r-[0.25rem] border-green-700 hover:bg-green-100">
                  <img src={icon} alt="" />{" "}
                  <p className="text-[1rem]">{name}</p>
                </button>
              </>
            );
          })}
        </div>
        <div className="mb-4">
          <h1 className="text-[0.7rem] mb-[0.9rem] pl-[1.5rem] font-semibold text-[#9ea9ad] ">
            OTHER SERVICES
          </h1>
          {OtherServices.map(({ icon, name }) => {
            return (
              <>
                <button className="pl-[2rem] flex gap-2 items-center h-[3rem] w-full hover:text-[#007427] border border-y-0 border-x-0 cursor-pointer focus:bg-green-100 focus:border-r-[0.25rem] border-green-700 hover:bg-green-100">
                  <img src={icon} alt="" />{" "}
                  <p className="text-[1rem]">{name}</p>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

import knustLogo from "/src/assets/knust logo.png";

export const Bar = () => {
  return (
    <div className="hidden lg:hidden fixed z-30 bg-white h-[100vh] pr-[0.1rem] md:flex flex-col justify-between items-center gap-[17rem] overflow-y-scroll scroll-container shadow-xl md:shadow-none">
      <div className="fixed hidden md:block h-6 w-5 bg-white top-6 pr-[0.05rem]">
        <img src={knustLogo} alt="" />
      </div>
      <div className="mb-[5rem] mt-[5rem] text-center w-20">
        {NavItems.map(({ icon }) => {
          return (
            <>
              <button className=" flex justify-center gap-2 items-center h-[3rem] w-full hover:text-[#007427] border border-y-0 border-x-0 cursor-pointer focus:bg-green-100 focus:border-r-[0.25rem] border-green-700 hover:bg-green-100">
                <img src={icon} alt="" />
              </button>
            </>
          );
        })}
      </div>
      <div className="mb-4">
        {OtherServices.map(({ icon }) => {
          return (
            <>
              <button className="p flex gap-2 items-center h-[3rem] w-full hover:text-[#007427] border border-y-0 border-x-0 cursor-pointer focus:bg-green-100 focus:border-r-[0.25rem] border-green-700 hover:bg-green-100">
                <img src={icon} alt="" />
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};
