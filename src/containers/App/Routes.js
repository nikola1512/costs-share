import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from "../About";
import Homepage from "../Home";
import NotFoundPage from "../NotFoundPage";
import Products from "../Products";
import {ABOUT_US, HOME, PRODUCTS} from "../../constants/routes";

export default function Routes() {
  return (
    <Switch>
      <Route path={PRODUCTS} exact>
        <Products/>
      </Route>
      <Route path={ABOUT_US} exact>
        <AboutPage/>
      </Route>
      <Route path={HOME} exact>
        <Homepage/>
      </Route>
      <Route path="*"  component={NotFoundPage} />
    </Switch>
  );
}
