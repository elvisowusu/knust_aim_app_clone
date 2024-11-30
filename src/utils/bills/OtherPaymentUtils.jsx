export const OtherPaymentUtils = () => {
  const otherPaymentsData = [
    {
      AcademicYear: {
        year: "2020/2021",
        semester: "First Semester",
        acdYr: "Year 1",
      },
      Type: "PAYMENT",
      Narrative: "ONLINE: Paystack Payment for GRADUATION for 20724143 - WP",
      Amount: 450,
      Balance: 450.0,
      Date: "21 Nov 2024",
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
    <div id="otherPayments" className="mb-[5.5rem] min-h-[14.7rem]">
      <div className="overflow-x-auto text-sm font-Rubik font-normal">
        <table className="w-full border">
          <thead className="bg-gray-50">
            <tr>
              {tableHeading.map((items, index) => {
                return (
                  <th key={index} className="text-left px-4 py-3 border">
                    {items}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {otherPaymentsData.map(
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
                  <td className="text-left px-4 py-3 border">
                    <span>{AcademicYear.year}</span> |
                    <span> {AcademicYear.semester}</span>
                    <span>{AcademicYear.acdYr}</span>
                  </td>
                  <td className="text-left px-4 py-3 border">{Type}</td>
                  <td className="text-left px-4 py-3 border">{Narrative}</td>
                  <td className="text-right px-4 py-3 border">
                    {Amount.toFixed(2)}
                  </td>
                  <td className="text-right px-4 py-3 border">
                    {Balance.toFixed(2)}
                  </td>
                  <td className="text-left px-4 py-3 border">{Date}</td>
                  <td>{Action}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};
