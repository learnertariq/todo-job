import { useEffect } from "react";
import { signOut } from "firebase/auth";
import auth from "../../utils/firebase.init";
import userService from "../../service/userService";
import { Spinner } from "react-bootstrap";

const Logout = () => {
  useEffect(() => {
    userService.logout();
    signOut(auth);
    window.location = "/";
  }, []);

  return (
    <div className="container text-center my-5">
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default Logout;
