import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRouteLogin({ children, ...rest }) {
  const state = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={() => {
        return state.user.photo === null ? children : <Redirect to="/feed" />;
      }}
    ></Route>
  );
}

export default PrivateRouteLogin;
