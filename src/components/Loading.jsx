import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center mt-5">
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default Loading;
