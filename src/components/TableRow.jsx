import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import http from "../service/http";

const TableRow = ({ task: { name, desc, _id, complete }, index, refetch }) => {
  const handleComplete = async () => {
    try {
      const data = await http.patch(`/tasks/${_id}`, { complete: true });
      refetch();
      toast.success("Marked as completed");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const data = await http.delete(`/tasks/${_id}`);
      refetch();
      toast.success("Successfully deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
      {complete ? (
        <td>
          <del>{name}</del>
        </td>
      ) : (
        <td>{name}</td>
      )}
      <td>{desc}</td>
      <td>
        <Button variant="success" size="sm" onClick={handleComplete}>
          Complete
        </Button>
      </td>
      <td>
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Del
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
