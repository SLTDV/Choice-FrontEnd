import React from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
const MakeChoice = () => {
  return (
    <>
      <Header />
      <S.Layout>
        <div>
          <S.Title
            placeholder='제목을 입력하세요 (2~16자)'
            maxLength={16}
            minLength={2}
          />
        </div>
      </S.Layout>
      ;
    </>
  );
};

export default MakeChoice;
