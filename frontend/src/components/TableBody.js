import React from "react";

const TableBody = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : "——";
              return <td className="items-center font-semibold  text-gray-600 dark:text-gray-300" key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
