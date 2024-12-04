import { DashboardItems } from "../../../utils/items/DashboardItems";
import { useState } from "react";
import { GeneralError } from "../../../utils/error/GeneralError";
const MainDashBoard = () => {
  const [errorStatus, setErrorStatus] = useState(false);

  const handleCardClick = (item) => {
    switch (item.action) {
      case "openUrl":
        window.open(item.url, "_blank");
        break;
      case "download": {
        const link = document.createElement("a");
        link.href = item.file;
        link.download = "Students' Guide and Code of Conduct.pdf";
        link.click();
        break;
      }
      case "showError":
        setErrorStatus(true);
        break;
      default:
        console.warn("No action defined for this item.");
    }
  };
  return (
    <div className="grids w-full">
      {DashboardItems.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleCardClick(item)}
            className="bg-white h-[15.5rem] cursor-pointer shadow-sm hover:bg-green-50 hover:border hover:border-green-600 p-4 rounded-[0.2rem] "
          >
            <img className="h-[3rem] w-[3rem]" src={item.icon} alt="" />
            <h1 className="mt-[1.4rem] mb-[0.8rem] text-[#007427] font-medium font-Rubik text-[1.2rem]">
              {item.heading}
            </h1>
            <p className="text-[0.95rem] line-clamp-[140%]">
              {item.description}
            </p>
          </div>
        );
      })}
      {errorStatus && (
        <GeneralError status={errorStatus} setStatus={setErrorStatus} />
      )}
    </div>
  );
};
export default MainDashBoard;