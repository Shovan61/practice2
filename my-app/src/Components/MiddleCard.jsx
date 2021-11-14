import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import me from "../images/me.jpg";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { BsCardImage } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";

function MiddleCard() {
  const user = useSelector((state) => state.user);
  const [isModal, setisModal] = useState(false);
  const modalRef = useRef();

  console.log(modalRef.current);

  useEffect(() => {
    focusing();
  }, [isModal]);

  const focusing = () => {
    if (isModal) {
      modalRef.current.focus();
    }
  };

  return (
    <Wrapper>
      <Status>
        <img src={user.photo} alt="" />
        <Button onClick={() => setisModal(true)}>Start a post</Button>
        {isModal && (
          <Modal>
            <Post>
              <Icon onClick={() => setisModal(false)} />
              <span>Create a post</span>
              <Underline />
              <Person>
                <img src={user.photo} alt="photo" />
                <h5>{user.name.toUpperCase()}</h5>
              </Person>

              <Text
                ref={modalRef}
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="What do you want to talk about?"
              ></Text>
              <Upload>
                <Left>
                  <BsCardImage />
                  <MdOndemandVideo />
                </Left>
                <PostButton>Post</PostButton>
              </Upload>
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
  & span {
    padding: 2rem;
    font-size: 18px;
    color: #666666;
    letter-spacing: 1px;
  }
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

const Underline = styled.div`
  background-color: #dfdfdf;
  height: 1px;
  width: 100%;
  margin-top: 0.5rem;
`;

const Person = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  & h5 {
    margin-left: 0.5rem;
  }
`;

const Text = styled.textarea`
  resize: none;
  margin-left: 2rem;
  margin-right: 2rem;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    border: none;
    outline: none !important;
  }
`;

const Upload = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
`;

const Left = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  & svg {
    cursor: pointer;
    font-size: 2rem;
  }
`;

const PostButton = styled.div`
  padding: 0.5rem 2em;
  background-color: #5454f1;
  cursor: pointer;
  color: white;
  border-radius: 12px;
  &:hover {
    background-color: #010192;
  }
`;
