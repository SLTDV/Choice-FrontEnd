import styled from '@emotion/styled';

export const Header = styled.header`
  height: 10rem;
  width: 100vw;
  text-align: center;
  position: relative;
  & svg {
    position: absolute;
    bottom: 0;
    margin-left: -6.6rem;
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 3.65%;
  & p {
    font-size: 2rem;
    margin: auto 1rem;
  }
  & img {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
  }
`;
