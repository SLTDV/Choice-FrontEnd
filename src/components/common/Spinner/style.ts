import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const spin = keyframes`
  0%{ 
    transform: rotate(0deg) ;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
  100%{ transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #333333;
  border-top-color: transparent;
  animation: ${spin} 1s infinite;
`;
