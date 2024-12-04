import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import knustLogo from "/src/assets/knust logo.png";
import { NavItems, OtherServices } from "../../utils/items/NavItems_Services";

export const Bar = () => (
  <div className="hidden lg:hidden fixed z-30 bg-white h-[100vh] pr-[0.1rem] md:flex flex-col justify-between items-center gap-[17rem] overflow-y-scroll scroll-container shadow-xl">
    <div className="fixed hidden md:block top-0 h-[4.4rem] w-[5rem] py-[1.4rem] px-[2rem] left-0 bg-white">
      <img src={knustLogo} alt="KNUST Logo" className="w-4" />
    </div>

    <IconSection items={NavItems} />
    <IconSection items={OtherServices} />
  </div>
);

const IconSection = ({ items }) => (
  <div className="mb-[5rem] mt-[5rem] text-center w-20">
    {items.map(({ icon, name, link }, index) => (
      <NavButton key={index} icon={icon} name={name} link={link} />
    ))}
  </div>
);

const NavButton = ({ icon, name, link }) => {
  // Check if the link is internal or external
  const isInternal = link && !link.startsWith("http");

  return isInternal ? (
    // Internal navigation with NavLink
    <NavLink
      to={link || "#"}
      className={({ isActive }) =>
        `navIconsOnly ${isActive ? "bg-green-100 border-r-[0.25rem] border-green-700 " : ""}`
      }
      end
    >
      <img src={icon} alt={name} />
    </NavLink>
  ) : (
    // External link with a <a> tag for opening in a new tab
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="navIconsOnly"
    >
      <img src={icon} alt={name} />
    </a>
  );
};

IconSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};

NavButton.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string,
  link: PropTypes.string,
};
