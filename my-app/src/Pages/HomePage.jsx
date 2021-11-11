import React from "react";
import styled from "styled-components";
import { NavBar, Text } from "../Components";

function HomePage() {
  return (
    <Wrapper>
      <NavBar />
      <Text />
      <Container></Container>
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  align-self: center;
  padding: 4rem;
  max-width: 1300px;
  width: 1280px;
  height: 100%;
  display: grid;
  grid-template-columns: 300px auto 300px;
  & div {
    border: 1px solid black;
  }
`;
