import React, { useState } from "react";
import styled from "styled-components";
import { homeProjectList } from "../career/Fmj.data";

export function Career() {
  const createHomeProjectList = homeProjectList.map((data, index) => {
    return (
      <div className="project" key={index}>
        <h4>
            {data.title}
            <span className="period-mark">.</span>
            <a href={data.link} target='_blank'>link</a>
        </h4>
        <span className="work">{data.work}</span>
        <ul>
          <li className="didlst">{data.doList01}</li>
          <li className="didlst">{data.doList02}</li>
          <li className="didlst">{data.doList03}</li>
          <li className="didlst">{data.doList04}</li>
        </ul>
      </div>
    );
  });

  return (
    <CareerWrapper>
      <CareerSection className="box-inner">
        <h2 className="box__title">
            Career<span className="period-mark">.</span>
        </h2>
        <CareerList className="Mbox-shadow">
        <li>
              <div className="row-left">
                <h3>
                  CUSMOS
                  <span className="period-mark">.</span>
                </h3>
                <span className="row__span">개발팀 FE개발</span>
                <span className="row__span">2021.03 ~ 재직중</span>
              </div>
              <div className="row-right">
                <div className="project">
                  <h5>
                    📌성과<span className="period-mark">.</span>
                  </h5>
                  <p>
                  - 기획 + FE개발 + 마크업을 강점으로 다양한 업무 및 지원을 수행<br />
                  - 커즈미 고유의 일러스트레이션 작업<br />
                  - 체계적인 업무 분담 / 변동 이슈 커뮤니케이션 요구 → 소요 시간 감소<br />
                  - 기획 + 디자인 + 퍼블리싱 지식을 활용하여 개발자 간 커뮤니케이션 지원<br />
                  - 기획, 디자인 지식 활용 업무 교육 및 양성
                  </p>
                </div>
                <div className="project">
                  <h5>
                    📌개발 언어 및 라이브러리<span className="period-mark">.</span>
                  </h5>
                  <p>HTML5, CSS3, SASS, Python/Django, Github, Jira</p>
                </div>
                <div className="project">
                  <h4>
                      CUSME
                      <span className="period-mark">.</span>
                  </h4>
                  <span className="work">(2021.03 ~ 개발중)</span>
                  <span className="work">해외 관광객과 한국의 뷰티 서비스를 연결하는 뷰티 컨설팅 플랫폼</span>
                  <ul>
                    <li className="didlst">
                      <p className="title">PC & Mobile UI/UX 서비스 구축</p>
                      <p className="text">웹 표준, 웹 접근성, 크로스 브라우징, 반응형 구축</p>
                      <p className="text">장고 템플릿 태그를 이용한 UI개발</p>
                      <p className="text">디자인팀에서 요구하는 인터렉션 추가 및 수정</p>
                      <p className="text">전반적인 프론트 개발 담당, API 연동</p>
                      <p className="text">디자인 시스템에 맞춰 Code Component 표준 및 규격화 진행</p>
                      <p className="text">예약 시스템, 공지 시스템, 설문지, 컨설팅 결과지 등 퍼블리싱</p>
                    </li>
                    <li className="didlst">
                      <p className="title">플랫폼 기획 및 디자인</p>
                      <p className="text">피그마를 이용한, 컴포넌트 생성 및 디자인</p>
                      <p className="text">웹 기획 및 프로토타입, 스토리보드 작성</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
        </CareerList>
        <CareerList className="Mbox-shadow">
          <li>
              <div className="row-left">
                <h3>
                 FMJ 인터내셔널
                  <span className="period-mark">.</span>
                </h3>
                <span className="row__span">퍼블리싱 총괄 및 디자인</span>
                <span className="row__span">2018.03 ~ 2019.04</span>
              </div>
              <div className="row-right">
                <div className="project">
                  <h5>
                    📌주요 진행 업무<span className="period-mark">.</span>
                  </h5>
                  <p>
                    - chopiee / wv project / fairplay 등 사내 웹 개발, 웹디자인<br />
                    - 웹 작업 외: 그래픽, 의류 디자인, 촬영, 코디 업무
                  </p>
                </div>
                <div className="project">
                  <h5>
                    📌성과<span className="period-mark">.</span>
                  </h5>
                  <p>
                    - 월마다 사내 브랜드 중 판매량 1등<br />
                    - FE개발+마크업을 강점으로 다양한 업무 및 지원을 수행<br />
                    - 웹 개발과 동시에 디자인 업무 우수
                  </p>
                </div>
                <div className="project">
                  <h5>
                    📌개발 언어 및 라이브러리<span className="period-mark">.</span>
                  </h5>
                  <p>HTML5, CSS3, Javascript, JQuery, CAFE24</p>
                </div>
                {createHomeProjectList}
                <div className="project">
                  <h4>
                      FAIR PLAY
                      <span className="period-mark">.</span>
                      <a href="http://www.fairplay142.com/" target='_blank'>link</a>
                  </h4>
                  <span className="work">PC & Mobile 퍼블리싱 및 유지 보수</span>
                </div>
                <div className="project">
                  <h4>
                      JEMUT SHOP
                      <span className="period-mark">.</span>
                      <a href="http://www.jemutshop.com/" target='_blank'>link</a>
                  </h4>
                  <span className="work">PC & Mobile 퍼블리싱 및 유지 보수</span>
                </div>
              </div>
          </li>
        </CareerList>
      </CareerSection>
      <CareerSection className="box-inner">
        <h2 className="box__title">
          Experience<span className="period-mark">.</span>
        </h2>
        <CareerList className="Mbox-shadow">
        <li>
              <div className="row-left">
                <h3>
                  LUSH KOREA
                  <span className="period-mark">.</span>
                </h3>
                <span className="row__span">Web designer 아르바이트</span>
                <span className="row__span">2019.09~2019.10</span>
              </div>
              <div className="row-right">
                <div className="project">
                  <ul>
                    <li className="didlst">웹 디자인</li>
                    <li className="didlst">템플릿 가이드 기반에 맞춰 제작</li>
                    <li className="didlst">신제품 상세 페이지작업, 누끼 / 보정작업</li>
                    <li className="didlst">신제품 목록 정리</li>
                    <li className="didlst">성분 서치 후 제품의 성분 표시</li>
                  </ul>
                </div>
              </div>
            </li>
        </CareerList>
      </CareerSection>
    </CareerWrapper>
  );
}
const CareerWrapper = styled.main`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
const CareerSection = styled.section`
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

const CareerList = styled.ul`
  font-size: 1.1rem;
  border-radius: 2rem;
  margin-top: 1rem;
  > li {
    display: flex;
    padding: 3rem 4rem;
    border-bottom: 2px solid #eee;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      display: block;
      padding: 2rem 3rem;
    }
  }
  > li:last-child {
    border: none;
  }
  & .row__span {
    display: block;
  }
  & .project {
    padding-bottom: 2rem;
  }
  & .didlst {
    position: relative;
    padding: 0.2rem 0 0.2rem 1rem;
    font-size: 1.1rem;
    >.title{    
      font-weight: 500;
    }
    >.text{
      text-indent: 1rem;
    }
  }
  > li h3,
  > li h4 {
    font-size: 2rem;
    margin: 0 0 1rem;
  }
  > li h5 {
    font-size: 1.3rem;
    margin: 0 0 0.5rem;
    color: #333;
  }
  > li h3 > span {
    font-size: 2rem;
  }
  > li > .row-left {
    flex-basis: 18rem;
    padding-right: 1rem;
    flex-shrink: 0;
  }
  & .work {
    font-size: 1rem;
    display: block;
    margin-bottom: 1rem;
  }
  & p {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    line-height: 2rem;
  }
`;
