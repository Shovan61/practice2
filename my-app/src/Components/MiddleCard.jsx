import React from "react";
import styled from "styled-components";
import me from "../images/me.jpg";

function MiddleCard() {
  return (
    <Wrapper>
      <Status>
        <img src={me} alt="" />
        <Button>Start a post</Button>
      </Status>
    </Wrapper>
  );
}

export default MiddleCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Status = styled.div`
  width: 100%;
  height: 15vh;
  border-radius: 8px;
  box-shadow: 1px 1px 2px #ddd, -1px -1px 2px #eee;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 2rem;
  & img {
    border-radius: 50%;
    height: 50px;
  }
`;

const Button = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  margin-left: 1rem;
  background-color: white;
  border: 1px solid #8a8787;
  border-radius: 20px;
  cursor: pointer;

  &:active {
    background-color: #d4d1d1;
  }
`;
