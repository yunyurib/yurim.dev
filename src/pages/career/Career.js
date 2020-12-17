import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Career() {
  return (
    <CareerWrapper>
      <CareerSection className="box-inner">
        <h2 className="box__title">
          Career<span className="period-mark">.</span>
        </h2>
        <CareerSkillList>
          <div className="Mbox-shadow">
            <div>
              <img
                src="https://image.player.co.kr/resource/store/brand/201710111608526586.jpg"
                alt=""
                className="Sbox-shadow"
              />
              <h3>
                FMJ인터내셔널<span>2018.03 ~ 2019.04</span>
              </h3>
            </div>
            <Link className="Sbox-shadow" to="/">
              Explore
            </Link>
          </div>
        </CareerSkillList>
      </CareerSection>

      <CareerSection className="box-inner">
        <h2 className="box__title">
          Experience<span className="period-mark">.</span>
        </h2>
        <CareerSkillList>
          <div className="Mbox-shadow">
            <div>
              <img
                src="https://image.player.co.kr/resource/store/brand/201710111608526586.jpg"
                alt=""
                className="Sbox-shadow"
              />
              <h3>
                LUSH KOREA<span>2019.09~2019.10</span>
              </h3>
            </div>
            <Link className="Sbox-shadow" to="/">
              Explore
            </Link>
          </div>
        </CareerSkillList>
      </CareerSection>
    </CareerWrapper>
  );
}
const CareerWrapper = styled.main``;
const CareerSection = styled.section`
  padding-top: 4rem;
`;
const CareerSkillList = styled.div`
  display: flex;
  .Mbox-shadow {
    width: 50%;
    padding: 2rem;
    border-radius: 2rem;
  }
  .Mbox-shadow > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .Mbox-shadow > div > h3 {
    padding: 0 2rem;
    font-size: 1.5rem;
  }
  .Mbox-shadow > div > h3 > span {
    display: block;
    font-size: 1rem;
    color: #bbb;
  }
  > .Mbox-shadow > a {
    display: block;
    padding: 0.5rem 0.1rem;
    width: 150px;
    border-radius: 2rem;
    text-align: center;
    margin: 0 auto;
    transition: 0.5;
  }
  > .Mbox-shadow > a:hover {
    color: var(--blue);
  }
  & img {
    border-radius: 50%;
    width: 6rem;
  }
`;
