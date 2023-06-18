import styled from '@emotion/styled';

export const Layout = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 15rem;
`;

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  &:valid {
    & button {
      background-color: #000000;
      color: #ffffff;
      cursor: pointer;
      pointer-events: all;
    }
  }
`;

export const Title = styled.input`
  width: 90rem;
  border: none;
  border-bottom: 2px solid #f0f0f0;
  outline: none;
  margin: 0 auto;
  font-size: 2.8rem;
  text-align: center;
  font-weight: bold;
  padding-bottom: 2.4rem;
  &::placeholder {
    color: #939393;
  }
  &:focus {
    border-bottom: 2px solid #737373;
    transition: 0.3s;
  }
  @media screen and (max-width: 1000px) {
    width: 90vw;
  }
  @media screen and (max-width: 960px) {
    width: 76vw;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.3rem;
    padding-bottom: 2rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 2rem;
    padding-bottom: 2rem;
  }
`;

export const Content = styled.textarea`
  margin: 0 auto;
  width: 70rem;
  height: 11rem;
  padding: 2rem 3rem;
  border: 2px solid #f0f0f0;
  line-height: 3.2rem;
  outline: none;
  border-radius: 2rem;
  font-size: 1.8rem;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    border: 2px solid #737373;
    transition: 0.3s ease;
  }
  @media screen and (max-width: 1000px) {
    width: 68vw;
  }
  @media screen and (max-width: 550px) {
    width: 64vw;
  }
  @media screen and (max-width: 420px) {
    width: 62vw;
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
    @media screen and (max-width: 900px) {
      opacity: 0;
      width: 10vw;
      margin: 0;
    }
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 3rem;
  }
`;

export const Image = styled.input<{ image: string | undefined }>`
  background-image: url(${(props) => props.image});
  opacity: 0.5;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25rem;
  height: 25rem;
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
    margin-top: 10rem;
    margin-left: 10rem;
    background-color: transparent;
    @media screen and (max-width: 768px) {
      margin-top: 13.5vw;
      margin-left: 13.5vw;
      width: 7.8vw;
      height: 7.8vw;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
  @media screen and (max-width: 768px) {
    width: 34vw;
    height: 34vw;
  }
`;

export const OptionName = styled.section`
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  & input {
    text-align: center;
    width: 22.6rem;
    height: 6rem;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 2rem;
    border: 2px solid #f0f0f0;
    outline: none;
    &:focus {
      border: 2px solid #737373;
      transition: 0.3s ease;
    }
    @media screen and (max-width: 768px) {
      width: 30.4vw;
    }
    @media screen and (max-width: 500px) {
      width: 29vw;
      height: 4.6rem;
      font-size: 1.7rem;
    }
  }
`;

export const Button = styled.button`
  margin: 2rem auto;
  width: 80rem;
  height: 6.7rem;
  background-color: #f3f3f3;
  color: #898989;
  border: none;
  border-radius: 2rem;
  font-size: 2rem;
  transition: 0.3s;
  pointer-events: none;
  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
  @media screen and (max-width: 500px) {
    margin-top: 1.6rem;
  }
`;
