import { useState } from "react";
import { Btn, Layout } from "../../../utils/Layout";
import { DropDown } from "../../../utils/DropDown";

const RegistrationSlip = () => {
  const [year, setYear] = useState("-------");
  const [semester, setSemester] = useState("-------");
  return (
    <Layout
      style={
        "w-[99%]  md:w-[82%] h-[32rem] sm:h-[29.7rem] mb-[3rem] sm:mb-[7.8rem]"
      }
      headerStyle={"h-[7.5rem] sm:h-[8.2rem]"}
      mainHeadText="REGISTRATION SLIP"
      mainContent={
        <section className="text-center h-[18rem]  pt-[1.5rem]">
          <DropDown
            label="Select Academic Year"
            options={[
              "-------",
              "2023-2024",
              "2022-2023",
              "2021-2022",
              "2020-2021",
            ]}
            value={year}
            onChange={setYear}
            width={"w-[9rem] pl-[2rem]"}
          />
          <DropDown
            label="Select Semester"
            options={["-------", "Second Semester", "First Semester"]}
            value={semester}
            onChange={setSemester}
            width={"w-[12.5rem] pl-[3rem]"}
          />
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
export default RegistrationSlip;
