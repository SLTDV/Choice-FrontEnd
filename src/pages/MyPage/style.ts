import styled from '@emotion/styled';

export const OptionBox = styled.div<{ modalState: boolean }>`
  position: fixed;
  bottom: 5rem;
  right: 6%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & img {
    cursor: pointer;
    transition: 0.5s ease-out;
    transform: rotate(${(props) => (props.modalState ? '0' : '270deg')});
    margin-top: 1rem;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 0rem;
    right: -0.2rem;
  }
`;

export const OptionModal = styled.div<{ modalState: boolean }>`
  background: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 11rem;
  height: 11.4rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  transition: 0.5s;
  transform: translateX(${(props) => (props.modalState ? '0' : '2rem')});
  opacity: ${(props) => (props.modalState ? '1' : '0')};
  pointer-events: ${(props) => (props.modalState ? '' : 'none')};
  & p {
    color: #939393;
    font-size: 1.5rem;
    cursor: pointer;
  }
  & .withdrawal {
    color: #e10000;
  }
  & .editProfile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    width: 12rem;
    height: 13rem;
    border-radius: 4px;
    margin-bottom: -18.4rem;
  }
`;

export const Layout = styled.section`
  margin-top: 21rem;
  display: flex;
  justify-content: space-around;
  transition: 0.3s;
  @media screen and (max-width: 768px) {
    margin-top: 15rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProfileBox = styled.section`
  z-index: 9000;
  text-align: center;
  width: 50rem;
  position: relative;
  margin: 0 auto;
  & .profileImage {
    width: 26rem;
    height: 26rem;
    border-radius: 25rem;
    object-fit: cover;
    transition: 0.3s;
    @media screen and (max-width: 768px) {
      width: 34vw;
      height: 34vw;
    }
  }
  & .editBtn {
    color: #939393;
    font-size: 1.5rem;
    margin-top: 1.7rem;
    text-decoration-line: underline;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  & input {
    @font-face {
      font-family: 'AppleSDGothicNeoUL';
      font-style: normal;
      src: url('/font/AppleSDGothicNeoUL.woff') format('woff');
    }
    font-family: AppleSDGothicNeoUL;
    font-size: 2.5rem;
    margin-top: 4rem;
    border: none;
    text-align: center;
    border-bottom: 2px solid #f0f0f0;
    outline: none;
    font-weight: bold;
    pointer-events: none;
    width: 100%;
    padding-bottom: 0.5rem;
    @media screen and (max-width: 768px) {
      margin-top: 1.4rem;
      font-size: 2.3rem;
    }
  }
  @media screen and (max-width: 568px) {
    width: 84vw;
  }
`;

export const Edit = styled.div`
  background-image: url('svg/Edit.svg');
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const PostLayout = styled.section`
  display: grid;
  grid-template-columns: 30rem 30rem 30rem;
  justify-content: space-between;
  gap: 6rem;
  padding-bottom: 6rem;
  margin: 8rem auto 1rem auto;
  width: 100rem;
  @media screen and (max-width: 1200px) {
    width: 78%;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  @media screen and (max-width: 768px) {
    width: 87%;
    margin-top: 10vw;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NonePost = styled.div`
  width: 100%;
  text-align: center;
  margin: 13rem auto;
  & p {
    font-size: 2.3rem;
    color: #737373;
    margin-bottom: 2rem;
  }
`;

export const MakeChoiceButton = styled.button`
  font-size: 1.8rem;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 1.4rem;
  width: 22.8rem;
  height: 4rem;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
