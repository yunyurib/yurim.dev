import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export function Home() {
  return (
    <HomeWrapper>
      <HomeVisual>
        <HomeVisualNav></HomeVisualNav>
      </HomeVisual>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  z-index: 15;
`;

const HomeVisual = styled.section`
  height: 500px;
  min-height: 100vh;
  z-index: 3;
  overflow: hidden;
  background-color: #1e1e1e;
`;

const HomeVisualNav = styled.nav`
  width: 100%;
  top: 0;
  padding-top: 50px;
  font-size: 15em;
  left: 0;
  position: absolute;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Squada One", cursive;
  text-align: center;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  > ul > li {
    transition: 3s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  > ul > li > a {
    transition: 1s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  > ul > li:hover a {
    color: #fff;
  }
  > ul > li:nth-child(2n + 1) {
    transform: translateX(30vw);
  }
  > ul > li:nth-child(2) {
    transform: translateX(-30vw);
  }
  > ul > li:nth-child(1):hover,
  > ul > li:nth-child(3):hover {
    transform: translateX(10vw);
    letter-spacing: 20px;
  }
  > ul > li:nth-child(2):hover {
    transform: translateX(-10vw);
    letter-spacing: 20px;
  }
`;
