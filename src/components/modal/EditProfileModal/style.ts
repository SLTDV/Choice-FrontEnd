import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const modal = keyframes`
    0%{
        bottom: -30%;
        opacity: 0;
        transform: scale(0);
    }
`;

export const Layout = styled.section`
  position: fixed;
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
  text-align: center;
  z-index: 9999;
  position: absolute;
  width: 72rem;
  height: 58rem;
  border-radius: 2rem;
  opacity: 1;
  background-color: #ffffff;
  transition: 0.5s ease-out;
  bottom: 22%;
  animation: ${modal} 0.5s ease;
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: 2.4rem;
    margin: 5rem 0;
    margin-bottom: 6rem;
  }
  & button {
    width: 30rem;
    margin: auto;
    height: 6rem;
    color: #ffffff;
    background-color: #000000;
    border: none;
    border-radius: 2rem;
    font-size: 2rem;
    margin-top: 0;
    cursor: pointer;
  }
  & .edit {
    position: absolute;
    bottom: 17rem;
    right: 22rem;
    width: 2rem;
    height: 2rem;
  }
  & img {
    cursor: pointer;
  }
`;

export const NicknameInput = styled.input`
  width: 28rem;
  font-size: 2rem;
  border: none;
  border-bottom: 1px solid #b0b0b0;
  outline: none;
  text-align: center;
  margin: auto;
  margin-top: 3.3rem;
  margin-bottom: 1rem;
  &:focus {
    border-color: #000000;
  }
`;

export const Image = styled.input<{ image?: string }>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
  display: flex;
  width: 21rem;
  height: 21rem;
  border: none;
  cursor: pointer;
  font-size: 0;
  border-radius: 26rem;
  position: relative;
  &::-webkit-file-upload-button {
    top: 42%;
    left: 42%;
    position: absolute;
    border: none;
    background-image: url('svg/ProfileImageUpload.svg');
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: transparent;
  }
`;

export const ErrorMessage = styled.p<{ isError: boolean }>`
  color: #e10000;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  opacity: ${(props) => (props.isError ? '1' : '0')};
`;

export const Close = styled.p`
  font-size: 1.7rem;
  position: absolute;
  right: 5rem;
  top: 5rem;
  color: #6d6d6d;
  cursor: pointer;
`;
