import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";
import googleLogo from "../../assets/auth/google.png";
import "./Auth.css";
import { toast } from "react-toastify";
import userService from "../../service/userService";

const Register = () => {
  const [userState, setUserState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  ///////// Firebase methods
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  ///////// Firebase methods

  useEffect(() => {
    if (user || userGoogle) {
      if (user) toast("Sent verification email");

      userService.login({ email: userState.email });

      navigate(location?.state?.from?.pathname || "/", {
        state: location?.state,
        replace: true,
      });
    }
  }, [user, userGoogle]);

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const newUserState = { ...userState };
    newUserState[name] = value;
    setUserState(newUserState);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // creating user
    await createUserWithEmailAndPassword(userState.email, userState.password);
    // update display name
    await updateProfile(user, { displayName: userState.name });
  };

  if (loading || updating || loadingGoogle) {
    return (
      <div className="container text-center my-5">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <div className="form-container mx-auto mt-5 px-2 py-5 p-sm-5">
      <Form className="form" onSubmit={handleRegister}>
        <h1 className="text-center text-primary mb-3">Register</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            required
            onBlur={handleBlur}
            name="name"
            type="text"
            placeholder="Enter Your Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            onBlur={handleBlur}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            onBlur={handleBlur}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {(error || updateError || errorGoogle) && (
          <p className="text-error">
            {error?.message || updateError?.message || errorGoogle?.message}
          </p>
        )}

        <Button
          className="form-btn fw-bold px-4 py-2 text-uppercase"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <div className="text-center pt-3">
        <Button
          as={Link}
          to="/login"
          className="fw-bold text-primary"
          variant="outline"
          type="submit"
        >
          Already have an account?
        </Button>
      </div>
      <div className="text-center my-4 border-top pt-3">
        <Button
          className="form-btn fw-bold px-4 py-2 text-uppercase bg-white"
          variant="outline"
          type="submit"
          onClick={() => signInWithGoogle()}
        >
          <img className="me-2" src={googleLogo} alt="Google logo" />
          <span className="align-middle">Login with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default Register;
