import { FaArrowLeftLong } from "react-icons/fa6";
import PropTypes from "prop-types";

export const PageLayout = ({
  mainHeading,
  subHeading,
  subHeadContent,
  children,
  btn,
}) => {
  return (
    <div className="mb-[1.2rem] bg-white md:w-[83%]">
      <section className="flex flex-col border-b-2 border-[#d9f1e1] rounded-b-[13rem_15%] justify-center items-center bg-[#D9F1E1] w-full h-[9.6rem] ">
        <h1 className="text-[#504e51] text-center leading-[1.6rem] text-[1.4rem] md:text-[1.6rem] px-6">
          {mainHeading}
        </h1>
      </section>
      <hr className="bg-[#d9f1e1] border-none h-[0.1rem] mt-[0.2rem] md:hidden " />
      <section className=" border-[#d9f1e1] mt-5 mb-9 px-6">
        <h1 className="mb-2 text-red-500">{subHeading}</h1>
        <p className="mb-[0.5rem]">{subHeadContent}</p>
        {children}
      </section>
      <div className="flex flex-col lg:flex-row gap-[0.5rem] justify-center  w-full items-center h-[4rem] my-4 mb-6 text-center">
        <button className="border text-red-400 hover:text-white hover:bg-red-400 hover:border-none ease-out transition-all 2s  font-medium w-fit text-sm py-[0.5rem] px-3 rounded-[0.2rem] border-red-400 flex justify-center items-center">
          <FaArrowLeftLong size={11} />
          Back to Main Menu
        </button>
        <button className="border text-red-400 hover:text-white hover:bg-red-400 hover:border-none ease-out transition-all 2s  font-medium w-fit text-sm py-[0.5rem] px-3 rounded-[0.2rem] border-red-400 flex justify-center items-center">
          {btn}
        </button>
      </div>
    </div>
  );
};

PageLayout.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  subHeadContent: PropTypes.string.isRequired,
  children: PropTypes.node,
  btn: PropTypes.string,
};
