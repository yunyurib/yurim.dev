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
      <div className="project">
        <h4>
          {data.title}
          <span className="period-mark">.</span>
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
          웹 프론트엔트에 관심이 많습니다. 여러 경험을 하면서 맡으면서 디자인
          감각이 있는 프론트엔드 개발자를 지향하고 있습니다. 거의 모든
          프로젝트를 깃허브를 활용해 관리하며 진행하고 있습니다. 원활한 소통의
          협업과 코드리뷰를 통해 더욱 견고한 코드를 만드는 것에 가장 큰 의미를
          둔 개발자 윤유림입니다.
        </p>
        <HomeContacts>
          <a
            href="mailto:zeze-@naver.com"
            title="email"
            target="blank"
            className="Sbox-shadow"
          >
            <svg
              className="w-6 h-6"
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
              className="w-6 h-6"
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
        <h2 className="box__title">
          Skill<span className="period-mark">.</span>
        </h2>
        <HomeSkillList className="Mbox-shadow">
          {createHomeSkillItem}
        </HomeSkillList>
      </HomeSection>
      <HomeSection className="box-inner">
        <h2 className="box__title">
          Work Experience<span className="period-mark">.</span>
        </h2>
        <HomeWorkBox className="Mbox-shadow">
          <HomeWorkList>
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
                <div className="project">
                  <h4>
                    사내 퍼블리싱·UI개발·디자인
                    <span className="period-mark">.</span>
                  </h4>
                  <h5>
                    Description<span className="period-mark">.</span>
                  </h5>
                  <p>
                    chopiee , wv project , fairplay , jemutshop web 4개의 사이트
                    모두 혼자 맡아 진행했으며,
                    <br />
                    사용하고 있는 각종 사내 유지보수, 리뉴얼 개선하였고, 요구에
                    맞는 다양한 새로운 기능을 구현했습니다.
                    <br />
                    상세페이지,룩북촬영 / 그래픽 , 배너디자인,sns, 이벤트페이지
                    상품업데이트 , 신상의류디자인 , 컨셉기획,누끼및
                    디테일,촬영과 코디,영상편집등을 하였습니다.
                  </p>
                </div>
                {createHomeProjectList}
              </div>
            </li>
            <li>
              <div className="row-left">
                <h3>
                  LUSH KOREA
                  <span className="period-mark">.</span>
                </h3>
                <span className="row__span">Web designer 아르바이트</span>
                <span className="row__span">UI/UX팀</span>
                <span className="row__span">2019.09~2019.10</span>
              </div>
              <div className="row-right">
                <div className="project">
                  <h4>
                    웹 디자인
                    <span className="period-mark">.</span>
                  </h4>
                  <ul>
                    <li className="didlst">템플릿 가이드 기반에 맞춰 제작</li>
                    <li className="didlst">
                      신제품 상세 페이지작업, 누끼 / 보정작업
                    </li>
                    <li className="didlst">신제품 목록 정리</li>
                    <li className="didlst">성분 서치 후 제품의 성분 표시</li>
                  </ul>
                  <ul className="stack">
                    <li className="Sbox-shadow">
                      <span className="skll__icon skill__ps"></span>
                      Photoshop
                    </li>
                    <li className="Sbox-shadow">
                      <span className="skll__icon skill__ir"></span>
                      Illustrator
                    </li>
                    <li className="Sbox-shadow">Excel</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="row-left">
                <h3>
                  LF
                  <span className="period-mark">.</span>
                </h3>
                <span className="row__span">사무, 디자인 보조 아르바이트</span>
                <span className="row__span">아동의류브랜드</span>
                <span className="row__span">2019.10~2019.11</span>
              </div>
              <div className="row-right">
                <div className="project">
                  <h4>
                    사무, 디자인 보조
                    <span className="period-mark">.</span>
                  </h4>
                  <ul>
                    <li className="didlst">
                      조직 내부와 외부에서 요청하거나 필요한 업무를 지원하고
                      관리하는 일 등 수행
                    </li>
                    <li className="didlst">
                      효율적인 관리를 위한 서류 지원‧보조
                    </li>
                    <li className="didlst">
                      {" "}
                      구성원들의 업무 능률 향상을 위하여 사무기기 운용, 소모품,
                      비품관리, 사무환경 유지 등의 업무를 실행하였습니다.
                    </li>
                    <li className="didlst">
                      주의깊은 관찰, 문제해결 의지, 꼼꼼한 관리태도, 비품․
                      소모품 파악
                    </li>
                  </ul>
                  <ul className="stack">
                    <li className="Sbox-shadow">
                      <span className="skll__icon skill__ps"></span>
                      Photoshop
                    </li>
                    <li className="Sbox-shadow">
                      <span className="skll__icon skill__ir"></span>
                      Illustrator
                    </li>
                    <li className="Sbox-shadow">Excel</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="row-left">
                <h3>
                  작당모의
                  <span className="period-mark">.</span>
                </h3>
                <span className="row__span">업무보조 아르바이트</span>
                <span className="row__span">잼페이스</span>
                <span className="row__span">2019.12~2019.12</span>
              </div>
              <div className="row-right">
                <div className="project">
                  <h4>
                    잼페이스 Application
                    <span className="period-mark">.</span>
                  </h4>
                  <ul>
                    <li className="didlst">
                      조직 내부와 외부에서 요청하거나 필요한 업무를 지원하고
                      관리하는 일 등 수행
                    </li>
                    <li className="didlst">
                      효율적인 관리를 위한 서비스의 데이터베이스 입력.
                    </li>
                    <li className="didlst">영상서비스 정보 입력</li>
                  </ul>
                  <ul className="stack">
                    <li className="Sbox-shadow">Slack</li>
                    <li className="Sbox-shadow">Excel</li>
                  </ul>
                </div>
              </div>
            </li>
          </HomeWorkList>
        </HomeWorkBox>
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
      <HomeSection className="box-inner">
        <h2 className="box__title">
          Certificate<span className="period-mark">.</span>
        </h2>
        <HomeWorkBox className="Mbox-shadow">
          <HomeWorkList>
            <li>
              <div className="row-left">
                <h3>
                  한국산업인력공단
                  <span className="period-mark">.</span>
                </h3>
                <span className="row__span">2017.07 취득</span>
              </div>
              <div className="row-right">
                <div className="project">
                  <h4>
                    GTQ 2급
                    <span className="period-mark">.</span>
                  </h4>
                </div>
              </div>
            </li>
            <li>
              <div className="row-left">
                <h3>
                  한국산업인력공단
                  <span className="period-mark">.</span>
                </h3>
                <span className="row__span">필기합격</span>
              </div>
              <div className="row-right">
                <div className="project">
                  <h4>
                    웹디자인 기능사
                    <span className="period-mark">.</span>
                  </h4>
                </div>
              </div>
            </li>
          </HomeWorkList>
        </HomeWorkBox>
      </HomeSection>
      <HomeSection className="box-inner">
        <h2 className="box__title">
          I am<span className="period-mark">.</span>
        </h2>
        <HomeWorkBox className="Mbox-shadow">
          <p className="Iam">
            웹 사이트들을 보며 웹에 호기심을 갖게 되었습니다. 처음에는 UI를
            배우기 위해 독학으로 웹 디자인을 공부했고, HTML/CSS Markup까지
            배우면서 움직이는 웹사이트가 재미가 있었고, 흥미가 생겨 Web
            Publishing에 깊게 공부하여, 웹 퍼블리셔로서 기존 브랜드 담당과 신규
            브랜드 웹 총괄로 일하여 실전 경험을 길렀습니다. 일하면서 코딩이란
            분야가 매력적이고 더욱 깊게 배우고 많은 것을 해보고 싶어,
            Front-End가 되고싶어졌습니다. 디자인 감각이 있는 프론트엔드 개발자가
            되어 디자이너와 양방향 소통을 더 잘할 수 있다고 생각합니다.
            학점은행제를 통한 컴퓨터공학 학사학위를 공부 중이며, Front-End
            개발자로서 전문성을 갖추기 위해 ReactJS 공부하여 현재 사이트와{" "}
            <a href="https://xururuca9797.github.io/yurim-world/">
              (xururuca9797.github.io/yurim-world/)
            </a>
            에 적용해 개발하였습니다.
          </p>
        </HomeWorkBox>
      </HomeSection>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main``;
const HomeProfile = styled.section`
  padding-top: 10rem;
  > h2 {
    font-size: 3rem;
  }
  > p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const HomeContacts = styled.div`
  display: flex;
  align-items: center;
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
const HomeWorkBox = styled.div`
  border-radius: 2rem;
  & .Iam {
    padding: 3rem 4rem;
    font-size: 1.2rem;
  }
  & .Iam > a {
    color: var(--blue);
  }
`;
const HomeSkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
  font-size: 1.1rem;
  > li {
    display: flex;
    padding: 3rem 4rem;
    border-bottom: 2px solid #eee;
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
  }
  & .stack {
    display: flex;
  }
  & .stack > li {
    padding: 0.5rem 1.5rem;
    border-radius: 3rem;
    width: 90px;
    margin: 1.5rem 1rem 1.5rem 0rem;
    font-size: 0.8rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
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
