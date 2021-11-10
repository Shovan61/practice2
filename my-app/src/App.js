import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginPage, HomePage } from "./Pages";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>

      <Route exact path="/feed">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
