import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { LogoImg_List } from "../../assets/Image";

export function Gnb() {
  const location = useLocation();
  const gnbWrapperRef = useRef();
  const [locationPathName, setLocationPathName] = useState(location.pathname);

  useEffect(() => {
    setLocationPathName(location.pathname);
  }, [location]);

  useEffect(() => {
    const linkTags = gnbWrapperRef.current.getElementsByTagName("a");
    Object.values(linkTags).forEach((item) => {
      const linkTagsHref = item.href;
      const checkTagHref = linkTagsHref.match(locationPathName);
      if (locationPathName !== "/yurim.dev/") {
        if (checkTagHref) {
          item.style.color = "var(--blue)";
        } else {
          item.style.color = "#000";
        }
      } else {
        item.style.color = "#000";
      }
    });
  }, [locationPathName]);

  return (
    <GnbWrapper className="Mbox-shadow">
      <GnbBox className="box-inner">
        <GnbHeader>
          <GnbLogo>
            <Link exact to="/yurim.dev/">
              😊
            </Link>
          </GnbLogo>
          <GnbMenu>
            <ul ref={gnbWrapperRef}>
              <li>
                <Link exact to="/yurim.dev/career">
                  Career
                </Link>
              </li>
              <li>
                <Link exact to="/yurim.dev/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link exact to="/yurim.dev/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </GnbMenu>
        </GnbHeader>
        <GnbLink>
          <a
            href="https://github.com/xururuca9797"
            target="blank"
            title="GitHub"
            className="Sbox-shadow"
          >
            <img src={LogoImg_List.gitHubLogo} alt="gitHubLogo" />
          </a>
          <a
            href="https://codepen.io/your-work/"
            target="blank"
            title="Codepen"
            className="Sbox-shadow"
          >
            <img src={LogoImg_List.codepenLogo} alt="codepenLogo" />
          </a>
        </GnbLink>
      </GnbBox>
    </GnbWrapper>
  );
}
const GnbWrapper = styled.header`
  position: fixed;
  width: 100%;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  z-index: 999;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 0.5rem;
    box-sizing: border-box;
  }
`;

const GnbBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
`;
const GnbHeader = styled.div`
  display: flex;
  align-items: center;
`;
const GnbLogo = styled.h1`
  padding: 7px 25px;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0;
  }
  > a {
    font-size: 2rem;
  }
`;
const GnbMenu = styled.nav`
  > ul {
    display: flex;
  }
  > ul > li > a {
    display: block;
    padding: 0 1rem;
    font-weight: bold;
    transition: 0.3s ease-out;
  }
  > ul > li:hover a {
    color: var(--blue);
  }
`;
const GnbLink = styled.div`
  display: flex;
  align-items: center;
  > a {
    padding: 0.7rem 0.8rem 0.5rem 0.8rem;
    margin: 0.5rem;
    border-radius: 50%;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      padding: 0;
    }
  }
  > a > img {
    width: 20px;
  }
  > a > svg {
    color: #000;
    width: 23px;
  }
`;
