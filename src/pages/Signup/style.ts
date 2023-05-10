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
  }
`;

export const LogoLayout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: -14%;
  margin-right: 30%;
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

export const SignupLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 70rem;
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
`;

export const SignupForm = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 200;
    font-size: 5rem;
    font-family: AppleSDGothicNeoUL;
    transform: translateX(7.8rem);
  }
  h3 {
    transform: translateX(7.8rem);
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 17px;
    margin: -1.2rem 0 5rem 0;
  }
  & div {
    display: flex;
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
`;

export const ErrorText = styled.p`
  position: absolute;
  color: #e10000;
  font-size: 1.2rem;
  margin: 1.6rem 0 0 2.3rem;
  transform: translateX(15rem);
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
`;
