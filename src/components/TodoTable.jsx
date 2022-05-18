import React from "react";
import { Table } from "react-bootstrap";
import TableRow from "./TableRow";

const TodoTable = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Description</th>
          <th>Complete</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
      </tbody>
    </Table>
  );
};

export default TodoTable;
