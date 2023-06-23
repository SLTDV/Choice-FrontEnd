import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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
const placeholdeFadeIn = keyframes`
    0%{
        opacity: 0;
        margin-left: -20px;
    }
    100%{
        opacity: 1;
        margin-left: 0;
    }
`;

export const Layout = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  & .layout {
    display: flex;
    @media screen and (max-width: 1475px) {
      flex-direction: column;
    }
  }
`;

export const LogoLayout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 19vw;
  @media screen and (max-width: 1475px) {
    height: 40vh;
    align-items: center;
    text-align: center;
    margin: 8vh auto 5vw auto;
  }
  @media screen and (max-width: 768px) {
    height: 30vh;
    align-items: center;
    text-align: center;
    margin: 8vh auto 5vw auto;
  }
`;

export const LogoWrap = styled.div`
  text-align: right;
  img {
    animation: ${fadeIn} 1s;
    @media screen and (max-width: 1475px) {
      height: 8rem;
      margin: 0 auto;
    }
  }
  p {
    color: #b5b3b3;
    animation: ${fadeIn} 1s;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    @media screen and (max-width: 1475px) {
      margin: -1rem auto;
    }
  }
  @media screen and (max-width: 1475px) {
    text-align: center;
    width: 30rem;
  }
`;

export const SignupLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 70rem;
  @media screen and (max-width: 1475px) {
    width: 70vw;
  }
`;

export const Label = styled.label<{ aniDuration: number }>`
  text-align: right;
  width: 10rem;
  margin-right: 5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  transform: translateY(2.8rem);
  animation: ${placeholdeFadeIn} ${(props) => props.aniDuration}s;
  @media screen and (max-width: 1475px) {
    text-align: left;
    font-size: 1.4rem;
    transform: translate(1rem, -0.6rem);
  }
`;

export const SignupForm = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  & h1 {
    font-weight: 200;
    font-size: 5rem;
    font-family: AppleSDGothicNeoUL;
  }
  & h3 {
    transform: translateX(0rem);
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 17px;
    margin: -1.2rem 0 5rem 0;
  }
  & div {
    display: flex;
    @media screen and (max-width: 1475px) {
      flex-direction: column;
      position: relative;
    }
    @media screen and (max-width: 440px) {
      width: 30rem;
      margin-left: -2.5rem;
    }
    @media screen and (max-width: 420px) {
      margin-left: 0rem;
    }
    @media screen and (max-width: 400px) {
      margin-left: 1rem;
    }
  }
  & .title {
    display: flex;
    flex-direction: column;
    margin-left: 7.4rem;
    @media screen and (max-width: 1475px) {
      display: none;
    }
  }
  @media screen and (max-width: 1475px) {
    align-items: center;
    margin-top: -20vh;
  }
  @media screen and (max-width: 400px) {
    margin-top: -4rem;
  }
`;

export const Input = styled.input<{ isError?: boolean }>`
  width: 44.8rem;
  height: 7.5rem;
  border: ${(props) => (props.isError ? 'none' : '2px solid #737373')};
  box-shadow: ${(props) => (props.isError ? '0px 2px 10px #e10000' : 'none')};
  margin-top: ${(props) => (props.isError ? '0.4rem' : 'none')};
  border-radius: 2rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  padding-left: 2rem;
  &:focus {
    background: #f3f3f3;
    outline: none;
    border: ${(props) => (props.isError ? 'none' : '2px solid #000000')};
  }
  &::placeholder {
    opacity: ${(props) => (props.isError ? '0' : '0.5')};
  }
  @media screen and (max-width: 630px) {
    width: 70vw;
  }
  @media screen and (max-width: 440px) {
    width: 100%;
    height: 6.5rem;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  color: #e10000;
  font-size: 1.2rem;
  margin: 1.6rem 0 0 2.3rem;
  transform: translateX(15rem);
  @media screen and (max-width: 1475px) {
    transform: translate(-1rem, 1.6rem);
    right: 0;
  }
`;

export const Button = styled.button`
  width: 47.6rem;
  height: 7.6rem;
  background: #000000;
  border-radius: 20px;
  color: #ffffff;
  margin-top: 5rem;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  transform: translateX(15rem);
  @media screen and (max-width: 1475px) {
    transform: translateX(0);
  }
  @media screen and (max-width: 630px) {
    width: calc(70vw + 2.4rem);
  }
  @media screen and (max-width: 440px) {
    width: 109%;
  }
  @media screen and (max-width: 420px) {
    margin-right: -2.4rem;
    width: 33rem;
  }
  @media screen and (max-width: 400px) {
    margin-right: -3.2rem;
    width: 32.8rem;
  }
`;
