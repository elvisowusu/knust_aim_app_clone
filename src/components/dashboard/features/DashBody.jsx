import { StatusChecker } from "./StatusChecker";
import { CourseRegistration } from "./CourseRegistration";
import { RegistrationSlip } from "./RegistrationSlip";
import { CheckResults } from "./CheckResults";
import { AssessLecturer } from "./AssessLecturer";
import { Bills_Payments } from "./Bills_Payments";
import { Graduation } from "./Graduation";
import { MainDashBoard } from "./MainDashBoard";
import { AlumniDetails } from "./AlumniDetails";

export const DashBody = () => {
  return (
    <div className="p-6 pt-[6rem] bg-[#f2f6f9] flex flex-col items-center ">
      <MainDashBoard />
    </div>
  );
};
