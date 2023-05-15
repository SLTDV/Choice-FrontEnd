import styled from '@emotion/styled';

export const Box = styled.div`
  position: relative;
  &:hover {
    & span {
      opacity: 1;
      transition: 0.3s;
    }
    & div {
      transform: scale(1.1);
    }
  }
`;

export const DeleteChoice = styled.span`
  background: #ffffff;
  padding-top: 0.6rem;
  width: 3.4rem;
  height: 2.8rem;
  border-radius: 35%;
  color: #e10000;
  position: absolute;
  top: 0rem;
  opacity: 0;
  font-size: 1.5rem;
  right: 0;
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: scale(1.15);
  }
`;
