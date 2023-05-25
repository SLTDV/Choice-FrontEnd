import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.section`
  padding-top: 17rem;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-around;
  & span {
    display: flex;
  }
`;

export const PostDetailSection = styled.section`
  width: 85rem;
  text-align: center;
  & h1 {
    font-size: 3rem;
  }
`;

export const ProfileBox = styled.div`
  position: absolute;
  display: flex;
  margin-top: -0.5rem;
  & img {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    object-fit: cover;
  }
  & p {
    font-size: 1.6rem;
    margin: auto 1rem;
  }
`;

export const Detail = styled.section`
  width: 100%;
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  margin: 3.5rem 0;
  padding: 3.5rem 0;
`;

export const Description = styled.p`
  margin: 0 auto;
  width: 60rem;
  font-size: 2rem;
  line-height: 3.4rem;
  word-break: break-all;
`;

export const VoteBox = styled.div`
  padding: 6rem 0 5rem 0;
  width: 100%;
  & p {
    font-size: 3rem;
    color: #6d6d6d;
    font-weight: bold;
    margin: auto;
  }
`;

export const OptionBox = styled.div<{ votingState: number }>`
  display: flex;
  width: 74rem;
  justify-content: space-between;
  margin: 0 auto;
  & .first {
    box-shadow: ${(props) =>
      props.votingState == 1 && '0 0 0 4px #000000 inset'};
  }
  & .second {
    box-shadow: ${(props) =>
      props.votingState == 2 && '0 0 0 4px #000000 inset'};
  }
`;

export const Option = styled.div<{ image?: string }>`
  width: 30rem;
  height: 30rem;
  border-radius: 2rem;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  &:hover {
    & div {
      opacity: 1;
      bottom: 0;
    }
  }
`;

export const HoverBox = styled.span`
  width: 100%;
  height: 100%;
  &:hover {
    & div {
      opacity: 1;
      bottom: 0;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
      p {
        opacity: 1;
      }
    }
  }
  & div {
    pointer-events: none;
  }
`;

export const OptionName = styled.div`
  border-radius: 0 0 1.8rem 1.8rem;
  width: 26rem;
  height: 6rem;
  background-color: #ffffff;
  position: absolute;
  bottom: -8rem;
  opacity: 0;
  padding: 1rem 2rem;
  transition: 0.3s ease;
  & p {
    color: #000000 !important;
    opacity: 0;
    font-size: 2.2rem;
    line-height: 6rem;
    transition: 0.3s;
  }
`;
export const ButtonWrap = styled.div<{ votingState?: number }>`
  display: flex;
  width: 61rem;
  margin: 0 auto;
  padding-top: 2.8rem;
  justify-content: space-between;
  & button {
    background: ${(props) => props.votingState == 0 && '#f3f3f3'};
  }
  & .firstBtn {
    background: ${(props) => props.votingState == 1 && '#000000'};
    color: ${(props) => props.votingState == 1 && '#ffffff'};
    & p {
      color: ${(props) => props.votingState == 1 && '#ffffff'};
    }
  }
  & .secondBtn {
    background: ${(props) => props.votingState == 2 && '#000000'};
    color: ${(props) => props.votingState == 2 && '#ffffff'};
    & p {
      color: ${(props) => props.votingState == 2 && '#ffffff'};
    }
  }
`;

export const VoteButton = styled.button`
  width: 17rem;
  height: 11rem;
  background-color: '#f3f3f3';
  border-radius: 20px;
  border: none;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  z-index: 20;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 2px 10px #9f9f9f;
  }
  & p {
    font-size: 1.5rem;
    color: #000000;
  }
`;

export const LastCommentLine = styled.div<{ hidden: boolean }>`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  margin-top: -10rem;
`;

export const spin = keyframes`
  0%{ 
    transform: rotate(0deg) ;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
  100%{ transform: rotate(360deg); }
`;

export const Spinner = styled.div<{ isLoading: boolean }>`
  display: ${(props) => (props.isLoading ? 'block' : 'none')};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 8rem 0 5rem 50%;
  border: 2px solid #333333;
  border-top-color: transparent;
  animation: ${spin} 1s infinite;
`;
