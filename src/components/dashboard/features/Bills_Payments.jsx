import { useState } from "react";
import { Btn, Layout } from "../../../utils/Layout";
import { BillUtils } from "../../../utils/bills/BillUtils";
import { TransactionUtils } from "../../../utils/bills/TransactionUtils";
import { OtherPaymentUtils } from "../../../utils/bills/OtherPaymentUtils";

export const Bills_Payments = () => {
  const [activeTab, setActiveTab] = useState("Bill");
  const tabs = [
    { name: "Bill", tab: <BillUtils /> },
    { name: "Transactions", tab: <TransactionUtils /> },
    { name: "Other Payments", tab: <OtherPaymentUtils /> },
  ];

  return (
    <Layout
      mainHeadText="BILLS AND PAYMENTS"
      headerStyle={"h-[7.3rem]"}
      style={"w-[99%] md:w-[80%]"}
      mainContent={
        <div className="w-full px-[1rem]">
          {/* Tab Buttons */}
          <div className="flex items-center h-[3.4rem] border-b-[0.1px] text-sm">
            {tabs.map((tab, index) => {
              return (
                <button
                  key={index}
                  className={`w-[33.3%] h-full ${activeTab === `${tab.name}` ? "border-b-[0.1px] border-aimMediumGreen text-aimMediumGreen" : ""}`}
                  onClick={() => setActiveTab(`${tab.name}`)}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {tabs.find((tab) => tab.name === activeTab)?.tab}
          </div>
        </div>
      }
      mainBtn={<Btn name={`Download ${activeTab}`} />}
    />
  );
};
