import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.section`
  padding-top: 17rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  & span {
    display: flex;
  }
  margin-left: -1.4rem;
  @media screen and (max-width: 1300px) {
    margin-left: 0;
  }
  @media screen and (max-width: 728px) {
    margin-left: -2rem;
  }
  @media screen and (max-width: 500px) {
    margin-left: -1.2rem;
  }
`;

export const PostDetailSection = styled.section`
  width: 85rem;
  text-align: center;
  transition: 0.3s;
  position: relative;
  background: #ffffff;
  & .title {
    transition: 0.3s;
    @media screen and (max-width: 950px) {
      font-size: 2.8rem;
      margin-bottom: -1rem;
      margin-top: 0.6rem;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: -2rem;
    }
    @media screen and (max-width: 720px) {
      margin: 7rem 0 -4rem 3rem;
      text-align: left;
    }
    @media screen and (max-width: 500px) {
      margin-left: 2rem;
      text-align: left;
    }
  }
  @media screen and (max-width: 950px) {
    width: 75rem;
  }

  @media screen and (max-width: 768px) {
    width: 70rem;
  }
  @media screen and (max-width: 720px) {
    width: 96%;
  }
  & h1 {
    font-size: 3rem;
  }
`;

export const ProfileBox = styled.div`
  position: absolute;
  display: flex;
  margin-top: -0.5rem;
  transition: 0.3s;
  & img {
    transition: 0.3s;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    object-fit: cover;
    @media screen and (max-width: 720px) {
      width: 4rem;
      height: 4rem;
    }
  }
  & p {
    font-size: 1.6rem;
    margin: auto 1rem;
  }
  @media screen and (max-width: 950px) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 3rem;
    transform: scale(0.9);
  }
  @media screen and (max-width: 720px) {
    margin-left: 3.6%;
  }
`;

export const Kebob = styled.div`
  position: absolute;
  right: 0.2rem;
  top: 2rem;
  z-index: 9100;
  cursor: pointer;
  @media screen and (max-width: 950px) {
    right: 2rem;
  }
  @media screen and (max-width: 768px) {
    right: 3rem;
  }
  @media screen and (max-width: 720px) {
    right: -0.4rem;
    top: 8.4rem;
  }
`;

const KebobModalAni = keyframes`
    0%{
        width: 3rem;
        height: 2rem;
    }
    50%{ width: 3rem; }
`;

const KebobModalTextAni = keyframes`
    0%{ opacity: 0; }
    50%{ opacity: 0; }
`;

const KebobModalCloseAni = keyframes`
    0%{
        opacity: 1;
        width: 12rem;
        height: 9rem;
    }
    50%{
      height: 9rem;
    }
    90%{ opacity:1 }
    100%{ opacity: 0 }
`;

const KebobModalTextCloseAni = keyframes`
    0%{ opacity: 1; }
    10%{ opacity: 0; }
`;

export const KebobModal = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 9000;
  right: 0;
  top: 4.4rem;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  width: ${(props) => (props.isOpen ? '12rem' : '3rem')};
  height: ${(props) => (props.isOpen ? '9rem' : '2rem')};
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  animation: ${(props) => (props.isOpen ? KebobModalAni : KebobModalCloseAni)}
    0.7s;
  & p {
    animation: ${(props) =>
        props.isOpen ? KebobModalTextAni : KebobModalTextCloseAni}
      1.3s ease-in;
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    color: #e10000;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    cursor: ${(props) => (props.isOpen ? 'pointer' : 'none')};
    pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  }
  @media screen and (max-width: 950px) {
    right: 2rem;
  }
  @media screen and (max-width: 768px) {
    right: 3rem;
  }
  @media screen and (max-width: 720px) {
    right: -0.4rem;
    top: 10.8rem;
  }
`;

export const Detail = styled.section`
  width: 100%;
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  margin: 3.5rem 0;
  padding: 3.5rem 0;
  transition: 0.3s;
  @media screen and (max-width: 950px) {
    transform: scale(0.95);
  }
  @media screen and (max-width: 768px) {
    transform: scale(0.92);
  }
  @media screen and (max-width: 720px) {
    width: 110%;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem 0;
    padding-bottom: 1rem;
  }
`;

export const Description = styled.p`
  margin: 0 auto;
  width: 60rem;
  font-size: 2rem;
  line-height: 3.4rem;
  white-space: pre-line;
  @media screen and (max-width: 720px) {
    text-align: left;
    width: 96%;
  }
  @media screen and (max-width: 500px) {
    text-align: left;
    width: 97%;
  }
`;

export const VoteBox = styled.div`
  padding: 6rem 0 5rem 0;
  width: 100%;
  & .vs {
    font-size: 3rem;
    color: #6d6d6d;
    font-weight: bold;
    margin: auto;
    @media screen and (max-width: 720px) {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 4rem 0 4rem 0;
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

  @media screen and (max-width: 768px) {
    width: 70rem;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
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
  @media screen and (max-width: 720px) {
    width: 42vw;
    height: 42vw;
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
  @media screen and (max-width: 720px) {
    display: none;
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
  @media screen and (max-width: 768px) {
    width: 82%;
  }
  @media screen and (max-width: 720px) {
    width: 78%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
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
    @media screen and (max-width: 620px) {
      font-size: 1.3rem;
    }
  }
  & h1 {
    @media screen and (max-width: 620px) {
      font-size: 2.3rem;
    }
  }
  & img {
    @media screen and (max-width: 700px) {
      height: 12vw;
    }
  }
  @media screen and (max-width: 720px) {
    width: 26vw;
    height: 16vw;
  }
  @media screen and (max-width: 500px) {
    width: 42vw;
    height: 16vw;
  }
`;

export const LastCommentLine = styled.div<{ hidden: boolean }>`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  margin-top: -10rem;
`;

export const SpinnerLayout = styled.div`
  margin: 8rem 0 5rem 50%;
`;
