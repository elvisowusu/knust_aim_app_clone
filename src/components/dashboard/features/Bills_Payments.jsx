import { useState } from "react";
import { Btn, Layout } from "../../../utils/Layout";
import { BillUtils } from "../../../utils/bills/BillUtils";
import { TransactionUtils } from "../../../utils/bills/TransactionUtils";
import { OtherPaymentUtils } from "../../../utils/bills/OtherPaymentUtils";

export const Bills_Payments = () => {
  const [activeTab, setActiveTab] = useState("bills");

  return (
    <Layout
      mainHeadText="BILLS AND PAYMENTS"
      headerStyle={"h-[7.3rem]"}
      mainBtn={<Btn name="Download Bill" />}
      style={"w-[99%]"}
      mainContent={
        <div className="w-full px-[1rem]">
          {/* Tab Buttons */}
          <div className="flex items-center h-[3.4rem] border-b-[0.1px] text-sm">
            <button
              className={`w-[33.3%] h-full ${activeTab === "bills" ? "border-b-[0.1px] border-aimMediumGreen text-aimMediumGreen" : ""}`}
              onClick={() => setActiveTab("bills")}
            >
              Bill
            </button>
            <button
              className={`w-[33.3%] h-full ${activeTab === "transactions" ? "border-b-[0.1px] border-aimMediumGreen text-aimMediumGreen" : ""}`}
              onClick={() => setActiveTab("transactions")}
            >
              Transactions
            </button>
            <button
              className={`w-[33.3%] h-full ${activeTab === "otherPayments" ? "border-b-[0.1px] border-aimMediumGreen text-aimMediumGreen" : ""}`}
              onClick={() => setActiveTab("otherPayments")}
            >
              Other Payments
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "bills" && <BillUtils />}
            {activeTab === "transactions" && <TransactionUtils />}
            {activeTab === "otherPayments" && <OtherPaymentUtils />}
          </div>
        </div>
      }
    />
  );
};
