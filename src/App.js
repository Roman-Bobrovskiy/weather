import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./components/Routes";
import Home from "./views/Home";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.home} component={Home} />
      </Switch>
    );
  }
}
