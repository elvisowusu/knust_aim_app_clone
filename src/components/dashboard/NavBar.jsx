import PropTypes from "prop-types";
import { NavItems, OtherServices } from "../../utils/items/NavItems_Services";
import brandLogo from "../../assets/brandLogo.png";
import { UseNavigation } from "../../utils/NavigationContext";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const { toggleNav } = UseNavigation();

  return (
    <nav className="w-[16rem] lg:static">
      <div
        onClick={toggleNav}
        className="fixed right-0 w-full md:hidden z-20 opacity-30 bg-slate-600
       left-0 h-[100vh]"
      ></div>
      <div className="fixed md:pt-0 z-30 bg-white w-[16rem] h-[100vh] pr-[0.1rem] flex flex-col justify-between gap-[17rem] overflow-y-scroll scroll-container shadow-xl md:shadow-none">
        <NavigationSection />
        <ServicesSection />
      </div>
    </nav>
  );
};

const NavigationSection = () => (
  <div className="">
    <img
      src={brandLogo}
      alt=""
      className="fixed md:block h-[4.4rem] w-[16rem] pr-[0.05rem] bg-white"
    />
    <Section title="NAVIGATION" items={NavItems} />
  </div>
);

const ServicesSection = () => (
  <div className="mb-4">
    <Section title="OTHER SERVICES" items={OtherServices} />
  </div>
);

const Section = ({ title, items }) => (
  <div className="mt-[5rem]">
    <h1 className="text-[0.7rem] mb-[0.9rem] pl-[1.5rem] font-semibold text-[#9ea9ad]">
      {title}
    </h1>
    {items.map((item, index) => (
      <NavButton key={index} {...item} />
    ))}
  </div>
);

const NavButton = ({ icon, name, link }) => {
  // Check if the link is internal or external
  const isInternal = link && !link.startsWith("http");
  return isInternal ? (
    <NavLink
      to={link || "#"}
      end
      className={({ isActive }) =>
        `pl-[2rem] flex gap-2 items-center h-[3rem] w-full hover:text-[#007427] border border-y-0 border-x-0 cursor-pointer ${
          isActive ? "bg-green-100 border-r-[0.25rem] border-green-700" : ""
        }`
      }
    >
      <img src={icon} alt={`${name} Icon`} />
      <p className="text-[1rem]">{name}</p>
    </NavLink>
  ) : (
    // External link with a <a> tag for opening in a new tab
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="pl-[2rem] flex gap-2 items-center h-[3rem] w-full hover:text-[#007427] border border-y-0 border-x-0 cursor-pointer"
    >
      <img src={icon} alt={`${name} Icon`} />
      <p className="text-[1rem]">{name}</p>
    </a>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

NavButton.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
};
