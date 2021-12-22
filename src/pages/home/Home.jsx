import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { homeToolItem, homeSkillItem, homeProjectList } from "./Home.data";

export function Home() {
  const createHomeSkillItem = homeSkillItem.map((data, index) => {
    return (
      <li className="Sbox-shadow" key={index}>
        {data.title}
      </li>
    );
  });
  const createHomeToolItem = homeToolItem.map((data, index) => {
    return (
      <li className="Sbox-shadow" key={index}>
        <span className={data.name}></span>
        {data.title}
      </li>
    );
  });

  return (
    <HomeWrapper>
      <HomeProfile className="box-inner">
        <h2>
          안녕하세요.
          <br />
          내일 더 성장하는 개발자 <span className="period-mark">윤유림</span>입니다.반갑습니다.
        </h2>
          <p className="text-tag">#도전 #경험 #발전 #성장</p>
          <p>주어진 다양한 상황속에서 지금 실행 가능한 최선의 선택을 하기 위해 노력합니다.</p>
          <p>그 선택이 처음 가는 길이라 해도 주체적으로 도전합니다.</p>
          <p>그 경험들을 통해 오늘보다 내일 더 성장하는 개발자가 되려합니다.</p>
        <HomeContacts>
          <a
            href="mailto:yunyurib@gmail.com"
            title="email"
            target="blank"
            className="Sbox-shadow">
            📪<span className="period-mark">yunyurib@gmail.com</span>
          </a>
          <a
            href="https://open.kakao.com/o/s2Tq0VLc"
            title="open.kakao"
            target="blank"
            className="Sbox-shadow">
            💬<span className="period-mark">open.kakao</span>
          </a>
        </HomeContacts>
      </HomeProfile>
      <HomeSection className="box-inner">
        <h2 className="box__title">
          Tool<span className="period-mark">.</span>
        </h2>
        <HomeSkillList className="Mbox-shadow">
          {createHomeToolItem}
        </HomeSkillList>
      </HomeSection>
      <HomeSection className="box-inner">
        <h2 className="box__title">
          Skill<span className="period-mark">.</span>
        </h2>
        <HomeSkillList className="Mbox-shadow">
          {createHomeSkillItem}
        </HomeSkillList>
      </HomeSection>
      <HomeSection className="box-inner">
        <h2 className="box__title">
          Education<span className="period-mark">.</span>
        </h2>
        <HomeWorkBox className="Mbox-shadow">
          <HomeWorkList>
            <li>
              <div className="row-left">
                <h3>
                  그린아트컴퓨터
                  <span className="period-mark">.</span>
                </h3>
                <span className="row__span">Publisher, Front-end</span>
                <span className="row__span">2020.04~2020.11</span>
              </div>
              <div className="row-right">
                <div className="project">
                  <h4>
                    실무과정
                    <span className="period-mark">.</span>
                  </h4>
                  <ul>
                    <li className="didlst">
                      NCS기반 과정, 기획과 설계, 디자인, HTML, CSS, Javascript,
                      jQuery
                    </li>
                    <li className="didlst">
                      리뉴얼을 통해 원래 있던 오류를 파악하고 바꾸어 문제를
                      해결하며 사용 목적과 용도에 맞게 최적화하여 디자인하고
                      효과적으로 구현
                    </li>
                    <li className="didlst">
                      단순히 웹을 만드는 것이 아닌 실무에도 중요한, 파일을
                      실속있게 정리하는 것과 수업이 아닌 인턴과정으로 배운다는
                      마음가짐
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </HomeWorkList>
        </HomeWorkBox>
      </HomeSection>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
const HomeProfile = styled.section`
  padding-top: 10rem;
  > h2 {
    font-size: 2rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  > .text-tag{
    font-size: 1.1rem;
  }
  > p {    
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;
const HomeContacts = styled.div`
  display: flex;
  align-items: center;
  margin-top:1em;
  > a {
    display: flex;
    padding: 0.5rem 1.5rem;
    border-radius: 3rem;
    margin: 0.5rem;
  }
  > a > span {
    transition: 0.3s ease-out;
  }
  > a:hover span {
    color: rgb(6, 42, 71);
  }
`;
const HomeSection = styled.section``;
const HomeWorkBox = styled.div`
  border-radius: 2rem;
`;
const HomeSkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border-radius: 2rem;
  > li {
    padding: 0.5rem 1.5rem;
    border-radius: 3rem;
    margin: 1rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      margin: 0.7rem;
    }
  }
`;
const HomeWorkList = styled.ul`
  font-size: 1.1rem;
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
