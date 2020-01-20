import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../Layouts/PageLayout'

import Bids from './Bids'
import Buyers from './Buyers'
import Competitions from './Competitions'
import Sellers from './Sellers'
import TopTen from './TopTen'
import Home from './Home'

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/bids" component={Bids} />
        <Route path="/buyers" component={Buyers} />
        <Route path="/topten" component={TopTen} />
        <Route path="/sellers" component={Sellers} />
        <Route path="/competitions" component={Competitions} />
      </Layout>
    </Switch>
  )
}

export default Routes
