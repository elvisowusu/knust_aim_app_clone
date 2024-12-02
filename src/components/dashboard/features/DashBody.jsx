import { AssessLecturer } from "./AssessLecturer";
import { MainDashBoard } from "./MainDashBoard";
import { CheckResults } from "./CheckResults";

export const DashBody = () => {
  return (
    <div className="p-6 pt-[6rem] bg-[#f2f6f9] flex flex-col items-center ">
      <CheckResults/>
    </div>
  );
};
