import { FaArrowLeftLong } from "react-icons/fa6";
import PropTypes from "prop-types";
export const Btn = () => {
  return (
    <button className="border text-red-400 hover:text-white hover:bg-red-400 hover:border-none ease-out transition-all 3s w-fit text-sm py-[0.55rem] px-3 rounded-[0.3rem] border-red-400 flex justify-center items-center">
      <FaArrowLeftLong size={11} />
      Back to Main Menu
    </button>
  );
};

export const Heading = ({ headText }) => {
  return (
    <>
      <section className="flex flex-col border-b-2 border-[#d9f1e1] rounded-b-[13rem_15%] justify-center items-center bg-[#D9F1E1] w-full h-[8.7rem] sm:h-[7.8rem]">
        <h1 className="text-[#504e51] text-center leading-[1.6rem] text-[1.4rem] md:text-[1.6rem] px-6">
          {headText}
        </h1>
      </section>
      <hr className="bg-[#d9f1e1] border-none h-[0.2rem] sm:h-[0.04rem] md:h-[0.01rem] mt-[0.2rem] w-full " />
    </>
  );
};

Heading.propTypes = {
  headText: PropTypes.string.isRequired,
};
