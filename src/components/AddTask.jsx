import React from "react";
import { Button, Form } from "react-bootstrap";
import http from "../service/http";

const AddTask = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const desc = e.target.desc.value;

    try {
      const { data } = await http.post("/tasks", { name, desc });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
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
