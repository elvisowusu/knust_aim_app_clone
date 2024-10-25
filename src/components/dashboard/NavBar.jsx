import { NavItems, OtherServices } from "../../utils/NavItems_Services";

export const NavBar = () => {
  return (
    <>
      <div
        className="fixed z-20 opacity-30 bg-slate-600
       left-0 right-0 h-[100vh]"
      ></div>
      <nav className="fixed z-30 pt-[1.23rem] bg-white w-[16rem] h-[100vh] pr-[0.1rem] flex flex-col justify-between gap-[17rem] overflow-y-scroll scroll-container">
        <div className="mb-[5rem]">
          <h1 className="text-[0.7rem] mb-[0.9rem] pl-[1.5rem] font-semibold text-[#9ea9ad] ">
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
      </nav>
    </>
  );
};
