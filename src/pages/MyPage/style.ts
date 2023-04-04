import styled from '@emotion/styled';

export const LogoutBox = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 4%;
  transition: 0.3s;
  & p {
    margin-top: 2rem;
    color: #939393;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const Layout = styled.section`
  margin-top: 21rem;
  display: flex;
  justify-content: space-around;
`;

export const ProfileBox = styled.section`
  text-align: center;
  width: 50rem;
  position: relative;
  margin: 0 auto;
  & img {
    width: 26rem;
    height: 26rem;
    border-radius: 25rem;
    object-fit: cover;
  }
  & p {
    color: #939393;
    font-size: 1.5rem;
    margin-top: 1.7rem;
    text-decoration-line: underline;
    cursor: pointer;
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
  margin-top: 11rem;
  display: grid;
  grid-template-columns: 30rem 30rem 30rem;
  justify-content: space-between;
  gap: 6rem;
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
