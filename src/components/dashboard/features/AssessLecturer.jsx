import { FiCheckCircle } from "react-icons/fi";
import { Btn, Layout } from "../../../utils/Layout";
import { AssessLecturerItems } from "../../../utils/items/AssessLecturerItems";
import { useState } from "react";
import { GeneralError } from "../../../utils/error/GeneralError";

export const AssessLecturer = () => {
  const [complete, setComplete] = useState(false);
  return (
    <Layout
      mainHeadText={"LECTURER ASSESSMENT INSTRUCTIONS"}
      headerStyle={""}
      mainContent={
        <section className="border-[#d9f1e1] font-Montserrat mt-5 px-6">
          {complete && (
            <GeneralError
              setStatus={setComplete}
              status={complete}
              errorMsg={
                " Online assessment for Semester 2, 2023/2024 Academic Year is available between 22 July 2024 and 30 September 2024."
              }
            />
          )}
          <h1 className="mb-2 text-red-500">
            {AssessLecturerItems[0].heading}
          </h1>
          <p className="mb-[0.5rem]">{AssessLecturerItems[0].passage}</p>
          {AssessLecturerItems.slice(1).map(({ heading, passage }, index) => (
            <div key={index} className="flex gap-4">
              <FiCheckCircle className="shrink-0 mt-[0.4rem] text-[#5ab887] rounded-full bg-[#d9f7e7]" />
              <div className="">
                <h3 className="text-[#13c56b]">{heading}</h3>
                <p className="mt-[0.6rem] mb-[0.6rem]">{passage}</p>
              </div>
            </div>
          ))}
        </section>
      }
      baseStyle={"h-[6.5rem] sm:h-[4rem]"}
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
