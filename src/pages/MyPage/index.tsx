import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Post from '../../components/common/Choice';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { editProfileModalAtom } from '../../atoms/AtomContainer';
import EditProfileModal from '../../components/modal/EditProfileModal';
import Choice from '../../components/common/Choice';
import User from '../../services/User';
const MyPage = () => {
  const [myInfo, setMyInfo] = useState();
  const [editProfileModal, setEditProfileModal] =
    useRecoilState(editProfileModalAtom);

  const getMyPost = async () => {
    try {
      const res: any = await User.getMyPost();
      console.log(res.data);
      setMyInfo(res.data);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMyPost();
  }, []);
  return (
    <>
      {editProfileModal ? <EditProfileModal /> : ''}
      <Header />
      <S.LogoutBox>
        <p>로그아웃</p>
        <p>회원탈퇴</p>
      </S.LogoutBox>
      <S.Layout>
        <div>
          <S.ProfileBox>
            <img src='post.png' alt='profile image' className='profileImage' />
            <p onClick={() => setEditProfileModal(!editProfileModal)}>
              프로필 수정
            </p>
            <input defaultValue='양세련' maxLength={6} minLength={2} />
          </S.ProfileBox>
          <S.PostLayout></S.PostLayout>
        </div>
      </S.Layout>
    </>
  );
};

export default MyPage;
