import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

export function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "const_yurim",
        "template_gli2mna",
        e.target,
        "user_Ivd3HYd1osr1H1Ld0uj4N"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("전송이 완료되었습니다. 감사합니다.🙏");
        },
        (error) => {
          console.log(error.text);
          alert("전송에 문제가 생겼습니다. 다시 보내주시면 감사하겠습니다.");
        }
      );
  }
  return (
    <ContactWrapper>
      <ContactSection className="box-inner">
        <h2 className="box__title">
          Contact<span className="period-mark">.</span>
        </h2>
        <p>
          안녕하세요. 저에게 관심이 생기신 분들은
          <br />
          아래 입력란에 작성 후 보내주시면 감사하겠습니다.🙂
        </p>
        <ContactInner className="Mbox-shadow">
          <a
            href="mailto:zeze-@naver.com"
            title="email"
            target="blank"
            className="Sbox-shadow"
          >
            📪 <span className="period-mark">zeze-@naver.com</span>
          </a>
          <ContactBox className="Mbox-shadow">
            <ContactBoxForm className="contact-form" onSubmit={sendEmail}>
              <input
                type="hidden"
                maxlength="11"
                name="contact_number"
                className="Sbox-shadow"
                required
              />{" "}
              <label>기업명</label>{" "}
              <input
                type="text"
                name="user_name"
                className="Sbox-shadow"
                required
              />
              <label>이메일</label>{" "}
              <input
                type="email"
                name="user_email"
                className="Sbox-shadow"
                required
              />
              <label>메시지</label>{" "}
              <textarea name="message" className="Sbox-shadow" />
              <input type="submit" value="Send" className="Sbox-shadow" />
            </ContactBoxForm>
          </ContactBox>
        </ContactInner>
      </ContactSection>
    </ContactWrapper>
  );
}
const ContactWrapper = styled.main`
  min-height: 90vh;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
const ContactSection = styled.section`
  padding-top: 4rem;
  > h2 {
    margin: 1rem 0 2rem !important;
  }
`;
const ContactInner = styled.div`
  padding: 2rem 2rem;
  border-radius: 3rem;
  margin-top: 2rem;
  > a {
    width: 10rem;
    display: flex;
    padding: 0.5rem 1.5rem;
    border-radius: 3rem;
    margin: 0 auto;
  }
`;
const ContactBox = styled.div`
  margin-top: 1rem;
  padding: 2rem 2rem;
  border-radius: 3rem;
`;
const ContactBoxForm = styled.form`
  > label {
    display: block;
    font-size: 1rem;
    padding: 1rem;
  }
  > input,
  > textarea {
    animation: none;
    display: block;
    width: 100%;
    line-height: 3.5;
    border: none;
    font-size: 14px;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
  }
  > input[type="submit"] {
    display: block;
    padding: 6px 30px;
    font-size: 14px;
    background-color: #4460aa;
    color: #fff;
    border: none;
  }
  > textarea:focus,
  > input:focus {
    outline: none;
    box-shadow: inset 9px 11px 11px #d6d8d9, inset -15px -15px 22px #ffffff;
  }
  > input[type="submit"] {
    margin-top: 1rem;
    background-color: var(--blue);
    display: block;
    padding: 6px 30px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  > input[type="submit"]:focus {
    box-shadow: inset 20px 20px 60px #2b83cc, inset -20px -20px 60px #3bb1ff;
  }
`;
