import React from "react";
import { Button } from "react-bootstrap";

const TableRow = ({ task: { name, desc } }) => {
  return (
    <tr>
      <td>1</td>
      <td>{name}</td>
      <td>{desc}</td>
      <td>
        <Button variant="success" size="sm">
          Complete
        </Button>
      </td>
      <td>
        <Button variant="danger" size="sm">
          Del
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
