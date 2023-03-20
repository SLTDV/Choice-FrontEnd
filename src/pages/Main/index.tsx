import React from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import * as I from '../../asset/svg';
import Post from '../../components/common/Post';
const Main = () => {
  return (
    <S.Layout>
      <div>
        <Header />
        <S.Nav>
          <S.MakeChoiceBtn>Choice만들기</S.MakeChoiceBtn>
          <S.Category>
            <I.Category />
            <p>최신순</p>
          </S.Category>
        </S.Nav>
        <S.PostLayout>
          <Post />
        </S.PostLayout>
      </div>
    </S.Layout>
  );
};

export default Main;
