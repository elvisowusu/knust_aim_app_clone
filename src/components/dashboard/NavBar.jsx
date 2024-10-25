// NavBar.js
import { NavItems, OtherServices } from "../../utils/NavItems_Services";
import brandLogo from "../../assets/brandLogo.png";
import { useNavigation } from "../../utils/NavigationContext";

export const NavBar = () => {
  const { toggleNav } = useNavigation();

  return (
    <nav className="w-[16rem] lg:static">
      <div
        onClick={toggleNav}
        className="fixed right-0 w-full md:hidden z-20 opacity-30 bg-slate-600
       left-0 h-[100vh]"
      ></div>
      <div className="fixed z-30 bg-white w-[16rem] h-[100vh] pr-[0.1rem] flex flex-col justify-between gap-[17rem] overflow-y-scroll scroll-container shadow-xl md:shadow-none">
        <NavigationSection />
        <ServicesSection />
      </div>
    </nav>
  );
};

const NavigationSection = () => (
  <div className="mb-[5rem]">
    <img
      src={brandLogo}
      alt=""
      className="fixed hidden md:block h-[4.4rem] w-[16rem] pr-[0.05rem]"
    />
    <h1 className="text-[0.7rem] md:mt-[5rem] pt-[1.23rem] mb-[0.9rem] pl-[1.5rem] font-semibold text-[#9ea9ad]">
      NAVIGATION
    </h1>
    {NavItems.map(({ icon, name }, index) => (
      <NavButton key={index} icon={icon} name={name} />
    ))}
  </div>
);

const ServicesSection = () => (
  <div className="mb-4">
    <h1 className="text-[0.7rem] mb-[0.9rem] pl-[1.5rem] font-semibold text-[#9ea9ad]">
      OTHER SERVICES
    </h1>
    {OtherServices.map(({ icon, name }, index) => (
      <NavButton key={index} icon={icon} name={name} />
    ))}
  </div>
);

const NavButton = ({ icon, name }) => (
  <button className="pl-[2rem] flex gap-2 items-center h-[3rem] w-full hover:text-[#007427] border border-y-0 border-x-0 cursor-pointer focus:bg-green-100 focus:border-r-[0.25rem] border-green-700 hover:bg-green-100">
    <img src={icon} alt="" />
    <p className="text-[1rem]">{name}</p>
  </button>
);