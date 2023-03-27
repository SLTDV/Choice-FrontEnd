import styled from '@emotion/styled';

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
    color: #6d6d6d;
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
  column-gap: 6rem;
`;
