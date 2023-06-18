import styled from '@emotion/styled';

export const CommentLayout = styled.section`
  text-align: left;
  padding-top: 7rem;
  padding-left: 4.4rem;
  padding-bottom: 8rem;
  & h1 {
    font-size: 2.5rem;
    margin-bottom: 4rem;
    @media screen and (max-width: 500px) {
      font-size: 2.4rem;
      margin-bottom: 3rem;
    }
  }
  transition: 0.3s;
  @media screen and (max-width: 950px) {
    transform: scale(0.98);
    margin-top: -5rem;
  }
  @media screen and (max-width: 500px) {
    padding-left: 2.6rem;
  }
`;

export const InputWrap = styled.form<{ isLoading: boolean }>`
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
    transition: 0.3s;
    &:focus {
      outline: 1px solid #737373;
    }

    @media screen and (max-width: 950px) {
      width: 77.4%;
    }
    @media screen and (max-width: 768px) {
      width: 76%;
    }
    @media screen and (max-width: 500px) {
      width: 68%;
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
    align-self: flex-end;
    transition: 0.2s ease-in-out;
    pointer-events: none;
  }
  & .btnLayout {
    width: 100%;
    text-align: right;
    position: static;
    @media screen and (max-width: 1300px) {
      width: 95%;
    }
    @media screen and (max-width: 950px) {
      width: 93%;
    }
    @media screen and (max-width: 650px) {
      width: 100%;
    }
    @media screen and (max-width: 400px) {
      width: 108%;
    }
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
      cursor: ${(props) => (props.isLoading ? '' : 'pointer')};
      pointer-events: ${(props) => (props.isLoading ? 'none' : 'all')};
    }
  }
`;

export const SpinnerLayout = styled.div`
  margin-left: 46%;
  @media screen and (max-width: 1300px) {
    margin-left: 45.5%;
  }
  @media screen and (max-width: 950px) {
    margin-left: 44.5%;
  }
  @media screen and (max-width: 700px) {
    margin-left: 48%;
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

export const isNotCommentBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 13rem 0;
  & p {
    font-size: 1.5rem;
    color: #6d6d6d;
  }
`;
