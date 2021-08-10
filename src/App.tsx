import { inject, observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/home";
import AppStore from "./Store";

@inject("appStore")
@observer
export default class App extends React.Component<{
  appStore?: AppStore;
}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
