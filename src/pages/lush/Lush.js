import React, { useState } from "react";
import styled from "styled-components";
import { LushDetailItemData } from "./Lush.data";
import { Morebutton } from "../../components/morebutton/Morebutton";

export function Lush() {
  // Lush DetailItem More button
  const [LushDetailItemLine, setLushDetailItemLine] = useState(1);
  const LushDetailItemLineCountEvent = () => {
    const count = LushDetailItemLine + 1;
    setLushDetailItemLine(count);
  };

  // Lush DetailItem
  const createLushDetailItem = LushDetailItemData.filter(
    (data, index) => index <= LushDetailItemLine * 3 - 1
  ).map((data, index) => {
    return (
      <a
        key={index}
        className="Mbox-shadow LushDesinList__Link"
        href={data.href}
        target="blank"
      >
        <img
          className="LushDesinList__Img Sbox-shadow"
          src={data.src}
          alt={data.title}
        />
        <h3>
          <span>{data.brand}</span>
          {data.title}
        </h3>
      </a>
    );
  });

  return (
    <LushWrapper>
      <LushSection className="box-inner">
        <h2 className="box__title">
          LUSH KOREA<span className="period-mark">.</span>
        </h2>
        <LushList>
          <div className="Mbox-shadow">
            <div className="row-left">
              <h3>
                INFO
                <span className="period-mark">.</span>
              </h3>
              <span className="row__span">Web designer 아르바이트</span>
              <span className="row__span">UI/UX팀</span>
              <span className="row__span">2019.09~2019.10</span>
            </div>
            <div className="row-right">
              <div className="project">
                <h4 className="Sbox-shadow">
                  웹 디자인
                  <span className="period-mark">.</span>
                </h4>
                <p>- 담당업무 : </p>
                <p className="project__work__list">
                  : 템플릿 가이드 기반에 맞춰 제작
                </p>
                <p className="project__work__list">
                  : 신제품 상세 페이지작업, 누끼 / 보정작업
                </p>
                <p className="project__work__list">: 신제품 목록 정리</p>
                <p className="project__work__list">
                  : 성분 서치 후 제품의 성분 표시
                </p>
              </div>
            </div>
          </div>
        </LushList>
      </LushSection>
      <LushSection className="box-inner">
        <h2 className="box__title">
          Detail Page<span className="period-mark">.</span>
        </h2>
        <p>상세페이지</p>
        <LushDesinList>{createLushDetailItem}</LushDesinList>
        <Morebutton btnEvent={LushDetailItemLineCountEvent} />
      </LushSection>
    </LushWrapper>
  );
}
const LushWrapper = styled.main``;
const LushSection = styled.section`
  padding-top: 4rem;
  & .box__title {
    margin: 4rem 0 0rem !important;
    border-radius: 3rem;
    padding: 0.5rem;
  }
  > p {
    margin-bottom: 3rem;
    padding: 0.7rem;
  }
`;
const LushList = styled.div`
  > .Mbox-shadow {
    display: flex;
    padding: 3rem 4rem;
    border-bottom: 2px solid #eee;
    border-radius: 3rem;
  }
  & h3 {
    font-size: 2rem;
    margin: 0 0 1rem;
  }
  & h4 {
    font-size: 1.2rem;
    margin: 0 0 1rem;
    padding: 0.3rem 2rem;
    border-bottom: 2px solid #eee;
    border-radius: 3rem;
  }
  > .Mbox-shadow > .row-left {
    flex-basis: 18rem;
    padding-right: 1rem;
    flex-shrink: 0;
  }
  > .Mbox-shadow > .row-left > span.row__span {
    display: block;
  }
  & .project__work__list {
    padding-left: 5rem !important;
  }
  & .project {
    margin-bottom: 2rem;
  }
  & .project a {
    color: var(--blue);
  }
  & .project p {
    padding-left: 2rem;
  }
`;
const LushDesinList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  > .Mbox-shadow {
    display: block;
    border-radius: 3rem;
    padding: 2rem;
    box-sizing: border-box;
    margin-bottom: 3rem;
  }
  & .LushDesinList__Img {
    width: 14rem;
    height: 14rem;
    border-radius: 3rem;
    border: 2rem solid rgb(241, 243, 245);
    display: block;
    box-sizing: border-box;
  }
  & h3 {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  & h3 > span {
    display: block;
    color: #8c8c8c;
    font-weight: normal;
  }
  & .LushDesinList__btn {
    width: 150px;
    text-align: center;
    padding: 0.5rem 0.1rem;
    border-radius: 2rem;
    margin: 0px auto;
  }
`;
