import { AccessToken } from "helpers/localstorage_helper";
import React from "react";
import { Navigate } from "react-router-dom";

const AuthProtected = (props) => {
  if (!localStorage.getItem(AccessToken)) {
    return <Navigate to={{ pathname: "/login" }} />;
  }
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default AuthProtected;
