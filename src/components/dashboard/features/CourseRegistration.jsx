import { CourseRegistrationItems } from "../../../utils/CourseRegistrationItems";
import { FiCheckCircle } from "react-icons/fi";
import { Btn, Layout } from "../../../utils/Layout";

export const CourseRegistration = () => {
  return (
    <Layout
      mainHeadText={"REGISTRATION INSTRUCTIONS"}
      mainContent={
        <section className=" border-[#d9f1e1] mt-5 px-6">
          <h1 className="mb-2 text-red-500">
            {CourseRegistrationItems[0].heading}
          </h1>
          <p className="mb-[0.5rem]">{CourseRegistrationItems[0].passage}</p>
          {CourseRegistrationItems.slice(1).map(
            ({ heading, passage }, index) => (
              <div key={index} className="flex gap-4">
                <FiCheckCircle className="shrink-0 mt-[0.4rem] text-[#5ab887] rounded-full bg-[#d9f7e7]" />
                <div className="">
                  <h3 className="text-[#13c56b]">{heading}</h3>
                  <p className="mt-[0.6rem] mb-[0.6rem]">{passage}</p>
                </div>
              </div>
            )
          )}
        </section>
      }
      mainBtn={
        <Btn
          clickFunc={() => {
            console.log("Proceed to course registration");
          }}
          name={"Proceed to Course Registration"}
        />
      }
    />
  );
};
