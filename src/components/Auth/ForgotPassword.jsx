import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../utils/firebase.init";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  //////////////// firebase methods
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  //////////////// firebase methods

  if (sending) {
    return (
      <div className="container text-center my-5">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  const handleResetPassword = async (e) => {
    e.preventDefault();

    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      if (!error) toast.success("Sent reset email");
      else toast.error("error resenting password");
    } else {
      toast.error("Please enter your email");
    }
  };

  return (
    <section className="container">
      <div className="form-container mx-auto mt-5 px-2 py-5 p-sm-5">
        <Form className="form" onSubmit={handleResetPassword}>
          <h1 className="text-center text-primary mb-3">Reset Password</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          {error && <p className="text-error">{error?.message}</p>}
          <Button
            className="form-btn fw-bold px-4 py-2 text-uppercase"
            variant="primary"
            type="submit"
          >
            Send password reset email
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ForgotPassword;
