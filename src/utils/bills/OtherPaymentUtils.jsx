import { Table } from "./Table";

export const OtherPaymentUtils = () => {
  const otherPaymentsData = [
    {
      academicYear: "2020/2021",
      semester: "First Semester",
      acdYr: "Year 1",
      type: "PAYMENT",
      narrative: "ONLINE: Paystack Payment for GRADUATION for 20724143 - WP",
      amount: 450,
      balance: 450.0,
      date: "21 Nov 2024",
      action: "",
    },
  ];
  const tableHeading = [
    "Academic Year",
    "Type",
    "Narrative",
    "Amount(GHS)",
    "Balance(GHS)",
    "Date",
    "Action",
  ];
  return (
    <div id="otherPayments" className="mb-[5.5rem] min-h-[14.7rem]">
      <div className="overflow-x-auto text-sm font-Rubik font-normal">
        <Table
          headers={tableHeading}
          data={otherPaymentsData.map((item) => [
            `${item.academicYear} | ${item.semester} (${item.acdYr})`,
            item.type,
            item.narrative,
            item.amount.toFixed(2),
            item.balance.toFixed(2),
            item.date,
          ])}
        />
      </div>{" "}
    </div>
  );
};
