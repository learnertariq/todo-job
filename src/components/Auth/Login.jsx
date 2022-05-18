import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import googleLogo from "../../assets/auth/google.png";
import auth from "../../utils/firebase.init";
import "./Auth.css";
import userService from "../../service/userService";

const Login = () => {
  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  ///////////////// Firebase methods
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  ///////////////// Firebase methods

  useEffect(() => {
    if (user || userGoogle) {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    // sign in user
    await signInWithEmailAndPassword(userState.email, userState.password);
  };

  if (loading || loadingGoogle) {
    return (
      <div className="container text-center my-5">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <section className="container">
      <div className="form-container mx-auto mt-5 px-2 py-5 p-sm-5">
        <Form className="form" onSubmit={handleLogin}>
          <h1 className="text-center text-primary mb-3">Login</h1>

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
          {(error || errorGoogle) && (
            <p className="text-error">
              {error?.message || errorGoogle?.message}
            </p>
          )}
          <Button
            className="form-btn fw-bold px-4 py-2 text-uppercase"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>

        <div className="text-center pt-3">
          <Button
            as={Link}
            to="/forgot-pass"
            className="fw-bold text-danger"
            variant="outline"
            type="submit"
          >
            Forgot password?
          </Button>
        </div>

        <div className="text-center pt-3">
          <Button
            as={Link}
            to="/register"
            className="fw-bold text-primary"
            variant="outline"
            type="submit"
          >
            Don't have an account?
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
    </section>
  );
};

export default Login;
