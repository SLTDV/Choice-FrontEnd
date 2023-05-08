import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-weight: 200;
    font-size: 5rem;
    font-family: AppleSDGothicNeoUL;
    transform: translateX(7.8rem);
  }
  h3 {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 17px;
    margin: -1.2rem 0 5rem 0;
    transform: translateX(7.8rem);
  }
`;

export const InputWrap = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Input = styled.input<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : '44.8rem')};
  height: 7.5rem;
  border: 2px solid #737373;
  box-shadow: none;
  border-radius: 2rem;
  font-size: 1.8rem;
  padding-left: 2rem;
  &:focus {
    background: #f3f3f3;
    outline: none;
    border: 2px solid #000000;
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
`;

export const Button = styled.button`
  width: 13rem;
  height: 8.2rem;
  margin-left: 1.6rem;
  background: #000000;
  border-radius: 20px;
  color: #ffffff;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

export const NextButton = styled.button`
  width: 47.6rem;
  height: 7.6rem;
  background: #bbbbbb;
  border-radius: 20px;
  color: #ffffff;
  margin-top: 15rem;
  font-size: 24px;
  border: none;
  cursor: pointer;
  transform: translateX(15rem);
`;
