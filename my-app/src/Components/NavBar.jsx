import React from "react";
import styled from "styled-components";
import home from "../images/home-logo.svg";
import search from "../images/search-icon.svg";
import nHome from "../images/nav-home.svg";
import jobs from "../images/nav-jobs.svg";
import messaging from "../images/nav-messaging.svg";
import network from "../images/nav-network.svg";
import notifications from "../images/nav-notifications.svg";
import work from "../images/nav-work.svg";
import me from "../images/me.jpg";
import down from "../images/sort-down.svg";

function NavBar() {
  return (
    <Wrapper>
      <Container>
        <Search>
          <img src={home} alt="home" />
          <input type="text" placeholder="Search" />
        </Search>
        <NavItems>
          <NavLink>
            <img src={nHome} alt="" />
            <span>Home</span>
          </NavLink>
          <NavLink>
            <img src={network} alt="" />
            <span>My Network</span>
          </NavLink>
          <NavLink>
            <img src={jobs} alt="" />
            <span>Jobs</span>
          </NavLink>
          <NavLink>
            <img src={messaging} alt="" />
            <span>Messaging</span>
          </NavLink>
          <NavLink>
            <img src={notifications} alt="" />
            <span>Notifications</span>
          </NavLink>
        </NavItems>

        <Profile>
          <img src={me} alt="" />
          <Me>
            <span>Me</span>
            <img src={down} alt="" />
          </Me>
        </Profile>

        <div
          style={{ backgroundColor: "#e0dddd", height: "100%", width: "1px" }}
        />

        <Work>
          <img src={work} alt="" />
          <WorkSpan>
            <span>Work</span>
            <img src={down} alt="" />
          </WorkSpan>
        </Work>
      </Container>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  height: 6vh;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  align-self: center;
  max-width: 1300px;
  width: 1280px;
  height: 100%;
  padding: 0 4rem;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Search = styled.div`
  width: 300px;
  /* border: 1px solid black; */
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

const NavItems = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  & img {
    height: 22px;
    width: 22px;
  }
  & span {
    font-size: 12px;
    color: #444444;
    margin-top: 0.2rem;
  }
`;

const Profile = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  align-self: center;
  padding-top: 0.5rem;
  & img {
    height: 50%;
    border-radius: 50%;
  }
`;

const Me = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  & img {
    height: 10px;
    border-radius: 50%;
  }
  & span {
    font-size: 11px;
  }
`;

const Work = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  & img {
    height: 25px;
  }
`;

const WorkSpan = styled.div`
  display: flex;
  align-items: center;

  & img {
    height: 10px;
    border-radius: 50%;
    margin-left: 0.2rem;
  }
  & span {
    font-size: 11px;
  }
`;
