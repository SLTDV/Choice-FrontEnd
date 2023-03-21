import styled from '@emotion/styled';

export const Layout = styled.section`
  width: 100vw;
  margin-top: 13.5rem;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 102rem;
  margin-bottom: 4rem;
`;

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

export const PostLayout = styled.section`
  display: grid;
  grid-template-columns: 30rem 30rem 30rem;
  width: 100%;
  justify-content: space-between;
  flex-flow: row wrap;
`;
