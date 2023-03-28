import styled from '@emotion/styled';

export const Layout = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  & img {
    margin-top: 10vh;
  }
`;

export const Content = styled.div`
  text-align: center;
  position: absolute;
  top: 13rem;
  left: 39.2%;
  @font-face {
    font-family: 'AppleSDGothicNeoEB';
    font-style: normal;
    src: url('/font/AppleSDGothicNeoEB.woff') format('woff');
  }
  @font-face {
    font-family: 'AppleSDGothicNeoEB';
    font-style: normal;
    src: url('/font/AppleSDGothicNeoEB.woff') format('woff');
  }

  & h1 {
    font-family: AppleSDGothicNeoEB;
    font-size: 14rem;
    font-weight: bolder;
    margin-top: 8rem;
    margin-bottom: -1rem;
  }
  & span {
    display: flex;
  }
  & span p {
    font-size: 2rem;
  }
  & span a {
    font-size: 2rem;
    color: #ffffff;
    background-color: #000000;
    padding: 1px 8px;
    border-radius: 5px;
    text-decoration: underline 1px;
    font-family: AppleSDGothicNeoUL;
    margin-left: 1.4rem;
    margin-top: -0.3rem;
  }
`;
