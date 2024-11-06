import { Layout } from "../../../utils/Layout";
import { StatusCheckerItems } from "../../../utils/StatusCheckerItems";
import { FaCircleCheck } from "react-icons/fa6";

export const StatusChecker = () => {
  return (
    <Layout
      style={"mb-[1.5rem]"}
      mainHeadText={"ACADEMIC STATUS CHECKER"}
      mainContent={
        <>
          <section className="grids sm:grid-cols-2 gap-y-[2.5rem] xl:grid-cols-3 border-[#d9f1e1] mt-5 mb-[2.6rem] px-6">
            {StatusCheckerItems.map(
              ({ heading, complete, incomplete, index }) => {
                return (
                  <section key={index} className="shadow-sm">
                    <div className="flex justify-between items-center px-5  border h-[3.5rem] rounded-t-md border-[#13c56b] border-b-0">
                      <h3 className=" text-[#515155]">{heading}</h3>
                      <FaCircleCheck size={27} className="text-[#13c66c] " />
                    </div>
                    <p className="pt-3 px-5 text-sm h-[8.2rem] border border-[#73c79d] rounded-b-md">
                      {complete}
                    </p>
                  </section>
                );
              }
            )}
          </section>
          <hr className="mb-[0.5rem] border-none w-[90%] h-[0.05rem] bg-gray-200" />
        </>
      }
    />
  );
};
