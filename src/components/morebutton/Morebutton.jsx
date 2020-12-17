import React from "react";
import styled from "styled-components";

export function Morebutton({ btnEvent }) {
  return <MorebuttonWrapper onClick={btnEvent}>more</MorebuttonWrapper>;
}

const MorebuttonWrapper = styled.div`
  width: 8%;
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin: 40px auto;
  border: 1px solid #ccc;
  color: #ccc;
  background-color: #1d1d1d;
  position: relative;
  cursor: pointer;
  &:hover {
    border: 1px solid #02f194;
    color: #fff;
  }
  &:hover .lined {
    opacity: 1;
  }
`;
