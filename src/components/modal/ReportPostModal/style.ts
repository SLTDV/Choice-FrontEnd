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
  width: 26.6rem;
  height: 14.4rem;
  background-color: #ffffff;
  border-radius: 1.4rem;
  z-index: 9999;
  margin: auto;
  text-align: center;
  padding: 2rem;
  background-color: #ffffff;
  color: #333333;
  & h3 {
    color: #fe5151;
    font-size: 2rem;
    font-weight: lighter;
    margin: 1rem 0 2rem 0;
  }
  & p {
    font-size: 1.6rem;
  }
  & div {
    margin-left: 11.6rem;
    margin-top: 2.2rem;
  }
`;

export const Button = styled.button`
  margin: 2rem 1rem;
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
