import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: #ffffff;
  height: 10rem;
  width: 100vw;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  & .logo {
    position: absolute;
    bottom: 0;
    margin-left: -6.6rem;
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 4%;
  & p {
    font-size: 1.8rem;
    margin: auto 1rem;
  }
  & img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 5rem;
  }
`;
