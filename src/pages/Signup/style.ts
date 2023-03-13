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
  width: 100%;
  height: 100%;
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
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
`;

export const SignupLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`;

export const SignupWrap = styled.div`
  display: flex;
`;

export const PlaceholderWrap = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 90px 33px 0 0;
`;

export const Placeholder = styled.p<{ aniDuration: number }>`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  animation: ${placeholdeFadeIn} ${(props) => props.aniDuration}s;
`;

export const InputWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 200;
    font-size: 50px;
    font-family: AppleSDGothicNeoUL;
  }
  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    margin: 0 -10px 50px 0;
  }
`;

export const Input = styled.input`
  width: 448px;
  height: 75px;
  border: 2px solid #737373;
  border-radius: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  padding-left: 20px;
  &:focus {
    background: #f3f3f3;
    border: 2px solid #000000;
  }
`;

export const Button = styled.button`
  width: 476px;
  height: 76px;
  background: #000000;
  border-radius: 20px;
  color: #ffffff;
  margin-top: 50px;
  text-align: center;
  & span {
  }
  & span p {
    margin-top: 25px;
    font-size: 24px;
    backface-visibility: hidden;
    transition: 1s;
  }
  & span .front {
    position: absolute;
    margin-left: 188px;
  }
  & span .back {
    transform: rotateY(-180deg);
  }
  &:hover {
    span {
      .front {
        transform: rotateY(180deg);
      }
      .back {
        transform: rotateY(0deg);
      }
    }
  }
`;
