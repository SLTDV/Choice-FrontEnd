import styled from '@emotion/styled';

export const Layout = styled.section`
  padding-top: 17rem;
  width: 76vw;
  margin: 0 auto;
  display: flex;
`;

export const PostDetailSection = styled.section`
  width: 100rem;
  text-align: center;
  & h1 {
    font-size: 3rem;
  }
`;

export const Detail = styled.section`
  width: 100%;
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  margin: 3.5rem 0;
  padding: 3.5rem 0;
`;

export const Description = styled.p`
  margin: 0 auto;
  width: 60rem;
  font-size: 2rem;
  line-height: 3.4rem;
`;

export const VoteBox = styled.div`
  padding: 6rem 0 5rem 0;
  width: 100%;
  & p {
    font-size: 3rem;
    color: #6d6d6d;
    font-weight: bold;
    margin: auto;
  }
`;

export const OptionBox = styled.div`
  display: flex;
  width: 74rem;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Option = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: aliceblue;
  border-radius: 2rem;
  background-image: url(post.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 2.8rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
`;

export const OptionName = styled.div`
  border-radius: 0 0 2rem 2rem;
  width: 26rem;
  height: 8rem;
  background-color: #ffffff;
  opacity: 0.9;
  position: absolute;
  bottom: 0;
  padding: 1rem 2rem;
  & p {
    color: #000000 !important;
    font-size: 2.4rem;
    line-height: 8rem;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  width: 61rem;
  margin: 0 auto;
  justify-content: space-between;
`;

export const VoteButton = styled.button`
  width: 17rem;
  height: 11rem;
  background-color: #f3f3f3;
  border-radius: 20px;
  border: none;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 2px 10px #9f9f9f;
  }
`;
