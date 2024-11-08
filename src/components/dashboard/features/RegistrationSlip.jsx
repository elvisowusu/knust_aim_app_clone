import { Btn, Layout } from "../../../utils/Layout";
import { IoIosArrowDown } from "react-icons/io";

export const RegistrationSlip = () => {
  return (
    <Layout
      style={"w-[98%] h-[32rem]"}
      mainHeadText="REGISTRATION SLIP"
      mainContent={
        <section className="">
          <div>
            <p className="text-sm">Select Academic Year</p>
            <DropMenu />
          </div>
        </section>
      }
      mainBtn={
        <Btn
          clickFunc={() => {
            console.log("Download Registration Slip");
          }}
          name={"Download Registration Slip"}
        />
      }
    />
  );
};

export const DropMenu = ({ style, clickFunc }) => {
  return (
    <button
      className={`${style} w-full justify-center items-center gap-3 border`}
      onClick={clickFunc}
    >
      <p className="">-------</p>
      <IoIosArrowDown className="ml-" />
    </button>
  );
};
