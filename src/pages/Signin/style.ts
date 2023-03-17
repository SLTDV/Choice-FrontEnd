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
  svg {
    animation: ${fadeIn} 0.8s;
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

export const Input = styled.input`
  width: 57rem;
  height: 7.5rem;
  border: 2px solid #737373;
  border-radius: 2rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  padding-left: 2rem;
  &:focus {
    background: #f3f3f3;
    outline: none;
    border: 2px solid #000000;
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
