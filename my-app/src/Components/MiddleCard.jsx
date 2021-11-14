import React, { useState } from "react";
import styled from "styled-components";
import me from "../images/me.jpg";
import { GrClose } from "react-icons/gr";

function MiddleCard() {
  const [isModal, setisModal] = useState(false);

  return (
    <Wrapper>
      <Status>
        <img src={me} alt="" />
        <Button onClick={() => setisModal(true)}>Start a post</Button>
        {isModal && (
          <Modal>
            <Post>
              <Icon onClick={() => setisModal(false)} />
            </Post>
          </Modal>
        )}
      </Status>
    </Wrapper>
  );
}

export default MiddleCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Status = styled.div`
  width: 100%;
  height: 15vh;
  border-radius: 8px;
  box-shadow: 1px 1px 2px #ddd, -1px -1px 2px #eee;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 2rem;
  & img {
    border-radius: 50%;
    height: 50px;
  }
`;

const Button = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  margin-left: 1rem;
  background-color: white;
  border: 1px solid #8a8787;
  border-radius: 20px;
  cursor: pointer;

  &:active {
    background-color: #d4d1d1;
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 550px;
  max-height: 350px;
  max-width: 550px;
  background-color: white;
  border-radius: 12px;
  /* box-shadow: 1px 1px 2px #ddd, -1px -1px 2px #eee; */
  position: relative;
  border: 1px solid #888;

  @media (max-width: 593px) {
    width: 320px;
    height: 650px;
  }
`;

const Icon = styled(GrClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;
