import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export function Gnb() {
  const location = useLocation();
  const gnbWrapperRef = useRef();
  const [locationPathName, setLocationPathName] = useState(location.pathname);

  useEffect(() => {
    setLocationPathName(location.pathname);
  }, [location]);

  useEffect(() => {
    const linkTags = gnbWrapperRef.current.getElementsByTagName("a");
    if (locationPathName !== "/") {
      Object.values(linkTags).forEach((item) => {
        const linkTagsHref = item.href;
        const checkTagHref = linkTagsHref.match(locationPathName);
        if (checkTagHref) {
          item.style.color = "var(--blue)";
        } else {
          item.style.color = "#000";
        }
      });
    }
  }, [locationPathName]);

  return (
    <GnbWrapper className="Mbox-shadow">
      <GnbBox className="box-inner">
        <GnbHeader>
          <GnbLogo>
            <Link exact to="/">
              😊
            </Link>
          </GnbLogo>
          <GnbMenu>
            <ul ref={gnbWrapperRef}>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link exact to="/Contact">
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
            <img
              src="data:image/png;base64,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"
              alt="GitHub"
            />
          </a>
          <a
            href="https://codepen.io/your-work/"
            target="blank"
            title="Codepen"
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              ></path>
            </svg>
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
