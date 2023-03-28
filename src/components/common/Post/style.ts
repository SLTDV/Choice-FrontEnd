import styled from '@emotion/styled';

export const Post = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 2rem;
  background-image: url(post.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: 0.3s ease;
  box-shadow: 0.12rem 0.22rem 2.2rem rgba(109, 109, 109, 0.25);
  &:hover {
    transform: scale(1.1);
  }
`;

export const InfoBox = styled.section`
  border-radius: 0 0 2rem 2rem;
  width: 26rem;
  height: 8rem;
  background-color: #ffffff;
  opacity: 0.9;
  position: absolute;
  bottom: 0;
  padding: 1rem 2rem;
  @font-face {
    font-family: 'AppleSDGothicNeoUL';
    font-style: normal;
    src: url('/font/AppleSDGothicNeoUL.woff') format('woff');
  }
  h1 {
    font-family: AppleSDGothicNeoUL;
    font-size: 1.8rem;
  }
  p {
    font-family: AppleSDGothicNeoUL;
    font-size: 1.3rem;
    color: #737373;
    font-weight: 600;
  }
`;

export const Info = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 0rem;
`;

export const Count = styled.p`
  font-size: 1.5rem;
  margin: auto 0;
  font-weight: bold;
  color: #000000 !important;
  margin-right: 2rem;
  margin-left: 3px;
`;
