import styled from '@emotion/styled';

export const CommentLayout = styled.section`
  text-align: left;
  padding-top: 7rem;
  padding-left: 6rem;
  padding-bottom: 8rem;
  & h1 {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }
`;

export const InputWrap = styled.form`
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
    transition: 0.2s ease-in-out;
    pointer-events: none;
  }
  & div {
    position: absolute;
    top: 1.8rem;
    left: 1.8rem;
  }
  &:valid {
    & button {
      background-color: #000000;
      color: #ffffff;
      cursor: pointer;
      pointer-events: all;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  & img {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    object-fit: cover;
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

export const isNotCommentBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 13rem 0;
  & p {
    font-size: 1.5rem;
    color: #6d6d6d;
  }
`;
