import { DashboardItems } from "../../../utils/items/DashboardItems";
import { useState } from "react";
import { GeneralError } from "../../../utils/error/GeneralError";
import { useNavigate } from "react-router-dom";

const MainDashBoard = () => {
  const [errorStatus, setErrorStatus] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    switch (item.action) {
      case "openUrl":
        window.open(item.link, "_blank", "noopener,noreferrer");
        break;
      case "download": {
        const link = document.createElement("a");
        link.href = item.link;
        link.download = item.downloadName || "document.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      }
      case "showError":
        setErrorStatus(true);
        break;
      default:
        // If no specific action, try to navigate
        if (item.link && item.link.startsWith("/")) {
          navigate(item.link);
        } else {
          console.warn("No action defined for this item:", item);
        }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-4">
      {DashboardItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(item)}
          className="bg-white h-[15.5rem] cursor-pointer shadow-sm hover:bg-green-50 hover:border hover:border-green-600 p-4 rounded-[0.2rem] transition-all duration-300 ease-in-out"
        >
          <img
            className="h-[3rem] w-[3rem] mb-4"
            src={item.icon}
            alt={item.heading}
          />
          <h2 className="text-[#007427] font-medium font-Rubik text-[1.2rem] mb-2">
            {item.heading}
          </h2>
          <p className="text-[0.95rem] line-clamp-3">{item.description}</p>
        </div>
      ))}
      {errorStatus && (
        <GeneralError status={errorStatus} setStatus={setErrorStatus} />
      )}
    </div>
  );
};

export default MainDashBoard;
