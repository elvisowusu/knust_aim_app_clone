import { StatusCheckerItems } from "../../../utils/StatusCheckerItems";
import { FaArrowLeftLong, FaCircleCheck } from "react-icons/fa6";

export const StatusChecker = () => {
  return (
    <div className="mb-[1.2rem] bg-white md:w-[83%]">
      <section className="flex flex-col border-b-2 border-[#d9f1e1] justify-center items-center bg-[#D9F1E1] w-full h-[9.6rem] ">
        <h1 className="text-[#504e51] text-center text-[1.6rem] px-6 font-medium ">
          ACADEMIC STATUS CHECKER
        </h1>
      </section>

      <section className="grids lg:grid-cols-2 xl:grid-cols-3 border-[#d9f1e1] mt-5 mb-9 px-6">
        {StatusCheckerItems.map(({ heading, complete, incomplete, index }) => {
          return (
            <section key={index}>
              <div className="flex justify-between items-center px-5  border h-[3.5rem] rounded-t-md border-[#73c79d]">
                <h3 className="font-medium text-[#515155]">{heading}</h3>
                <FaCircleCheck size={27} className="text-[#13c66c] " />
              </div>
              <p className="pt-3 px-5 text-sm h-[8.2rem] border border-[#73c79d] rounded-b-md">
                {complete}
              </p>
            </section>
          );
        })}
      </section>
        <div className="flex justify-center w-full items-center h-[4rem] my-4 mb-6 text-center">
          <button className="border text-red-400 hover:text-white hover:bg-red-400 hover:border-none ease-out transition-all 2s  font-medium w-fit text-sm py-[0.5rem] px-3 rounded-[0.2rem] border-red-400 flex justify-center items-center">
            <FaArrowLeftLong size={11} />
            Back to Main Menu
          </button>
        </div>
    </div>
  );
};
