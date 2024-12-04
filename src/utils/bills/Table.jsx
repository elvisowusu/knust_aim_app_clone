import PropTypes from "prop-types";
export const Table = ({ headers, data, style }) => (
  <table className="w-full border mt-4 text-[0.8rem]">
    <thead className="bg-gray-50">
      <tr className="bg-[#f3f6f9]">
        {headers.map((header, index) => (
          <th
            key={index}
            className={`outline-none border border-[#e9ebec] px-4 py-3 text-left ${index === 0 ? "" : ` ${style}`}`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index} className="border odd:bg-[#363D4805]">
          {row.map((cell, idx) => (
            <td
              key={idx}
              className={`border border-[#e9ebec] px-4 py-3 text-left ${idx === 0 ? "" : `${style}`}`}
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
  style: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])
    )
  ).isRequired,
};
