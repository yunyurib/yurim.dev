import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export function Footer() {
  return (
    <FooterWrapper className="Mbox-shadow">
      <p className="box-inner">
        Copyright 2020. Web Front-end developer portfolio-- by yurim ✌
      </p>
    </FooterWrapper>
  );
}
const FooterWrapper = styled.footer`
  width: 100%;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  text-align: center;
  padding: 1rem 0;
  margin-top: 3rem;
`;
