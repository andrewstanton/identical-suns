import React from "react";
import { Alert } from "../Alert";

const returnError = error => {
  // Axios Error
  if (error !== null && error.isAxiosError) {
    if (error.response) {
      return error.response.data.errors.message;
    }
  }

  return "Oh No Something Went Wrong. Try Again";
};

export const ErrorAlert = ({ error, ...props }) => (
  <Alert modifiers="danger" {...props}>
    {returnError(error)}
  </Alert>
);
