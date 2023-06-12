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

export const InputWrap = styled.form`
  display: flex;
  position: relative;
  margin-top: 2rem;
  div {
    display: flex;
    padding-bottom: 22.5rem;
  }
`;

export const Input = styled.input<{
  width?: string;
  isError?: boolean;
  Activation: boolean;
}>`
  width: ${(props) => (props.width ? props.width : '44.8rem')};
  height: 7.5rem;
  border: ${(props) =>
    props.isError ? '2px solid #ffffff' : '2px solid #737373'};
  border-color: ${(props) => props.Activation == false && '#a3a3a3'};
  box-shadow: ${(props) => (props.isError ? '0px 2px 10px #e10000' : 'none')};
  border-radius: 2rem;
  font-size: 1.8rem;
  padding-left: 2rem;
  transition: 0.2s;
  background: ${(props) => (props.Activation ? '' : '#f3f3f3')};
  &:focus {
    background: #f3f3f3;
    outline: none;
    border: ${(props) =>
      props.isError ? '2px solid #ffffff' : '2px solid #000000'};
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

export const Button = styled.button<{ isActivation: boolean }>`
  width: 13rem;
  height: 8.2rem;
  margin-left: 1.6rem;
  background: ${(props) => (props.isActivation ? '#000000' : '#a3a3a3')};
  pointer-events: ${(props) => (props.isActivation ? 'all' : 'none')};
  border-radius: 20px;
  color: #ffffff;
  font-size: 20px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
`;
export const TimerLayout = styled.div`
  height: 0;
  width: 0;
  position: absolute;
  background: #000000;
  right: 8.4rem;
  top: 2.8rem;
  & p {
    font-size: 2rem;
  }
`;
export const NextButton = styled.button`
  position: absolute;
  width: 47.6rem;
  height: 7.6rem;
  background: #000000;
  border-radius: 20px;
  color: #ffffff;
  margin-top: 15rem;
  font-size: 24px;
  border: none;
  cursor: pointer;
  transform: translate(15rem, 8rem);
`;

export const ErrorText = styled.p`
  position: absolute;
  color: #e10000;
  font-size: 1.2rem;
  margin: 1.2rem 0 0 2.3rem;
  transform: translateX(15rem);
`;

export const Retransmission = styled.p`
  font-size: 1.4rem;
  position: absolute;
  color: #939393;
  right: 18.6rem;
  top: 12rem;
  cursor: pointer;
  &:hover {
    transition: 0.4s;
    color: #000000;
  }
`;