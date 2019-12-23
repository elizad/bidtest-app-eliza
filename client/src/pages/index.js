import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};

export default Routes;
