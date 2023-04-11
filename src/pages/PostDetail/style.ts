import styled from '@emotion/styled';

export const Layout = styled.section`
  padding-top: 17rem;
  width: 66vw;
  display: flex;
  margin: auto;
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
    background-color: pink;
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

export const OptionBox = styled.div`
  display: flex;
  width: 74rem;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Option = styled.div<{ image?: string }>`
  width: 30rem;
  height: 30rem;
  background-color: aliceblue;
  border-radius: 2rem;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
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
    font-size: 2.2rem;
    line-height: 6rem;
  }
  &:hover {
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  width: 61rem;
  margin: 0 auto;
  padding-top: 2.8rem;
  justify-content: space-between;
`;

export const VoteButton = styled.button`
  width: 17rem;
  height: 11rem;
  background-color: #f3f3f3;
  border-radius: 20px;
  border: none;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease;
  z-index: 20;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 2px 10px #9f9f9f;
  }
`;

export const TodaysPosts = styled.section`
  margin-left: 10%;
`;

export const TodaysPostsLayout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
`;

export const Todays = styled.h1`
  width: 13rem;
  font-size: 2.2rem;
  line-height: 4rem;
  margin: 3.4rem 0;
  border-bottom: 1px solid #000;
`;

export const CommentSection = styled.section`
  text-align: left;
  padding-top: 7rem;
  padding-left: 6rem;
  & h1 {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  & textarea {
    width: 65rem;
    height: 8rem;
    font-size: 1.5rem;
    padding: 6rem 5.8rem 1.5rem 5.8rem;
    border-radius: 20px;
    border: 1px solid #efefef;
    resize: none;
    &:focus {
      outline: 1px solid #737373;
    }
  }
  & button {
    width: 10rem;
    height: 3rem;
    background: #f3f3f3;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    color: #898989;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    align-self: flex-end;
    cursor: pointer;
  }
  & div {
    position: absolute;
    top: 1.8rem;
    left: 1.8rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  & img {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    background-color: pink;
  }
`;

export const Name = styled.p`
  font-size: 1.5rem;
  margin: auto 0.9rem;
  color: #737373;
`;

export const Comments = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CommentBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #efefef;
  position: relative;
  padding: 3rem 0;
  & div {
    background-color: #ffffff;
    margin-left: 2rem;
  }
`;

export const Comment = styled.p`
  font-size: 1.5rem;
  margin-left: 6rem;
`;
