import { IoIosArrowDropdown } from "react-icons/io";
import { Btn, Layout } from "../../../utils/Layout";

export const RegistrationSlip = () => {
  return (
    <Layout
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

import React from "react";

export const DropMenu = ({ style, clickFunc }) => {
  return (
    <button
      className={`${style} w-full inline-flex justify-center items-center gap-3 border`}
      onClick={clickFunc}
    >
      <p className="">-------</p>
      <IoIosArrowDropdown className="ml-" />
    </button>
  );
};
