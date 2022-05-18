import React from "react";

const TableRow = () => {
  return (
    <tr>
      <td>1</td>
      {Array.from({ length: 4 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  );
};

export default TableRow;
