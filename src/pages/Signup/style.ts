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

export const LogoLayout = styled.div`
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

export const SignupFrom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`;

export const PlaceholderWrap = styled.div`
  height: 601px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Placeholder = styled.p<{ aniDuration: number }>`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  animation: ${placeholdeFadeIn} ${(props) => props.aniDuration}s;
`;
