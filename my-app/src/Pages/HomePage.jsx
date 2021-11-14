import React from "react";
import styled from "styled-components";
import { NavBar, Text, LeftCard, RightCard, MiddleCard } from "../Components";

function HomePage() {
  return (
    <Wrapper>
      <NavBar />
      <Text />
      <Container>
        <LeftCard />
        <MiddleCard />
        <RightCard />
      </Container>
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
  position: relative;
`;

const Container = styled.div`
  align-self: center;
  padding: 2rem 1rem;
  max-width: 1300px;
  /*width: 1280px; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;
