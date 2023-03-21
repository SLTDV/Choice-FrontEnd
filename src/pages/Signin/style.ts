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
`;

export const LogoLayout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 18.23%;
`;

export const LogoWrap = styled.div`
  text-align: right;
  img {
    animation: ${fadeIn} 1s;
  }
  p {
    margin: 0;
    color: #6d6d6d;
    animation: ${fadeIn} 1s;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
  }
`;

export const SigninLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SigninForm = styled.form`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 200;
    font-size: 5rem;
    font-family: AppleSDGothicNeoUL;
  }
  h3 {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 17px;
    margin: -1.2rem 0 5rem 0;
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
  }
  & .label {
    position: absolute;
    font-size: 1.8rem;
    transition: 0.3s ease;
    margin: 3rem 0 0 2.3rem;
    color: #737373;
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

export const Button = styled.button`
  width: 60rem;
  height: 7.5rem;
  background-color: #000000;
  border-radius: 2rem;
  color: #ffffff;
  font-size: 2.4rem;
  margin-top: 6rem;
  cursor: pointer;
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
