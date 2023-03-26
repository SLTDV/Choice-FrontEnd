import React from 'react';
import Header from '../../components/common/Header';
import * as S from './style';

const MyPage = () => {
  return (
    <>
      <Header />
      <S.Layout>
        <div>
          <S.ProfileBox>
            <img src='post.png' alt='profile image' />
            <p>프로필 수정</p>
            <input value='양세련' maxLength={6} minLength={2} />
            <S.Edit />
          </S.ProfileBox>
        </div>
      </S.Layout>
    </>
  );
};

export default MyPage;
