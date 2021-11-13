import React from "react";
import styled from "styled-components";
import feed from "../images/feed-icon.svg";
import photo from "../images/photo.svg";
import job from "../images/job.jfif";
import unilever from "../images/unilever.jfif";

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
        <div
          style={{
            height: "30px",
            width: "100%",
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "3rem",
          }}
        >
          <img style={{ height: "40px" }} src={unilever} alt="" />
          <span style={{ fontSize: "12px" }}>Unilever</span>
        </div>
        <div
          style={{
            height: "30px",
            width: "100%",
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1.4rem",
          }}
        >
          <img style={{ height: "40px" }} src={job} alt="" />
          <span style={{ fontSize: "12px" }}>Bd Job</span>
        </div>
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
