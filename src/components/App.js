import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";

import Badges from "../pages/Badges";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/badges/new" component={BadgeNew}></Route>
          <Route
            exact
            path="/badges/:badgeId/edit"
            component={BadgeEdit}
          ></Route>
          <Route
            exact
            path="/badges/:badgeId"
            component={BadgeDetailsContainer}
          ></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
