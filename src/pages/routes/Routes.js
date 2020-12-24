import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Home, Career, Fmj, Lush, Portfolio, Contact } from "../Index";
export const Routes = () => {
  return (
    <RoutesWrapper>
      <Switch>
        <Route exact path="/yurim.dev/" component={Home} />
        <Route exact path="/yurim.dev/career" component={Career} />
        <Route exact path="/yurim.dev/career/fmj" component={Fmj} />
        <Route exact path="/yurim.dev/career/lush" component={Lush} />
        <Route exact path="/yurim.dev/portfolio" component={Portfolio} />
        <Route exact path="/yurim.dev/contact" component={Contact} />
        <Redirect from="*" to="/yurim.dev/" />
      </Switch>
    </RoutesWrapper>
  );
};
const RoutesWrapper = styled.div``;
