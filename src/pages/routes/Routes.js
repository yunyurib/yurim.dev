import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Home, Career, Fmj, Lush, Portfolio, Contact } from "../Index";
export const Routes = () => {
  return (
    <RoutesWrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/career" component={Career} />
      <Route exact path="/fmj" component={Fmj} />
      <Route exact path="/lush" component={Lush} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </RoutesWrapper>
  );
};
const RoutesWrapper = styled.div``;
