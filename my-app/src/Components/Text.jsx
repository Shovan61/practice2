import React from "react";
import styled from "styled-components";

function Text() {
  return (
    <Wrapper>
      <span>
        <span
          style={{ fontWeight: "800", color: "#001c99", cursor: "pointer" }}
        >
          New marketing case study
        </span>{" "}
        -Learn how Innodisk drove 88% new visitor traffic from LinkedIn
      </span>
    </Wrapper>
  );
}

export default Text;

const Wrapper = styled.div`
  cursor: pointer;
  align-self: center;
  text-align: center;
  padding: 1rem 4rem 0rem 4rem;
  max-width: 1300px;
  & span {
    text-decoration: underline;
  }
  @media (max-width: 828px) {
    & span {
      font-size: 13px;
    }
  }
  @media (max-width: 670px) {
    & span {
      font-size: 10px;
    }
  }
`;
