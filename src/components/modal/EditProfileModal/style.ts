import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const modal = keyframes`
    0%{
        bottom: 0;
        opacity: 0.1;
        transform: scale(0);
    }
    100%{
    }
`;

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

export const Modal = styled.div`
  position: absolute;
  width: 35rem;
  height: 35rem;
  border-radius: 2rem;
  opacity: 1;
  background-color: #ffffff;
  transition: 0.5s;
  bottom: 50%;
  animation: ${modal} 0.5s ease;
  & span {
    padding: 0rem 39%;
    width: 22%;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.6rem;
      cursor: pointer;
    }
    .cancel {
      color: #ec5f5f;
    }
  }
`;

export const Image = styled.input<{ image?: string }>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 3.4rem auto;
  display: flex;
  width: 24rem;
  height: 24rem;
  border: none;
  cursor: pointer;
  font-size: 0;
  border-radius: 26rem;
  &::-webkit-file-upload-button {
    position: absolute;
    border: none;
    background-image: url('svg/Plus.svg');
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    top: 4.4rem;
    left: 24rem;
    background-color: transparent;
  }
`;
