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
    animation: ${fadeIn} 0.5s;
  }
  p {
    margin: 0;
    color: #6d6d6d;
    animation: ${fadeIn} 1.5s;
  }
`;
