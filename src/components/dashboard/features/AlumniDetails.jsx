import { AlumniItems } from "../../../utils/items/AlumniItems";
import { Btn, Layout } from "../../../utils/Layout";

const AlumniDetails = () => {
  return (
    <Layout
      mainHeadText="ALUMNI INFORMATION"
      mainBtn={<Btn name="Update" />}
      baseStyle={"flex-row "}
      style={"w-[93%] sm:w-[80%] md:w-[93%] lg:w-[70%]"}
      mainContent={
        <section className="mb-5">
          <p className="text-aimMediumGreen px-[1.2rem] my-[1.05rem]">
            Please review and edit your Alumni Information to ensure all
            required fields (marked with red asterisks{" "}
            <span className="text-red-500">*</span>) are verified, filled, and
            completed for accuracy and completeness.
          </p>
          <hr className="mb-[1rem] border-none w-full h-[0.05rem] bg-gray-200 " />
          {AlumniItems.map((item, index) => {
            return (
              <form key={index} action="" className="px-[1.2rem]">
                <div className="flex flex-col md:flex-row h-[5rem] justify-between text-[0.85rem]">
                  <label
                    htmlFor=""
                    className="font-Rubik font-normal  mb-[0.5rem]"
                  >
                    {item.label}
                  </label>
                  <input
                    className={`pl-[0.9rem] border border-[#ced4da] outline-none mb-[0.5rem] md:w-[50%] h-[2.3rem] rounded-[0.3rem] focus:border-[#b3c8f3] ${item.placeholder === "" ? "h-[1rem] disabled:" : ""}`}
                    type={item.type}
                    placeholder={item.placeholder}
                    disabled={item.label === "StudentId"}
                  />
                </div>
              </form>
            );
          })}
        </section>
      }
    />
  );
};
export default AlumniDetails;
