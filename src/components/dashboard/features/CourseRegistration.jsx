import { CourseRegistrationItems } from "../../../utils/CourseRegistrationItems";
import { FiCheckCircle } from "react-icons/fi";
import { Btn, Layout } from "../../../utils/Layout";
import error from "../../../assets/error.gif";
import { useState } from "react";

export const CourseRegistration = () => {
  const [complete, setComplete] = useState(false);

  return (
    <Layout
      mainHeadText={"REGISTRATION INSTRUCTIONS"}
      mainContent={
        <section className="border-[#d9f1e1] mt-5 px-6">
          {complete && (
            <CourseRegistrationComplete
              setStatus={setComplete}
              status={complete}
            />
          )}
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
            setComplete(!complete);
          }}
          name={"Proceed to Course Registration"}
        />
      }
    />
  );
};

export const CourseRegistrationComplete = ({ status, setStatus }) => {
  return (
    <div
      className="fixed flex justify-center items-center right-0 w-full z-50
       left-0 h-full top-0"
    >
      <div
        className="absolute right-0 w-full z-50 opacity-30 bg-[#000000]
       left-0 h-full top-0"
        onClick={() => {
          setStatus(!status);
        }}
      ></div>
      <div className="bg-white  z-50 flex flex-col items-center h-[17.8rem] rounded-[0.4rem] w-[95%]  px-[2rem] sm:w-[32rem] text-center">
        <img
          src={error}
          alt="Placeholder GIF"
          className="w-[6rem] my-[1.9rem]"
        />
        <h3 className="font-Montserrat font-semibold leading-5 text-[#495057]">
          No courses have been set up for registration. Please contact your
          examination officer.
        </h3>
        <button
          className="bg-[#ed5e5e] hover:bg-[#c95050] ease-in duration-100 text-white py-[0.5rem] px-[0.8rem] mt-4 rounded-[0.3rem] text-sm"
          onClick={() => {
            setStatus(!status);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
