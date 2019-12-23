import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../Layouts/PageLayout";

import Bids from "./Bids";
import Buyers from "./Buyers";
import Competitions from "./Competitions";
import Sellers from "./Sellers";

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={Bids} />
        <Route path="/buyers" component={Buyers} />
        <Route path="/sellers" component={Sellers} />
        <Route path="/competitions" component={Competitions} />
      </Layout>
    </Switch>
  );
};

export default Routes;
