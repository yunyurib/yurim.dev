import React from "react";
import styled from "styled-components";

export function Morebutton({ btnEvent }) {
  return <MorebuttonWrapper onClick={btnEvent} className="Sbox-shadow">more</MorebuttonWrapper>;
}

const MorebuttonWrapper = styled.div`    
border-radius: 2rem;
margin: 0 auto;
cursor: pointer;
text-align: center;
padding: 0.5rem 2rem;
width: 50px;
padding: 0.5rem 1.5rem;  
  &:hover{
    color:var(--blue);
  }
`;
