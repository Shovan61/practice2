import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children, ...rest }) {
  const state = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={() => {
        return state.user.photo !== null ? children : <Redirect to="/" />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
