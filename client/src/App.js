import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/App.css";

import Routes from "./pages";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Routes} />
      </Switch>
    );
  }
}

export default App;
