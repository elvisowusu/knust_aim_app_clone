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
      className=" text-center mt-[3.2rem] sm:mt-[2.3rem] mb-[5.5rem] min-h-[14.7rem]"
    >
      <h2 className="font-medium leading-4 mb-[1rem]">
        Fee Schedule for 2023/2024 Academic Year
      </h2>

      <div className="space-y-4">
        <div className="overflow-x-auto text-sm font-Rubik font-normal">
          <table className="w-full border">
            <thead className="bg-gray-50">
              <tr className="">
                <th className="border-b px-4 py-3 border-r text-left w-[67%]">
                  Fee Item
                </th>
                <th className="text-right px-4 py-3 border-b">Amount(GH¢)</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((fee, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-3 border-r text-left w-[67%]">
                    {fee.item}
                  </td>
                  <td className="text-right px-4 py-3">
                    {fee.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="w-full mt-4 border">
            <tbody>
              {summaryData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-3 border-r text-left w-[67%]">
                    {item.label}
                  </td>
                  <td className="text-right px-4 py-3">
                    {item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
