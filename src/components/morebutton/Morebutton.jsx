import React from "react";
import styled from "styled-components";

export function Morebutton({ btnEvent }) {
  return <MorebuttonWrapper onClick={btnEvent} className="Sbox-shadow">more</MorebuttonWrapper>;
}

const MorebuttonWrapper = styled.div`
  display: flex;
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  margin: 0.5rem;
  &:hover{
    color:var(--blue);
  }
`;
