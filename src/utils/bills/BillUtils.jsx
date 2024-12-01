import { Table } from "./Table";

export const BillUtils = () => {
  const feeData = [
    { item: "Academic Facility User Fees", amount: 469.85 },
    { item: "Others", amount: 1208.2 },
    { item: "Field Trip", amount: 120.75 },
    { item: "Practical Training", amount: 600.0 },
    { item: "Online Teaching Support Services", amount: 100.0 },
    { item: "Total Amount", amount: 2498.8 },
  ];

  const summaryData = [
    { label: "Amount Paid", amount: 2498.79 },
    { label: "Previous Balance", amount: 0.01 },
    { label: "Amount Owed you", amount: 0.0 },
  ];

  return (
    <div
      id="bills"
      className="text-center mt-[3.2rem] sm:mt-[2.3rem] mb-[5.5rem] min-h-[14.7rem]"
    >
      <h2 className="font-medium leading-4 mb-[1rem]">
        Fee Schedule for 2023/2024 Academic Year
      </h2>

      <div className="space-y-4">
        <div className="overflow-x-auto text-sm font-Rubik font-normal">
          {/* Fee Table */}
          <Table
            headers={["Fee Item", "Amount (GH¢)"]}
            data={feeData.map((item) => [item.item, item.amount.toFixed(2)])}
          />
          {/* Summary Table */}
          <Table
            headers={["", ""]}
            data={summaryData.map((item) => [
              item.label,
              item.amount.toFixed(2),
            ])}
          />
        </div>
      </div>
    </div>
  );
};

