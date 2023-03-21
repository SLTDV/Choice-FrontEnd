import React from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import Post from '../../components/common/Post';
const Main = () => {
  return (
    <S.Layout>
      <div>
        <Header />
        <S.Nav>
          <S.MakeChoiceBtn>Choice만들기</S.MakeChoiceBtn>
          <S.Category>
            <img src='svg/Category.svg' alt='' />
            <p>최신순</p>
          </S.Category>
        </S.Nav>
        <S.PostLayout>
          <Post />
          <Post />
          <Post />
          <Post />
        </S.PostLayout>
      </div>
    </S.Layout>
  );
};

export default Main;
