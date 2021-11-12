import React from "react";
import styled from "styled-components";

function MiddleCard() {
  return (
    <Wrapper>
      <Card></Card>
    </Wrapper>
  );
}

export default MiddleCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const Card = styled.div`
  width: 100%;
  min-height: 100vh;
  border: 1px solid blue;
  border-radius: 8px;
`;
