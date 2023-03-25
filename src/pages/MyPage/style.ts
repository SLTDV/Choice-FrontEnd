import styled from '@emotion/styled';

export const Layout = styled.section`
  margin-top: 21rem;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

export const ProfileBox = styled.section`
  text-align: center;
  width: 50rem;
  & img {
    width: 25rem;
    height: 25rem;
    border-radius: 25rem;
    object-fit: cover;
  }
`;
