import React from "react";
import styled from "styled-components";
import feed from "../images/feed-icon.svg";
import photo from "../images/photo.svg";

function RightCard() {
  return (
    <Wrapper>
      <Card>
        <Top>
          <h5>Add to your feed</h5>
          <img src={feed} alt="" />
        </Top>
        <img
          style={{
            height: "80px",
            width: "80px",
            marginTop: "2rem",
            alignSelf: "center",
          }}
          src={photo}
          alt=""
        />
      </Card>
    </Wrapper>
  );
}

export default RightCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 70%;
  height: 50vh;
  box-shadow: 1px 1px 2px #ddd, -1px -1px 2px #eee;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & img {
    height: 15px;
  }
`;
