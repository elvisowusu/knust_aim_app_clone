import { Table } from "./Table";

export const TransactionUtils = () => {
  const transactionData = [
    {
      academicYear: "2020/2021",
      semester: "First Semester",
      acdYr: "Year 1",
      type: "Bill",
      narrative: "Academic Facility User Fees",
      amount: -408.57,
      balance: -408.57,
      date: "01 Jul 2020",
    },
    {
      academicYear: "2020/2021",
      semester: "First Semester",
      acdYr: "Year 1",
      type: "Bill",
      narrative: "Others",
      amount: -1075.9,
      balance: -1484.47,
      date: "01 Jul 2020",
    },
  ];

  const headers = [
    "Academic Year",
    "Semester",
    "Narrative",
    "Amount (GHS)",
    "Balance (GHS)",
    "Date",
  ];

  return (
    <div id="transactions" className="mb-[5.5rem] min-h-[14.7rem]">
      <div className="overflow-x-auto text-sm font-Rubik font-normal">
        <Table
          headers={headers}
          data={transactionData.map((item) => [
            `${item.academicYear} | ${item.semester} (${item.acdYr})`,
            item.type,
            item.narrative,
            item.amount.toFixed(2),
            item.balance.toFixed(2),
            item.date,
          ])}
        />
      </div>
    </div>
  );
};
