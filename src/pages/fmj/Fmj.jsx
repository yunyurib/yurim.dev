import React, { useState } from "react";
import styled from "styled-components";
import { FmjDetailItemData, FmjBannerItemData } from "./Fmj.data";
import { Morebutton } from "../../components/morebutton/Morebutton";

export function Fmj() {
  // Fmj DetailItem More button
  const [FmjDetailItemLine, setFmjDetailItemLine] = useState(1);
  const fmjDetailItemLineCountEvent = () => {
    const count = FmjDetailItemLine + 1;
    setFmjDetailItemLine(count);
  };

  // Fmj DetailItem
  const createFmjDetailItem = FmjDetailItemData.filter(
    (data, index) => index <= FmjDetailItemLine * 3 - 1
  ).map((data, index) => {
    return (
      <a
        key={index}
        className="Mbox-shadow FmjlDesinList__Link"
        href={data.href}
        target="blank"
      >
        <img
          className="FmjlDesinList__Img Sbox-shadow"
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

  // Fmj BannerItem
  const createFmjBannerItem = FmjBannerItemData.map((data, index) => {
    return (
      <a
        key={index}
        className="Mbox-shadow FmjlDesinList__Link"
        href={data.href}
        target="blank"
      >
        <img
          className="FmjlDesinList__Img Sbox-shadow"
          src={data.src}
          alt={data.title}
        />
        <h3>
          <span>{data.text}</span>
          {data.title}
        </h3>
      </a>
    );
  });

  return (
    <FmjWrapper>
      <FmjSection className="box-inner">
        <h2 className="box__title">
          FMJ 인터내셔널<span className="period-mark">.</span>
        </h2>
        <p>고객의 소리에 귀 기울이는 스트릿 의류 브랜드.</p>
        <FmjlList>
          <div className="Mbox-shadow">
            <div className="row-left">
              <h3>
                INFO
                <span className="period-mark">.</span>
              </h3>
              <span className="row__span">Web Publisher, designer</span>
              <span className="row__span">더블유브이프로젝트팀</span>
              <span className="row__span">2018.03 ~ 2019.04</span>
            </div>
            <div className="row-right">
              <div className="project">
                <h4 className="Sbox-shadow">
                  1. CHOPIEE 런칭, 유지보수 및 디자인
                  <span className="period-mark">.</span>
                </h4>
                <p>10-20대 여성을 타겟팅한 러블리한 무드의 온라인 멀티샵</p>
                <p>- 개발언어 : html5, css3, Javascript, JQuery</p>
                <p>
                  - 링크 :{" "}
                  <a href="http://www.chopiee.com/" title="쵸피">
                    www.chopiee.com
                  </a>
                </p>
                <p>- 담당업무 : </p>
                <p className="project__work__list">: 퍼블리싱 (100%)</p>
                <p className="project__work__list">: 유지보수 (100%)</p>
                <p className="project__work__list">
                  : 리뉴얼 및 웹디자인 (100%)
                </p>
                <p className="project__work__list">
                  : 로고 제작, 캐릭터 제작 (50%)
                </p>
                <p className="project__work__list">
                  : 그래픽 , 배너디자인 ,sns관리,이벤트페이지 (100%)
                </p>
                <p className="project__work__list">
                  : 상품업데이트 , 신상의류디자인 (100%)
                </p>
              </div>
              <div className="project">
                <h4 className="Sbox-shadow">
                  2. WV PROJECT 유지보수 및 디자인
                  <span className="period-mark">.</span>
                </h4>
                <p>
                  10-20대 여성을 타겟팅한 어린아이처럼 순수하고 천진난만한
                  속내를 드러내지 못한채 어른으로 살아야 하는 요즘 사람들의
                  모습을 도형을 비롯한 다양한 모티브로 재해석해 패션으로
                  풀어내는 브랜드입니다.
                </p>
                <p>- 개발언어 : html5, css3, Javascript, JQuery</p>
                <p>
                  - 링크 :{" "}
                  <a
                    href="http://www.wvproject.co.kr/"
                    title="더블유브이프로젝트"
                  >
                    www.wvproject.co.kr
                  </a>
                </p>
                <p>- 담당업무 : </p>
                <p className="project__work__list">: 퍼블리싱 (100%)</p>
                <p className="project__work__list">: 유지보수 (100%)</p>
                <p className="project__work__list">
                  : 리뉴얼 및 웹디자인 (100%)
                </p>
                <p className="project__work__list">
                  : 상세페이지,룩북촬영 (50%)
                </p>
                <p className="project__work__list">
                  : 그래픽 , 배너디자인, sns관리, 이벤트페이지 (50%)
                </p>
                <p className="project__work__list">
                  : 상품업데이트 , 신상의류디자인, 스타일리스트 (50%)
                </p>
                <p className="project__work__list">: 컨셉 기획, 기획서 (30%)</p>
              </div>
              <div className="project">
                <h4 className="Sbox-shadow">
                  3. FAIR PLAY 유지보수 및 리뉴얼
                  <span className="period-mark">.</span>
                </h4>
                <p>20-30대 남성을 타겟팅한 스트릿패션 멀티샵</p>
                <p>- 개발언어 : html5, css3, Javascript, JQuery</p>
                <p>
                  - 링크 :{" "}
                  <a href="http://www.fairplay142.com/" title="페플">
                    www.fairplay142.com
                  </a>
                </p>
                <p>- 담당업무 : </p>
                <p className="project__work__list">: 퍼블리싱 (100%)</p>
                <p className="project__work__list">: 유지보수 (100%)</p>
                <p className="project__work__list">
                  : 리뉴얼 및 웹디자인 (100%)
                </p>
                <p className="project__work__list">
                  : 상세페이지,룩북촬영 (50%)
                </p>
                <p className="project__work__list">
                  : 그래픽 , 배너디자인, sns관리, 이벤트페이지 (50%)
                </p>
                <p className="project__work__list">
                  : 상품업데이트 , 신상의류디자인, 스타일리스트 (10%)
                </p>
              </div>
              <div className="project">
                <h4 className="Sbox-shadow">
                  4. JEMUT SHOP 유지보수 및 리뉴얼
                  <span className="period-mark">.</span>
                </h4>
                <p>
                  "하나를 사도 제대로"라는 모토로 입을수록 더욱 마음에 드는 옷을
                  만들며, 합리적인 가격으로 좋은 품질의 이지 캐주얼을 선보이는
                  남성 브랜드.
                </p>
                <p>- 개발언어 : html5, css3, Javascript, JQuery</p>
                <p>
                  - 링크 :{" "}
                  <a href="http://www.jemutshop.com/" title="제멋">
                    www.jemutshop.com
                  </a>
                </p>
                <p>- 담당업무 : </p>
                <p className="project__work__list">: 퍼블리싱 (100%)</p>
                <p className="project__work__list">: 유지보수 (100%)</p>
                <p className="project__work__list">
                  : 리뉴얼 및 웹디자인 (100%)
                </p>
                <p className="project__work__list">
                  : 상세페이지,룩북촬영 (50%)
                </p>
                <p className="project__work__list">
                  : 그래픽 , 배너디자인, sns관리, 이벤트페이지 (50%)
                </p>
                <p className="project__work__list">
                  : 상품업데이트 , 신상의류디자인 (10%)
                </p>
              </div>
            </div>
          </div>
        </FmjlList>
      </FmjSection>
      <FmjSection className="box-inner">
        <h2 className="box__title">
          Detail Page<span className="period-mark">.</span>
        </h2>
        <p>의류디자인, 상세페이지, 그래픽디자인</p>
        <FmjlDesinList>{createFmjDetailItem}</FmjlDesinList>
        <Morebutton btnEvent={fmjDetailItemLineCountEvent} />
      </FmjSection>
      <FmjSection className="box-inner">
        <h2 className="box__title">
          Banner<span className="period-mark">.</span>
        </h2>
        <p>브랜드별 배너, 이벤트 디자인, 네이버광고</p>
        <FmjlDesinList>{createFmjBannerItem}</FmjlDesinList>
      </FmjSection>
    </FmjWrapper>
  );
}
const FmjWrapper = styled.main`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
const FmjSection = styled.section`
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
const FmjlList = styled.div`
  > .Mbox-shadow {
    display: flex;
    padding: 3rem 4rem;
    border-bottom: 2px solid #eee;
    border-radius: 3rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      display: block;
    }
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
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      padding: 0.1rem 1rem;
    }
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
const FmjlDesinList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  > .Mbox-shadow {
    display: block;
    border-radius: 3rem;
    padding: 2rem;
    box-sizing: border-box;
    margin-bottom: 3rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      width: 45%;
      padding: 0;
    }
  }
  & .FmjlDesinList__Img {
    width: 14rem;
    height: 12rem;
    border-radius: 3rem;
    border: 2rem solid rgb(241, 243, 245);
    display: block;
    box-sizing: border-box;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      width: 100%;
      height: 50%;
      border: none;
    }
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
  & .FmjlDesinList__btn {
    width: 150px;
    text-align: center;
    padding: 0.5rem 0.1rem;
    border-radius: 2rem;
    margin: 0px auto;
  }
`;
