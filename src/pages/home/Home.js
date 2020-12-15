import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { homeSkillItem, homeProjectList } from "./Home.data";

export function Home() {
  const createHomeSkillItem = homeSkillItem.map((data, index) => {
    return (
      <li className="Sbox-shadow">
        <span className={data.name}></span>
        {data.title}
      </li>
    );
  });

  const createHomeProjectList = homeProjectList.map((data, index) => {
    return (
      <div class="project">
        <h4>
          {data.title}
          <span class="period-mark">.</span>
        </h4>
        <span className="time">{data.time}</span>
        <ul>
          <li className="didlst">{data.dolist01}</li>
          <li className="didlst">{data.dolist02}</li>
          <li className="didlst">{data.dolist03}</li>
          <li className="didlst">{data.dolist04}</li>
        </ul>
        <ul className="stack">
          <li className="Sbox-shadow">
            <span className={data.skname01}></span>
            {data.sktitle01}
          </li>
          <li className="Sbox-shadow">
            <span className={data.skname02}></span>
            {data.sktitle02}
          </li>
          <li className="Sbox-shadow">
            <span className={data.skname03}></span>
            {data.sktitle03}
          </li>
        </ul>
      </div>
    );
  });

  return (
    <HomeWrapper>
      <HomeProfile className="box-inner">
        <h2>
          안녕하세요!
          <br />
          FE 개발자 <span className="period-mark">윤유림</span>입니다.
        </h2>
        <p>
          저는 서비스의 발전 및 개선을 통해 뿌듯함을 느끼는 것을 좋아합니다.
          코드의 가치는 비즈니스적 가치를 창출할 수 있을 때 나온다고 생각합니다.
        </p>
        <HomeContacts>
          <a
            href="mailto:zeze-@naver.com"
            title="email"
            target="blank"
            className="Sbox-shadow"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="period-mark">zeze-@naver.com</span>
          </a>
          <a
            href="https://open.kakao.com/o/s2Tq0VLc"
            title="open.kakao"
            target="blank"
            className="Sbox-shadow"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>
            <span className="period-mark">open.kakao</span>
          </a>
        </HomeContacts>
      </HomeProfile>
      <HomeSection className="box-inner">
        <h2 className="home-box__title">
          Skill<span className="period-mark">.</span>
        </h2>
        <HomeSkillList className="Mbox-shadow">
          {createHomeSkillItem}
        </HomeSkillList>
      </HomeSection>
      <HomeSection className="box-inner">
        <h2 className="home-box__title">
          Work Experience<span className="period-mark">.</span>
        </h2>
        <HomeWorkList className="Mbox-shadow">
          <li>
            <div className="row-left">
              <h3>
                FMJ인터내셔널
                <span className="period-mark">.</span>
              </h3>
              <span className="row__span">Web Publisher, designer</span>
              <span className="row__span">더블유브이프로젝트팀</span>
              <span className="row__span">2018.03 ~ 2019.04</span>
            </div>
            <div className="row-right">
              <div class="project">
                <h4>
                  사내 퍼블리싱·UI개발·디자인<span class="period-mark">.</span>
                </h4>
                <h5>
                  Description<span class="period-mark">.</span>
                </h5>
                <p>
                  chopiee , wv project , fairplay , jemutshop web 4의사이트를
                  단독 관리와 사용하고 있는 각종 사내 유지보수, 리뉴얼
                  개선하였습니다. 상세페이지,룩북촬영 / 그래픽 , 배너디자인,sns,
                  이벤트페이지 상품업데이트 ,신상의류디자인 , 컨셉기획,누끼및
                  디테일,촬영과 코디,영상편집등을 하였습니다.
                </p>
              </div>
              {createHomeProjectList}
            </div>
          </li>
        </HomeWorkList>
      </HomeSection>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main``;
const HomeProfile = styled.section`
  padding-top: 10rem;
`;
const HomeContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > a {
    display: flex;
    padding: 0.5rem 1.5rem;
    border-radius: 3rem;
    margin: 0.5rem;
  }
  > a > svg {
    width: 14px;
    padding-right: 10px;
  }
  > a > span {
    transition: 0.3s ease-out;
  }
  > a:hover span {
    color: rgb(6, 42, 71);
  }
`;
const HomeSection = styled.section``;
const HomeSkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 2rem;
  > li {
    padding: 0.5rem 1.5rem;
    border-radius: 3rem;
    margin: 1.5rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
`;
const HomeWorkList = styled.ul`
  border-radius: 2rem;
  font-size: 1.1rem;
  > li {
    display: flex;
    padding: 3rem 4rem;
    border-bottom: 1px solid #eee;
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
  }
  & .stack {
    display: flex;
  }
  & .stack > li {
    padding: 0.5rem 1.5rem;
    border-radius: 3rem;
    width: 10%;
    margin: 1.5rem 1rem 1.5rem 0rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
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
  & .time {
    font-size: 1rem;
    display: block;
    margin-bottom: 1rem;
  }
  & p {
    margin: 0 0 1rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
`;
