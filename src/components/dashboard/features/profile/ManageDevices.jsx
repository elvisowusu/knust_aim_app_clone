
import { Layout } from "../../../../utils/Layout";
import phone from "../../../../assets/phone.png";

 const ManageDevices = () => {
  return (
    <Layout
      style={"w-[99%] min-h-[36.7rem] sm:w-[80%] md:w-[93%] lg:w-[70%]"}
      mainHeadText="MANAGE DEVICES"
      mainContent={
        <section className="flex flex-col items-center ">
          <img src={phone} alt="" className="h-[15rem] my-[3rem]" />
          <h1 className="text-red-500 text-[1.5rem]">No Devices</h1>
        </section>
      }
    />
  );
};
export default ManageDevices;