import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Home, Career } from "../Index";
export const Routes = () => {
  return (
    <RoutesWrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/career" component={Career} />
    </RoutesWrapper>
  );
};
const RoutesWrapper = styled.div``;
