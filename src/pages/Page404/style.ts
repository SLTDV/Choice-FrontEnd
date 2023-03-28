import styled from '@emotion/styled';

export const Layout = styled.section`
  background-image: url('404.png');
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Content = styled.div`
  margin: auto;
  width: 43.1rem;
  margin-bottom: 14rem;
  text-align: center;
  @font-face {
    font-family: 'AppleSDGothicNeoEB';
    font-style: normal;
    src: url('/font/AppleSDGothicNeoEB.woff') format('woff');
  }
  @font-face {
    font-family: 'AppleSDGothicNeoUL';
    font-style: normal;
    src: url('/font/AppleSDGothicNeoUL.woff') format('woff');
  }
  & h1 {
    font-family: AppleSDGothicNeoEB;
    font-size: 14rem;
    font-weight: bolder;
    margin-top: 8rem;
    margin-bottom: -1rem;
  }
  & div {
    display: flex;
  }
  & div p {
    font-size: 2rem;
  }
  & div a {
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
