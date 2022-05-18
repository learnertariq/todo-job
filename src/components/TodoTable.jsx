import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Loading from "./Loading";
import TableRow from "./TableRow";

const TodoTable = ({ isLoading, error, data, refetch }) => {
  if (isLoading) return <Loading />;

  console.log(data);
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
        {data?.map((task, index) => (
          <TableRow
            key={task._id}
            index={index}
            task={task}
            refetch={refetch}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default TodoTable;
