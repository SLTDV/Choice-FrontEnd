import styled from '@emotion/styled';

export const Layout = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-around;
`;

export const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
`;

export const Modal = styled.div`
  width: 30rem;
  height: 16rem;
  background-color: #ffffff;
  border-radius: 1.4rem;
  z-index: 9999;
  margin: auto;
  text-align: center;
  padding: 2rem;
  background-color: #ffffff;
  color: #333333;
  & h3 {
    font-size: 2rem;
    font-weight: lighter;
  }
  & p {
    font-size: 1.6rem;
  }
`;

export const Button = styled.button`
  margin: 3rem 1.2rem;
  cursor: pointer;
  width: 10rem;
  height: 3rem;
  border-radius: 1.4rem;
  color: #ffffff;
  background-color: #333333;
  font-size: 1.4rem;
  border: 2px solid #333333;
  transition: 0.2s;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
