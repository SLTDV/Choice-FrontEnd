import styled from '@emotion/styled';

export const Layout = styled.section`
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: space-around;
  margin-top: 20rem;
`;

export const Title = styled.input`
  width: 84rem;
  border: none;
  border-bottom: 2px solid #f0f0f0;
  outline: none;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  padding-bottom: 2.8rem;
  &::placeholder {
    color: #939393;
  }
`;
