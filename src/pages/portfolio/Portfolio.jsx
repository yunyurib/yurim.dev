import React, { useState } from "react";
import styled from "styled-components";

import { Morebutton } from "../../components/morebutton/Morebutton";
import { PortfolioData } from "./Portfolio.data";
import { CATEGORY_LIST } from "../../type/typeList";

export function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [PortfolioItemLine, setPortfolioItemLine] = useState(1);

  const clickNav = (event) => {
    const navInnerText = event.target.innerText;
    setCurrentCategory(navInnerText);
    setPortfolioItemLine(1);
  };

  // category list component
  const categoryList = CATEGORY_LIST.map((cate, index) => {
    return (
      <PortfolioNavItem
        key={index}
        className="Sbox-shadow"
        onClick={clickNav}
        color={currentCategory === cate ? "var(--blue)" : "#000"}
      >
        {cate}
      </PortfolioNavItem>
    );
  });

  // more button
  const PortfolioItemLineEvent = () => {
    const count = PortfolioItemLine + 1;
    setPortfolioItemLine(count);
  };

  // createPortfolioItem li
  const createPortfolioItem = PortfolioData.filter((data) => {
    return currentCategory === "all" ? data : currentCategory === data.purpose;
  })
    .filter((data, index) => index <= PortfolioItemLine * 3 - 1)
    .map((data, index) => {
      return (
        <PortfolioItem key={index} className="Mbox-shadow">
          <div className="rightBox Sbox-shadow">
            <img src={data.imgSrc} alt={data.title} className="Sbox-shadow" />
          </div>
          <div className="leftBox">
            <h3>
              {data.title}
              <span className="period-mark">.</span>
            </h3>
            <p>- {data.days}</p>
            <p>- {data.purpose}</p>
            <p>- {data.keyword}</p>
            <p>- 개발언어 : {data.languageDevelopment}</p>
            <a
              href={data.link}
              title={data.title}
              className="Sbox-shadow"
              target="blank"
            >
              PDF
            </a>
            <a
              href={data.pdf}
              title={data.title}
              className="Sbox-shadow"
              target="blank"
            >
              Link
            </a>
          </div>
        </PortfolioItem>
      );
    });
  return (
    <PortfolioWrapper>
      <PortfolioNav className="box-inner">
        <PortfolioNavList>{categoryList}</PortfolioNavList>
      </PortfolioNav>
      <PortfolioSection className="box-inner">
        <h2>Portfolio</h2>
        <PortfolioList>
          {createPortfolioItem}
          <Morebutton btnEvent={PortfolioItemLineEvent} />
        </PortfolioList>
      </PortfolioSection>
    </PortfolioWrapper>
  );
}
const PortfolioWrapper = styled.main`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
const PortfolioNav = styled.nav`
  padding-top: 7rem;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding-top: 6rem;
  }
`;
const PortfolioNavList = styled.ul`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    margin: 0 0.5rem;
    width: 20%;
    box-sizing: border-box;
    text-align: center;
    padding: 0.5rem;
  }
`;
const PortfolioNavItem = styled.li`
  border-radius: 2rem;
  display: inline-block;
  padding: 0.5rem 3rem;
  margin: 0.5rem 1rem;
  cursor: pointer;
  color: ${(props) => props.color};
`;
const PortfolioSection = styled.section`
  padding-top: 1rem;
  > h2 {
    display: none;
  }
`;
const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const PortfolioItem = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem;
  border-radius: 2rem;
  margin-bottom: 3rem;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: block;
  }
  & h3 {
    font-size: 3rem;
  }
  & .rightBox,
  &.leftBox {
    width: 50%;
    box-sizing: border-box;
  }
  & .rightBox {
    width: 50%;
    padding: 1.5rem;
    border-radius: 2rem;
    margin-right: 3rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      width: 100%;
      padding: 0;
      border-radius: 2rem;
      margin-right: 0;
    }
  }
  & .rightBox img {
    width: 100%;
    border-radius: 1.5rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      background: none;
      box-shadow: none;
    }
  }
  & .leftBox p {
    line-height: 2rem;
  }
  & .leftBox a {
    border-radius: 2rem;
    display: inline-block;
    padding: 0.5rem 3rem;
    margin: 1rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      padding: 0.5rem 0rem;
      width: 35%;
      box-sizing: border-box;
      text-align: center;
    }
  }
  & .leftBox a:hover {
    color: var(--blue);
  }
`;
