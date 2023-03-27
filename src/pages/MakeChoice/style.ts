import styled from '@emotion/styled';

export const Layout = styled.section`
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
  width: 100rem;
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

export const OptionBox = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const OptionImage = styled.section`
  display: flex;
  margin-bottom: 3.6rem;
  & p {
    font-size: 3rem;
    margin: auto 7rem;
    color: #6d6d6d;
    font-weight: bold;
  }
`;

export const Image = styled.input<{ image: string | undefined }>`
  background-image: url(${(props) => props.image});
  opacity: 0.5;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 26rem;
  height: 26rem;
  background-color: #f3f3f3;
  border: none;
  cursor: pointer;
  font-size: 0;
  border-radius: 2rem;
  display: flex;
  &::-webkit-file-upload-button {
    border: none;
    background-image: url('svg/Plus.svg');
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    margin-top: 10.5rem;
    margin-left: 10.5rem;
    background-color: transparent;
  }
`;

export const OptionName = styled.section`
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  & input {
    text-align: center;
    width: 23.6rem;
    height: 7rem;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 2rem;
    border: 2px solid #f0f0f0;
    outline: none;
    &:focus {
      border: 2px solid #737373;
    }
  }
`;

export const Button = styled.button`
  margin: 4rem auto;
  width: 80.4rem;
  height: 6.7rem;
  background-color: #f3f3f3;
  color: #898989;
  border: none;
  border-radius: 2rem;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
