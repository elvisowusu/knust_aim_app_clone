import { FiCheckCircle } from "react-icons/fi";
import { Layout } from "../../../utils/Layout";
import {
  GraduateDetails,
  GraduationItems,
} from "../../../utils/items/GraduationItems";
import { Table } from "../../../utils/bills/Table";

const Graduation = () => {
  return (
    <Layout
      mainHeadText="GRADUATION"
      mainContent={
        <section className="border-[#d9f1e1] font-Montserrat mt-5 px-6">
          <h1 className="mb-2 text-red-500">{GraduationItems[0].heading}</h1>
          <p className="mb-[0.5rem]">{GraduationItems[0].passage}</p>
          {GraduationItems.slice(1).map(({ heading, passage }, index) => (
            <div key={index} className="flex gap-4">
              <FiCheckCircle className="shrink-0 mt-[0.4rem] text-[#5ab887] rounded-full bg-[#d9f7e7]" />
              <div className="">
                <h3 className="text-[#13c56b]">{heading}</h3>
                <p className="mt-[0.6rem] mb-[0.6rem]">{passage}</p>
              </div>
            </div>
          ))}
          <div className="font-Rubik font-medium text-left">
            <Table
              style={"font-normal"}
              headers={[]}
              data={GraduateDetails.map((item) => [item.name, item.detail])}
            />
          </div>
        </section>
      }
      baseStyle={"h-[6.5rem] sm:h-[4rem]"}
    />
  );
};
export default Graduation;