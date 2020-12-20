import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Home, Career, Fmj, Lush } from "../Index";
export const Routes = () => {
  return (
    <RoutesWrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/career" component={Career} />
      <Route exact path="/fmj" component={Fmj} />
      <Route exact path="/Lush" component={Lush} />
    </RoutesWrapper>
  );
};
const RoutesWrapper = styled.div``;
