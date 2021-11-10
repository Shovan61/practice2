import React from "react";
import styled from "styled-components";
import { NavBar } from "../Components";

function HomePage() {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--grey);
`;
