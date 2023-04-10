import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const progress = keyframes`
  0%{
    width: 0%;
  }
  100%{
    width: 98%;
  }
`;

export const Layout = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 9999;
  & img {
    margin-bottom: 1rem;
  }
`;

export const ProgressBarBox = styled.div`
  width: 18rem;
  height: 1rem;
  border: 1px solid #000000;
  margin: auto;
  border-radius: 6px;
`;
export const ProgressBar = styled.div`
  width: 98%;
  height: 1rem;
  background-color: #434343;
  animation: ${progress} 0.3s ease-in;
  border-radius: 6px;
`;
