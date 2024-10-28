import PropTypes from "prop-types";
import { NavItems, OtherServices } from "../../utils/NavItems_Services";
import knustLogo from "/src/assets/knust logo.png";

export const Bar = () => (
  <div className="hidden lg:hidden fixed z-30 bg-white h-[100vh] pr-[0.1rem] md:flex flex-col justify-between items-center gap-[17rem] overflow-y-scroll scroll-container shadow-xl md:shadow-none">
    <div className="fixed hidden md:block h-6 w-5 bg-white top-6 pr-[0.05rem]">
      <img src={knustLogo} alt="" />
    </div>

    <IconSection items={NavItems} />
    <IconSection items={OtherServices} />
  </div>
);

const IconSection = ({ items }) => (
  <div className="mb-[5rem] mt-[5rem] text-center w-20">
    {items.map(({ icon }, index) => (
      <button key={index} className="navIconsOnly">
        <img src={icon} alt="" />
      </button>
    ))}
  </div>
);

IconSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};
