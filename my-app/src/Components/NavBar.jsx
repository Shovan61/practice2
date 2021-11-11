import React from "react";
import styled from "styled-components";
import home from "../images/home-logo.svg";
import search from "../images/search-icon.svg";

function NavBar() {
  return (
    <Wrapper>
      <Container>
        <Search>
          <img src={home} alt="home" />
          <input type="text" placeholder="Search" />
        </Search>
      </Container>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  height: 6vh;
  background-color: white;
  width: 100vw;
  display: grid;
  justify-content: center;
`;

const Container = styled.div`
  /* max-width: 1300px; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const Search = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  border: 1px solid black;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  & input {
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    border-radius: 5px;
    border: none;
    background-color: #eeeef1;

    &:focus {
      outline: none;
      width: 100%;
    }
  }
`;
