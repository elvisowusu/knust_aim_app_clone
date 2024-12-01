import PropTypes from "prop-types";
export const Table = ({ headers, data }) => (
  <table className="w-full border">
    <thead className="bg-gray-50">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className={`border-b px-4 py-3 ${index === 0 ? "text-left" : "text-right"}`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index} className="border-b">
          {row.map((cell, idx) => (
            <td
              key={idx}
              className={`px-4 py-3 ${idx === 0 ? "text-left border-r" : "text-right"}`}
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
// Prop Type Validation
Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])
  ).isRequired,

  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])
    )
  ).isRequired,
};
