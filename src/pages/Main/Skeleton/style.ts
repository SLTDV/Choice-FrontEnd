import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const skeletonAnimation = keyframes`
    0%{
        background: #f5f5f5;
    }
    50%{
        background: #E0E0E0;
    }
    100%{ background: #f5f5f5 }
`;

export const Skeleton = styled.div`
  width: 30rem;
  height: 30rem;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  position: relative;
  background: #f5f5f5;
  animation: ${skeletonAnimation} 1.8s infinite;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const InfoBox = styled.div`
  width: 26rem;
  height: 8rem;
  padding: 1rem 2rem;
  border-radius: 0 0 2rem 2rem;
  bottom: 0;
  background: #ffffff;
  position: absolute;
  & .info {
    display: flex;
    position: absolute;
    bottom: 1rem;
    right: 2rem;
  }
`;

export const text = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${skeletonAnimation} 1.8s infinite;
  margin-bottom: 0.5rem;
  border-radius: 5px;
`;

export const Info = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${skeletonAnimation} 1.8s infinite;
  border-radius: 5px;
  margin-left: 1rem;
`;
