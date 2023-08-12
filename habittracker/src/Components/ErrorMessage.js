import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert className="mt-4" variant={variant} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;