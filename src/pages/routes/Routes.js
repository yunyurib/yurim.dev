import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Home } from "../Index";
export const Routes = () => {
  return (
    <RoutesWrapper>
      <Route exact path="/" component={Home} />
    </RoutesWrapper>
  );
};
const RoutesWrapper = styled.div``;
