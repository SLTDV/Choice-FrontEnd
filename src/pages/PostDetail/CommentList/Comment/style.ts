import styled from '@emotion/styled';

export const Comment = styled.section<{ isEditing: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  & .editBox {
    opacity: ${(props) => (props.isEditing ? '1' : '0')};
  }
  &:hover {
    & .editBox {
      opacity: 1;
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

export const CommentBox = styled.div`
  width: 90%;
  border-bottom: 1px solid #efefef;
  position: relative;
  padding: 3rem 0;
  padding-right: 10%;
  & div {
    background-color: #ffffff;
    margin-left: 2rem;
  }
  & textarea {
    margin-left: 5.6rem;
    width: 84%;
    height: 8rem;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 16px;
    border: 1px solid #aaaaaa;
    resize: none;
    white-space: pre;
    &:focus {
      border-color: #000000;
      outline: none;
    }
  }
  transition: 0.3s;
  @media screen and (max-width: 1300px) {
    width: 86%;
  }
  @media screen and (max-width: 950px) {
    transform: scale(0.99);
  }
`;

export const Content = styled.p`
  font-size: 1.5rem;
  margin-left: 6rem;
  white-space: pre-wrap;
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

export const EditBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 0.4rem;
  right: 1.4rem;
  opacity: 0;
  transition: 0.2s ease-out;
  & button {
    cursor: pointer;
    width: 7rem;
    height: 3rem;
    border-radius: 1.2rem;
    font-size: 1.3rem;
    margin-bottom: 3.7rem;
    color: #ffffff;
    background: #000000;
  }
`;

export const Edit = styled.div`
  margin-top: 0.8rem;
  cursor: pointer;
  &:hover {
    .line {
      width: 110%;
    }
  }
  & .line {
    width: 0%;
    transition: 0.5s ease;
    height: 1px;
    border-radius: 0.5px;
    margin-top: -0.4rem;
    background-color: #000000;
  }
`;

export const DeleteBox = styled.div`
  position: relative;
  margin-left: 1.4rem;
  padding-top: 1.3rem;
  cursor: pointer;
  & .top {
    position: absolute;
    margin-top: -6px;
    transition: 0.5s;
  }
  &:hover {
    .top {
      transform: rotate(-50deg);
      transform-origin: left bottom;
      margin-top: -7px;
    }
  }
`;

export const SpinnerLayout = styled.div`
  position: absolute;
  bottom: 2.4rem;
  right: 3rem;
`;
