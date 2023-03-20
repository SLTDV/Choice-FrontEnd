import React from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
const Main = () => {
  return (
    <S.Layout>
      <Header />
      <S.Nav>
        <S.NavLayout>
          <S.MakeChoiceBtn>Choice만들기</S.MakeChoiceBtn>
        </S.NavLayout>
      </S.Nav>
    </S.Layout>
  );
};

export default Main;
