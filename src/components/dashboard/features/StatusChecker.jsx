import { Layout } from "../../../utils/Layout";
import { StatusCheckerItems } from "../../../utils/StatusCheckerItems";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdArrowForward, IoMdCloseCircle } from "react-icons/io";
import PropTypes from "prop-types";
export const StatusChecker = () => {
  return (
    <Layout
      style={"mb-[1.5rem]"}
      mainHeadText={"ACADEMIC STATUS CHECKER"}
      mainContent={
        <>
          <section className="grids sm:grid-cols-2 gap-y-[2.5rem] xl:grid-cols-3 border-[#d9f1e1] mt-5 mb-[2.6rem] px-6">
            {Object.keys(StatusCheckerItems).map((heading, index) => (
              <StatusItem
                key={index}
                heading={heading}
                status={StatusCheckerItems[heading].status}
              />
            ))}
          </section>
          <hr className="mb-[0.5rem] border-none w-[90%] h-[0.05rem] bg-gray-200" />
        </>
      }
    />
  );
};

const StatusItem = ({ heading, status }) => {
  return (
    <section className="shadow-sm">
      <div
        className={`flex justify-between items-center px-5  border h-[3.5rem] rounded-t-md ${
          status === "complete" ? "border-[#13c56b]" : "border-red-500"
        } border-b-0`}
      >
        <h3 className=" text-[#515155]">{heading}</h3>
        {status === "complete" ? (
          <FaCircleCheck size={27} className="text-[#13c66c] " />
        ) : (
          <IoMdCloseCircle size={32} className="text-red-500" />
        )}
      </div>
      <div
        className={`relative pt-3 px-5 text-sm h-[8.2rem] border ${
          status === "complete" ? "border-[#73c79d]" : "border-red-500"
        } rounded-b-md`}
      >
        <p>{StatusCheckerItems[heading].description[status]}</p>
        <section className="flex justify-end items-end mt-[2rem]">
          {status === "incomplete" && (
            <button className="flex justify-center items-center text-[#13c56b] text-sm ">
              {StatusCheckerItems[heading].description.button}{" "}
              <IoMdArrowForward className="text-[#004E1A]" />
            </button>
          )}
        </section>
      </div>
    </section>
  );
};

StatusItem.propTypes = {
  heading: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
