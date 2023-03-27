import styled from '@emotion/styled';

export const Layout = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-top: 20rem;
`;

export const UploadForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Title = styled.input`
  width: 90rem;
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

export const Content = styled.textarea`
  margin: 0 auto;
  width: 74rem;
  height: 12rem;
  padding: 2rem 3rem;
  border: 2px solid #f0f0f0;
  line-height: 3.2rem;
  outline: none;
  border-radius: 2rem;
  font-size: 2rem;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
