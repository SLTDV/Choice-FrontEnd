import styled from '@emotion/styled';

export const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
`;

export const Modal = styled.div`
  width: 34rem;
  height: 19rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  text-align: center;
  z-index: 9999;
  position: fixed;
  top: 50%;
  transform: translateY(-10rem);
  & h1 {
    font-size: 2rem;
    margin-top: 3.5rem;
    margin-bottom: 0.5rem;
  }
  & p {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  & button {
    width: 10rem;
    height: 3rem;
    border-radius: 1rem;
    border: 2px solid #333333;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }
  & button:hover {
    background-color: #333333;
    color: #ffffff;
  }
  & div {
    margin-left: 15.4rem;
  }
`;
