import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: #ffffff;
  height: 10rem;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5000;
  & .logo {
    position: absolute;
    bottom: 0;
    margin-left: -6.6rem;
    transition: 0.2s;
  }
  & .logo {
    @media screen and (max-width: 768px) {
      left: 11rem;
    }
    @media screen and (max-width: 500px) {
      left: 9.6rem;
    }
  }
`;

export const SigninBox = styled.div`
  position: absolute;
  display: flex;
  gap: 1.2rem;
  bottom: 1rem;
  right: 8%;
  & p {
    font-size: 1.8rem;
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 6.4%;
  & p {
    font-size: 1.8rem;
    margin: auto 1rem;
  }
  & img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 5rem;
    object-fit: cover;
  }
`;
