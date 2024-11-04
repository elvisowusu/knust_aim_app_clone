import { FaArrowLeftLong } from "react-icons/fa6";
import { CourseRegistrationItems } from "../../../utils/CourseRegistrationItems";
import { FiCheckCircle } from "react-icons/fi";

export const CourseRegistration = () => {
  return (
    <div className="mb-[1.2rem] bg-white md:w-[83%]">
      <section className="flex flex-col border-b-2 border-[#d9f1e1] rounded-b-[13rem_15%] justify-center items-center bg-[#D9F1E1] w-full h-[9.6rem] ">
        <h1 className="text-[#504e51] text-center leading-[1.6rem] text-[1.4rem] md:text-[1.6rem] px-6">
          REGISTRATION INSTRUCTIONS
        </h1>
      </section>
      <hr className="bg-[#d9f1e1] border-none h-[0.1rem] mt-[0.2rem] md:hidden " />
      <section className=" border-[#d9f1e1] mt-5 mb-9 px-6">
        <h1 className="mb-2 text-red-500">
          {CourseRegistrationItems[0].heading}
        </h1>
        <p className="mb-[0.5rem]">{CourseRegistrationItems[0].passage}</p>
        {CourseRegistrationItems.slice(1).map(({ heading, passage }, index) => (
          <div key={index} className="flex gap-4">
            <FiCheckCircle className="shrink-0 mt-[0.4rem] text-[#5ab887] rounded-full bg-[#d9f7e7]"/>
            <div className="">
              <h3 className="text-[#13c56b]">{heading}</h3>
              <p className="">{passage}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="flex flex-col lg:flex-row gap-[0.5rem] justify-center  w-full items-center h-[4rem] my-4 mb-6 text-center">
        <button className="border text-red-400 hover:text-white hover:bg-red-400 hover:border-none ease-out transition-all 2s  font-medium w-fit text-sm py-[0.5rem] px-3 rounded-[0.2rem] border-red-400 flex justify-center items-center">
          <FaArrowLeftLong size={11} />
          Back to Main Menu
        </button>
        <button className="border text-red-400 hover:text-white hover:bg-red-400 hover:border-none ease-out transition-all 2s  font-medium w-fit text-sm py-[0.5rem] px-3 rounded-[0.2rem] border-red-400 flex justify-center items-center">
          Proceed to Course Registration
        </button>
      </div>
    </div>
  );
};
