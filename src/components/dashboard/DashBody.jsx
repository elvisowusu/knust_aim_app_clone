import { DashboardItems } from "../../utils/DashboardItems.jsx"

export const DashBody = () => {
  
  return (
    <div className="p-6 pt-[6rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-6 bg-[#f2f6f9]">
      {DashboardItems.map(({ icon, heading, description }) => {
        return (
          <>
            <div className="bg-white h-[15.5rem] cursor-pointer shadow-sm hover:bg-green-50 hover:border hover:border-green-600 p-4 rounded-[0.2rem] ">
              <img className="h-[3rem] w-[3rem]" src={icon} alt="" />
              <h1 className="mt-[1.4rem] mb-[0.8rem] text-[#007427] font-semibold text-[1.2rem]">
                {heading}
              </h1>
              <p className="text-[0.9rem] line-clamp-[140%]">{description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

{
  /* <div className="bg-red-600 h-[15.5rem] p-4 rounded-[0.2rem] ">
<img className="h-[3rem] w-[3rem]" src={biometric} alt="" />
<h1 className="mt-[1.4rem] mb-[0.8rem] text-[#007427] font-semibold text-lg">Status Checker</h1>
<p className="text-[0.9rem] line-clamp-[140%]">Discover </p>
</div> */
}
