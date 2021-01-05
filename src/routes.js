import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/registration";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
