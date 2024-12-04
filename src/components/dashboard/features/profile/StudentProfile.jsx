import { Btn, Layout } from "../../../../utils/Layout";
import { IoIosDocument } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import profile from "../../../../assets/profile.jpg";
import { useState } from "react";
import { PersonalDetails } from "./PersonalDetails";
import { StudentDocuments } from "./StudentDocuments";

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState("Personal Details");
  const tabs = [
    {
      name: "Personal Details",
      icon: <FaUserLarge />,
      tab: <PersonalDetails />,
    },
    { name: "Documents", icon: <IoIosDocument />, tab: <StudentDocuments /> },
  ];
  return (
    <Layout
      style={
        "w-[99%] min-h-[36.7rem] sm:w-[90%] md:w-[93%] xl:w-[99%] bg-[#f3f6f9]"
      }
      baseStyle={"flex-row "}
      mainBtn={<Btn name="Update" />}
      mainHeadText="STUDENT PROFILE"
      // headerStyle={}
      mainContent={
        <section className="flex flex-col xl:flex-row gap-[1.5rem] bg-[#f3f6f9] w-full border-none">
          <div className="text-center leading-[1.3rem] xl:h-[19rem] xl:w-[24rem] text-[#495057] flex flex-col items-center bg-white pb-[1.3rem] rounded-b-md shadow-md">
            <img
              src={profile}
              alt=""
              className="rounded-full w-[9.5rem] h-[9.5rem] border-[0.3rem] border-[#f3f6f9] my-[1rem] xl:mt-[2rem]"
            />
            <p className="font-Montserrat font-semibold">
              OWUSU, Elvis Gyasi (Mr.)
            </p>
            <p className="font-Montserrat font-semibold">
              BSC. COMPUTER SCIENCE
            </p>
            <p className="font-Montserrat">
              Student ID: <span className="font-semibold">20724143</span>
            </p>
            <p className="font-Montserrat">
              Index Number: <span className="font-semibold">5310420</span>
            </p>
          </div>
          <div className="w-full p-[1rem] bg-white rounded-sm shadow-md">
            <div className="flex items-center h-[2.5rem] border-b-[0.1px] text-sm">
              {tabs.map((tab, index) => {
                return (
                  <button
                    key={index}
                    className={`w-[50%] h-full flex gap-1 items-center justify-center ${activeTab === `${tab.name}` ? "border-b-[0.05rem] border-aimMediumGreen " : ""}`}
                    onClick={() => setActiveTab(`${tab.name}`)}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
            <div className="">
              {tabs.find((tab) => tab.name === activeTab)?.tab}
            </div>
          </div>
        </section>
      }
    />
  );
};
export default StudentProfile;
