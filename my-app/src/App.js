import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage, HomePage, PrivateRoute, PrivateRouteLogin } from "./Pages";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/init-firebase";
import { loginUser } from "./features/userReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        console.log(userInfo);
        dispatch(loginUser(userInfo));
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Switch>
      <PrivateRouteLogin exact path="/">
        <LoginPage />
      </PrivateRouteLogin>

      <PrivateRoute exact path="/feed">
        <HomePage />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
