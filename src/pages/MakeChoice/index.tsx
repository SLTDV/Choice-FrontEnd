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
          <S.Content
            placeholder='내용 (2~100자)'
            maxLength={100}
            minLength={2}
          />
          <S.OptionBox>
            <S.OptionImage>
              <input type='file' />
              <p>VS</p>
              <input type='file' />
            </S.OptionImage>
            <S.OptionName>
              <input type='text' placeholder='주제1' maxLength={8} />
              <input type='text' placeholder='주제2' maxLength={8} />
            </S.OptionName>
          </S.OptionBox>
          <S.Button>초이스 만들기</S.Button>
        </S.UploadForm>
      </S.Layout>
      ;
    </>
  );
};

export default MakeChoice;
