import { CourseRegistrationItems } from "../../../utils/CourseRegistrationItems";
import { FiCheckCircle } from "react-icons/fi";
import { Btn, Heading } from "../../../utils/Layout";

export const CourseRegistration = () => {
  return (
    <div className="pb-[1.2rem] bg-white md:w-[83%] rounded-[0.3rem] shadow-sm flex flex-col items-center">
      <Heading headText={"REGISTRATION INSTRUCTIONS"} />
      <section className=" border-[#d9f1e1] mt-5 px-6">
        <h1 className="mb-2 text-red-500">
          {CourseRegistrationItems[0].heading}
        </h1>
        <p className="mb-[0.5rem]">{CourseRegistrationItems[0].passage}</p>
        {CourseRegistrationItems.slice(1).map(({ heading, passage }, index) => (
          <div key={index} className="flex gap-4">
            <FiCheckCircle className="shrink-0 mt-[0.4rem] text-[#5ab887] rounded-full bg-[#d9f7e7]" />
            <div className="">
              <h3 className="text-[#13c56b]">{heading}</h3>
              <p className="mt-[0.6rem] mb-[0.6rem]">{passage}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="flex flex-col sm:flex-row lg:flex-row gap-[0.2rem] justify-center  w-full items-center h-[4rem] text-center">
        <Btn />
        <button className="border bg-[#13c56b] text-white hover:text-white hover:bg-[#10a75b] hover:border-[#0f9e56] active:bg-[#0f9e56] ease-out transition-all 3s w-fit text-sm py-[0.55rem] px-3 rounded-[0.3rem] border-[#13c56b] flex justify-center items-center">
          Proceed to Course Registration
        </button>
      </div>
    </div>
  );
};
