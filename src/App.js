import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./components/Routes";
import Home from "./views/Home";
import CityPage from "./views/CityPage";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.citypage} component={CityPage} />
      </Switch>
    );
  }
}
