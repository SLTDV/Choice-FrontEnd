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
  height: 48rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 7.8rem 3.3rem 0 0;
`;

export const Placeholder = styled.p<{ aniDuration: number }>`
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  color: #000000;
  animation: ${placeholdeFadeIn} ${(props) => props.aniDuration}s;
`;

export const InputWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 200;
    font-size: 5rem;
    font-family: AppleSDGothicNeoUL;
  }
  p {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 17px;
    margin: -1.2rem 0 5rem 0;
  }
`;

export const Input = styled.input`
  width: 44.8rem;
  height: 7.5rem;
  border: 2px solid #737373;
  border-radius: 20px;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  padding-left: 2rem;
  &:focus {
    background: #f3f3f3;
    border: 2px solid #000000;
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
  & span {
  }
  & span p {
    margin-top: 2.5rem;
    font-size: 2.4rem;
    backface-visibility: hidden;
    transition: 1s;
  }
  & span .front {
    position: absolute;
    margin-left: 18.8rem;
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
