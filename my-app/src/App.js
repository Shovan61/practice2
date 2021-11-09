import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage } from "./Pages";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
