import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const modal = keyframes`
    0%{
        bottom: 0;
        opacity: 0.1;
        transform: scale(0);
    }
    100%{
    }
`;

export const Layout = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-around;
`;

export const Modal = styled.div`
  position: absolute;
  width: 35rem;
  height: 35rem;
  border-radius: 2rem;
  opacity: 1;
  background-color: #ffffff;
  transition: 0.5s;
  bottom: 50%;
  animation: ${modal} 0.5s ease;
`;
