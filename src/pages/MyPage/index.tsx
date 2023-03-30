import React from 'react';
import Header from '../../components/common/Header';
import Post from '../../components/common/Choice';
import * as S from './style';

const MyPage = () => {
  return (
    <>
      <Header />
      <S.LogoutBox>
        <p>로그아웃</p>
        <p>회원탈퇴</p>
      </S.LogoutBox>
      <S.Layout>
        <div>
          <S.ProfileBox>
            <img src='post.png' alt='profile image' className='profileImage' />
            <p>프로필 수정</p>
            <input value='양세련' maxLength={6} minLength={2} />
            <S.Edit />
          </S.ProfileBox>
          <S.PostLayout></S.PostLayout>
        </div>
      </S.Layout>
    </>
  );
};

export default MyPage;
