import { DashboardItems } from "../../../utils/DashboardItems";

export const MainDashBoard = () => {
  return (
    <div className="grids">
      {DashboardItems.map(({ icon, heading, description, index }) => {
        return (
          <div
            key={index}
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
    </div>
  );
};
