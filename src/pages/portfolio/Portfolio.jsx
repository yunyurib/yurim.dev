import React,{useState} from "react";
import styled from "styled-components";

import { Morebutton } from "../../components/morebutton/Morebutton";
import { PortfolioData } from "./Portfolio.data";

export function Portfolio() {
  // const [currentCategory, setCurrentCategory] = useState('all');

  // more button
  const [PortfolioItemLine, setPortfolioItemLine] = useState(1);
  const PortfolioItemLineEvent = () => {
    const count = PortfolioItemLine + 1;
    setPortfolioItemLine(count);
  };

  // createPortfolioItem li
  const createPortfolioItem = PortfolioData.filter(
    (data, index) => index <= PortfolioItemLine * 3 - 1
  ).map((data, index) => {
    return (
      <PortfolioItem className="Mbox-shadow">
        <div className="rightBox Sbox-shadow">
          <img src={data.imgSrc} alt={data.title} className="Sbox-shadow" />
        </div>
        <div className="leftBox">
          <h3>
          {data.title}<span className="period-mark">.</span>
          </h3>
          <p>- {data.days}</p>
          <p>- {data.purpose}</p>
          <p>- {data.keyword}</p>
          <p>- 개발언어 : {data.languageDevelopment}</p>
          <a href={data.link} title={data.title} className="Sbox-shadow">
            PDF
          </a>
          <a href={data.pdf} title={data.title} className="Sbox-shadow">
            Link
          </a>
        </div>
      </PortfolioItem>
    );
  });
  return (
    <PortfolioWrapper>
      <PortfolioNav className="box-inner">
        <div className="Sbox-shadow act">
          all
        </div>
        <div className="Sbox-shadow">
          renewal
        </div>
        <div className="Sbox-shadow">
          project
        </div>
        <div className="Sbox-shadow">
          markup
        </div>
      </PortfolioNav>
      <PortfolioSection className="box-inner">
        <h2>Portfolio</h2>
        <PortfolioList>
          {/* {currentCategory === 'all' | currentCategory === 'renewal' && {createPortfolioItem}} */}
          {createPortfolioItem}
          <Morebutton btnEvent={PortfolioItemLineEvent} />
        </PortfolioList>
      </PortfolioSection>
    </PortfolioWrapper>
  );
}
const PortfolioWrapper = styled.main``;
const PortfolioNav = styled.nav`
  padding-top: 7rem;
  > div {
    border-radius: 2rem;
    display: inline-block;
    padding: 0.5rem 3rem;
    margin: 0.5rem 1rem;
    cursor: pointer;
  }
  & .act {
    color: var(--blue);
    font-weight: bold;
  }
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
  }
  & .rightBox img {
    width: 100%;
    border-radius: 1.5rem;
  }
  & .leftBox p {
    line-height: 2rem;
  }
  & .leftBox a {
    border-radius: 2rem;
    display: inline-block;
    padding: 0.5rem 3rem;
    margin: 1rem;
  }
  & .leftBox a:hover{
    color:var(--blue);
  }
`;
