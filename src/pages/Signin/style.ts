import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
    0%{
        opacity: 0;
        margin-bottom: -10px;
    }
    100%{
        opacity: 1;
        margin-bottom: 0;
    }
`;

export const Layout = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  & .layout {
    display: flex;
    @media screen and (max-width: 1380px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const LogoLayout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 22vw;
  @media screen and (max-width: 1380px) {
    height: 9rem;
    width: 100%;
    align-items: center;
    margin-bottom: 7vw;
  }
`;

export const LogoWrap = styled.div`
  text-align: right;
  img {
    animation: ${fadeIn} 1s;
    @media screen and (max-width: 1380px) {
      height: 8rem;
      margin: 0 auto;
    }
  }
  p {
    margin: 0;
    color: #b5b3b3;
    animation: ${fadeIn} 1s;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    @media screen and (max-width: 1380px) {
      text-align: center;
      margin-top: -1rem;
    }
  }
`;

export const SigninLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 1380px) {
    height: 50rem;
  }
`;

export const SigninForm = styled.form`
  position: relative;
  text-align: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 200;
    font-size: 5rem;
    font-family: AppleSDGothicNeoUL;
    @media screen and (max-width: 1380px) {
      display: none;
    }
  }
  h3 {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 17px;
    margin: -1.2rem 0 5rem 0;
    @media screen and (max-width: 1380px) {
      display: none;
    }
  }
`;

export const LoginInput = styled.div<{ isError: boolean }>`
  position: relative;
  width: 100%;
  height: 7.5rem;
  margin-bottom: 3.2rem;
  & input {
    position: absolute;
    width: 57rem;
    height: 7.5rem;
    border: ${(props) =>
      props.isError ? '2px solid #F04949' : '2px solid #737373'};
    border-radius: 2rem;
    font-size: 1.8rem;
    padding-left: 2rem;
    transition: 0.1s ease;
    left: 0;
    @media screen and (max-width: 768px) {
      width: 74vw;
      margin: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  & .label {
    position: absolute;
    font-size: 1.8rem;
    transition: 0.3s ease;
    margin: 3rem 0 0 2.3rem;
    color: #737373;
    @media screen and (max-width: 400px) {
      margin-left: 3rem;
    }
  }
  & input:focus {
    outline: none;
    border: ${(props) =>
      props.isError ? '2px solid #E10000' : '2px solid #000000'};
  }

  & input:focus + .label,
  & input:valid + .label {
    color: ${(props) => (props.isError ? '#E10000' : '#000000')};
    font-weight: bold;
    transform: translate(1.5rem, -3.8rem) scale(0.88);
    background-color: white;
    padding: 0 1rem;
  }
  & input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  }
`;

export const ForgetPassword = styled.p`
  position: absolute;
  right: 1rem;
  bottom: 18rem;
  cursor: pointer;
  & a {
    color: #939393;
    font-size: 1.4rem;
  }
  & a:hover {
    transition: 0.3s;
    color: #000000;
  }
  @media screen and (max-width: 400px) {
    width: 60vw;
    left: 40%;
    transform: translateX(-6%);
  }
`;

export const Button = styled.button<{ isLoading: boolean }>`
  width: 59.6rem;
  height: 7.5rem;
  background-color: ${(props) => (props.isLoading ? '#333333' : '#000000')};
  border-radius: 2rem;
  border: none;
  color: ${(props) => (props.isLoading ? '#333333' : '#ffffff')};
  font-size: 2.4rem;
  margin-top: 6rem;
  cursor: ${(props) => (props.isLoading ? 'none' : 'pointer')};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'all')};
  @media screen and (max-width: 768px) {
    width: calc(74vw + 2.5rem);
  }
`;

export const SpinnerLayout = styled.div`
  position: absolute;
  bottom: 7rem;
  & div {
    border-color: #ffffff;
  }
`;

export const GoSignup = styled.div`
  margin-top: 2.8rem;
  width: 12rem;
  background-color: #ffffff;
  border-left: 2px solid #dedede;
  border-right: 2px solid #dedede;
  cursor: pointer;
  & a {
    text-decoration: none;
    color: black;
    font-size: 1.6rem;
  }
`;
