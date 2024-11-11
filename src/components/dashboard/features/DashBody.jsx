import { MainDashBoard } from "./MainDashBoard";
import { CourseRegistration } from "./CourseRegistration";

export const DashBody = () => {
  return (
    <div className="p-6 pt-[6rem] bg-[#f2f6f9] flex flex-col items-center ">
      {/* <MainDashBoard /> */}
      <CourseRegistration />
    </div>
  );
};
