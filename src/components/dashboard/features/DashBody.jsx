import { AssessLecturer } from "./AssessLecturer";
import { StatusChecker } from "./StatusChecker";
import { CourseRegistration } from "./CourseRegistration";
import { RegistrationSlip } from "./RegistrationSlip";
import { CheckResults } from "./CheckResults";
import { Bills_Payments } from "./Bills_Payments";


export const DashBody = () => {
  return (
    <div className="p-6 pt-[6rem] bg-[#f2f6f9] flex flex-col items-center ">
      {/* <StatusChecker/> */}
      {/* <CourseRegistration/> */}
      {/* <RegistrationSlip /> */}
      {/* <CheckResults/> */}
      {/* <AssessLecturer/> */}
      <Bills_Payments/>
    </div>
  );
};
