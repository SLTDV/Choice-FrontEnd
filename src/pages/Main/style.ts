import styled from '@emotion/styled';

export const Layout = styled.section`
  width: 100vw;
  margin-top: 13rem;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 102rem;
`;

export const NavLayout = styled.div``;

export const MakeChoiceBtn = styled.button`
  font-size: 1.8rem;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 100px;
  width: 22.8rem;
  height: 5.8rem;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const Category = styled.div`
  margin: auto 0;
  display: flex;
  & p {
    font-size: 2rem;
    margin-left: 0.2rem;
  }
`;
