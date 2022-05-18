import React from "react";
import { Button, Form } from "react-bootstrap";

const AddTask = () => {
  return (
    <Form className="mb-5 mt-3">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Add Task" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Task Description" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default AddTask;
