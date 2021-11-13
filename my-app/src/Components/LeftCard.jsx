import React from "react";
import styled from "styled-components";
import me from "../images/me.jpg";
import card from "../images/card-bg.svg";
import item from "../images/item-icon.svg";

function LeftCard() {
  return (
    <Wrapper>
      <Card>
        <img
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            objectFit: "contain",
            width: "100%",
          }}
          src={card}
          alt="card"
        />
        <Me>
          <img src={me} alt="me" />
        </Me>
        <Intro>
          <h5>Shovan Mazumder</h5>
          <span>
            Front-End Development | React.Js | Redux | Vanilla JavaScript |
            Cascading Style Sheets(CSS) | Firebase | MongoDB
          </span>
          <div
            style={{
              height: "0.08px",
              width: "100%",
              backgroundColor: "#e7e5e5",
            }}
          />

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              padding: "0  1rem",
              height: "50px",
              textAlign: "center",
            }}
          >
            <span>Who viewed your profile</span>
            <span
              style={{
                color: "#00009ee",
              }}
            >
              79
            </span>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignSelf: "center",
              height: "30px",
            }}
          >
            <span>Views of your posts</span>
            <span style={{ color: "#00009ee" }}>225</span>
          </div>

          <div
            style={{
              height: "0.08px",
              width: "100%",
              backgroundColor: "#e7e5e5",
            }}
          />
          <div
            style={{
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "10px",
              marginTop: " 1rem",
            }}
          >
            <img src={item} alt="item" />
            <span style={{ alignSelf: "center", marginTop: "1.9rem" }}>
              My Items
            </span>
          </div>
        </Intro>
      </Card>
    </Wrapper>
  );
}

export default LeftCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 70%;
  height: 40vh;
  box-shadow: 1px 1px 2px #ddd, -1px -1px 2px #eee;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const Me = styled.div`
  position: absolute;
  height: 70px;
  width: 70px;
  z-index: 2;
  top: 1.1rem;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  border: 1px solid white;
  overflow: hidden;
  & img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const Intro = styled.div`
  align-self: center;
  margin-top: 6.6rem;
  display: flex;
  flex-direction: column;
  & h5 {
    text-align: center;
    letter-spacing: 1px;
  }
  & span {
    font-size: 11px;
    width: 80%;
    align-self: center;
    text-align: center;
    margin-top: 1rem;
    color: #999;
    line-height: 0.8rem;
    margin-bottom: 2rem;
  }
`;
