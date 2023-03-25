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
          </S.ProfileBox>
        </div>
      </S.Layout>
    </>
  );
};

export default MyPage;
