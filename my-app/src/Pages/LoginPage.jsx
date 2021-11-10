import React from "react";
import styled from "styled-components";
import logo from "../images/login-logo.svg";
import google from "../images/google.svg";
import loginhero from "../images/login-svg.svg";

function LoginPage() {
  return (
    <Wrapper>
      <Nav>
        <img src={logo} alt="logo" />
        <ButtonContainer>
          <span>Join Now</span>
          <ButtonSign>Sign In</ButtonSign>
        </ButtonContainer>
      </Nav>

      <Body>
        <Form>
          <h1>Welcome to your professional community</h1>
          <input type="text" placeholder="Email or phone number" />
          <input type="password" placeholder="Password (6+ charecters)" />
          <Button>
            <img src={google} alt="google" />
            <span>Sign In With Google</span>
          </Button>
        </Form>
        <Picture>
          <img src={loginhero} alt="loginhero" />
        </Picture>
      </Body>

      <Footer>
        <Container>
          <SectionLeft>
            <span>Find the right job or internship for you</span>
          </SectionLeft>
          <SectionRight>
            <SecButton>Engineering</SecButton>
            <SecButton>Business Development</SecButton>
            <SecButton>Finance</SecButton>
            <SecButton>Administritive Assistant</SecButton>
            <SecButton>Retail Associate</SecButton>
            <SecButton>Customer Service</SecButton>
            <SecButton>Operation</SecButton>
            <SecButton>Information Technology</SecButton>
          </SectionRight>
        </Container>
      </Footer>
    </Wrapper>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.div`
  max-width: 1300px;
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.3rem;

  & img {
    height: 33px;
    margin-bottom: 0.7rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & span {
    width: 108px;
    padding: 0.6rem 1.2rem;
    position: absolute;
    display: inline;
    right: 8rem;
    cursor: pointer;
    transition: all 0.25s ease-in;

    &:hover {
      background-color: #e2dfdf;
    }
  }
`;

const ButtonSign = styled.div`
  padding: 0.6rem 1.2rem;
  border: 2px solid #606af8;
  border-radius: 27px;
  cursor: pointer;
  color: #1928fa;
  font-weight: 300;
  transition: all 0.25s ease-in;
  &:hover {
    border: 2px solid #0312eb;
    background-color: #eeefff;
  }
`;

const Body = styled.div`
  height: 60vh;
  max-width: 1300px;
  width: 100vw;
  padding: 0 4.3rem;
  display: flex;
  justify-content: space-between;
`;

const Form = styled.div`
  margin-top: 5rem;
  width: 50%;
  & input {
    margin-top: 1.5rem;
    display: block;
    padding: 1rem 2rem;
    width: 80%;
  }

  & h1 {
    color: rgba(143, 88, 73, 1);
    font-weight: 200;
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

const Button = styled.div`
  background-color: #fff;
  width: 80%;
  padding: 1rem 2rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: 2px solid #002fb1;
  border-radius: 10px;
  margin-top: 3rem;
  cursor: pointer;
  & span {
    font-size: 20px;
    color: black;
  }

  &:active {
    border: 2px solid #f0f4ff;
    background-color: #f1f0f0;
    transform: scale(0.99);
  }
`;

const Picture = styled.div`
  margin-top: 5rem;
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

//
const Footer = styled.div`
  width: 100%;
  height: 32vh;
  background-color: var(--grey);
  padding: 3rem 8rem;
  display: flex;
  justify-content: center;
`;

const SectionLeft = styled.div`
  width: 40%;
  height: 100%;
  & span {
    font-size: 3rem;
    font-weight: 300;
    /* line-height: 1rem; */
    /* letter-spacing: 2px; */
  }
`;
const SectionRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1260px;
`;

const SecButton = styled.div`
  background-color: #d8d7d4;
  padding: 1rem 2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  &:hover {
    background-color: #b6b5b3;
  }
`;
