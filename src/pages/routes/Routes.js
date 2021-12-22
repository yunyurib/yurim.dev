import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Home, Career, Portfolio } from "../Index";
export const Routes = () => {
  return (
    <RoutesWrapper>
      <Switch>
        <Route exact path="/yurim.dev/" component={Home} />
        <Route exact path="/yurim.dev/career" component={Career} />
        <Route exact path="/yurim.dev/portfolio" component={Portfolio} />
        <Redirect from="*" to="/yurim.dev/" />
      </Switch>
    </RoutesWrapper>
  );
};
const RoutesWrapper = styled.div``;
