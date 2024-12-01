import { DashboardItems } from "../../../utils/DashboardItems";
import { useState } from "react";
import { GeneralError } from "../../../utils/error/GeneralError";
export const MainDashBoard = () => {
  const [errorStatus, setErrorStatus] = useState(false);

  const handleCardClick = (heading) => {
    if (heading === "Online Class") {
      window.open("https://myclass.knust.edu.gh/login/index.php", "_blank");
    } else if (heading === "Option Change") {
      setErrorStatus(true);
    }
  };
  return (
    <div className="grids w-full">
      {DashboardItems.map(({ icon, heading, description, index }) => {
        return (
          <div
            key={index}
            onClick={() => handleCardClick(heading)}
            className="bg-white h-[15.5rem] cursor-pointer shadow-sm hover:bg-green-50 hover:border hover:border-green-600 p-4 rounded-[0.2rem] "
          >
            <img className="h-[3rem] w-[3rem]" src={icon} alt="" />
            <h1 className="mt-[1.4rem] mb-[0.8rem] text-[#007427] font-semibold text-[1.2rem]">
              {heading}
            </h1>
            <p className="text-[0.9rem] line-clamp-[140%]">{description}</p>
          </div>
        );
      })}
       {errorStatus && (
        <GeneralError
          status={errorStatus}
          setStatus={setErrorStatus}
        />
      )}
    </div>
  );
};
