export const OtherPaymentUtils = () => {
  const otherPaymentsData = [
    {
      type: "Library Fees",
      dueDate: "2024-03-30",
      amount: 50.0,
      status: "Pending",
    },
    {
      type: "Student ID Card",
      dueDate: "2024-02-15",
      amount: 25.0,
      status: "Paid",
    },
  ];
  return (
    <div id="otherPayments" className="mb-[5.5rem]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 border-b">Payment Type</th>
              <th className="text-left px-4 py-3 border-b">Due Date</th>
              <th className="text-right px-4 py-3 border-b">Amount(GH¢)</th>
              <th className="text-left px-4 py-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {otherPaymentsData.map((payment, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-3">{payment.type}</td>
                <td className="px-4 py-3">
                  {new Date(payment.dueDate).toLocaleDateString()}
                </td>
                <td className="text-right px-4 py-3">
                  {payment.amount.toFixed(2)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
