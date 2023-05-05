import styled from '@emotion/styled';

export const Layout = styled.section`
  width: 100%;
  margin-top: 13.5rem;
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
  position: relative;
  padding-right: 2rem;
  margin-right: -2rem;
  & p {
    font-size: 2rem;
    margin-left: 0.2rem;
    cursor: default;
  }
  &:hover {
    & div {
      display: flex;
    }
  }
`;

export const CategoryModal = styled.div`
  width: 16rem;
  padding: 0 2rem;
  height: 5rem;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  display: none;
  border-radius: 2rem;
  left: 10rem;
  margin-top: -1.3rem;
  p {
    margin: auto;
    cursor: pointer;
  }
`;

export const Latest = styled.p<{ mode: string }>`
  color: ${(props) => (props.mode == 'latest' ? '#000000' : '#B1B1B1')};
`;
export const popularity = styled.p<{ mode: string }>`
  color: ${(props) => (props.mode == 'popularity' ? '#000000' : '#B1B1B1')};
`;

export const PostLayout = styled.section`
  display: grid;
  grid-template-columns: 30rem 30rem 30rem;
  width: 100%;
  justify-content: space-between;
  flex-flow: row wrap;
  row-gap: 6rem;
`;
