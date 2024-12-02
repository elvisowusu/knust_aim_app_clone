import { AssessLecturer } from "./AssessLecturer";
import { Graduation } from "./Graduation";
import { MainDashBoard } from "./MainDashBoard";
import { OptionChange } from "./OptionChange";

export const DashBody = () => {
  return (
    <div className="p-6 pt-[6rem] bg-[#f2f6f9] flex flex-col items-center ">
      <Graduation />
    </div>
  );
};
