import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./pages";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Routes} />
      </Switch>
    );
  }
}

export default App;
