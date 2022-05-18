import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import http from "../service/http";
import auth from "../utils/firebase.init";

const AddTask = ({ refetch }) => {
  const [user, loading, error] = useAuthState(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const desc = e.target.desc.value;

    try {
      await http.post("/tasks", { name, desc });
      refetch();
      toast.success("Task successfully Added");
    } catch (error) {
      toast.error(error.message);
    }

    // clear the form
    e.target.reset();
  };

  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control name="name" type="text" placeholder="Add Task" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          name="desc"
          as="textarea"
          rows={3}
          placeholder="Task Description"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default AddTask;
