import React from "react";
import styled from "styled-components";

export function ScrollTop() {
  const scrollTop = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };
  return (
    <ScrollTopWrapper>
      <ScrollTopButton
        type="button"
        onClick={scrollTop}
        className="Sbox-shadow"
      >
        👆
      </ScrollTopButton>
    </ScrollTopWrapper>
  );
}
const ScrollTopWrapper = styled.aside``;
const ScrollTopButton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 50%;
  font-size: 1.5rem;
  text-align: center;
  z-index: 999;
  outline: none;
  padding: 0.8rem 1.3rem 1rem 1.3rem;
`;
