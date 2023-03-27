import React from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
const MakeChoice = () => {
  return (
    <>
      <Header />
      <S.Layout>
        <S.UploadForm>
          <S.Title
            placeholder='제목을 입력하세요 (2~16자)'
            maxLength={16}
            minLength={2}
          />
          <S.Content placeholder='내용 (2~100자)' />
        </S.UploadForm>
      </S.Layout>
      ;
    </>
  );
};

export default MakeChoice;
