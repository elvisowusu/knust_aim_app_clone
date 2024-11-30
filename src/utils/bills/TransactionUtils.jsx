export const TransactionUtils = () => {
  const transactionData = [
    {
      AcademicYear: {
        year: "2020/2021",
        semester: "First Semester",
        acdYr: "Year 1",
      },
      Type: "Bill",
      Narrative: "Academic Facility User Fees",
      Amount: -408.57,
      Balance: -408.57,
      Date: "01 Jul 2020",
      Action: "",
    },
    {
      AcademicYear: {
        year: "2020/2021",
        semester: "First Semester",
        acdYr: "Year 1",
      },
      Type: "Bill",
      Narrative: "Others",
      Amount: -1075.9,
      Balance: -1484.47,
      Date: "01 Jul 2020",
      Action: "",
    },
    {
      AcademicYear: {
        year: "2020/2021",
        semester: "First Semester",
        acdYr: "Year 1",
      },
      Type: "Bill",
      Narrative: "Field Trip",
      Amount: -105,
      Balance: -1589.47,
      Date: "01 Jul 2020",
      Action: "",
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
    <div id="transactions" className="mb-[5.5rem]">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {tableHeading.map((items, index) => {
                return (
                  <th key={index} className="text-left px-4 py-3 border-b">
                    {items}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {transactionData.map(
              (
                {
                  AcademicYear,
                  Type,
                  Narrative,
                  Amount,
                  Balance,
                  Date,
                  Action,
                },
                index
              ) => (
                <tr key={index} className="border-b">
                  <td>
                    <span>{AcademicYear.year}</span> |
                    <span> {AcademicYear.semester}</span>
                    <span>{AcademicYear.acdYr}</span>
                  </td>
                  <td>{Type}</td>
                  <td className="px-4 py-3">{Date}</td>
                  <td className="px-4 py-3">{Narrative}</td>
                  <td className="text-right px-4 py-3">{Amount.toFixed(2)}</td>
                  <td className="text-right px-4 py-3">{Balance.toFixed(2)}</td>
                  <td>{Action}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
