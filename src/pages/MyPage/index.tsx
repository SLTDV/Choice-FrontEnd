import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import { useRecoilState } from 'recoil';
import {
  editProfileModalAtom,
  logoutModalAtom,
  RemoveChoiceModalAtom,
  userWithdrawalModalAtom,
} from '../../atoms/AtomContainer';
import EditProfileModal from '../../components/modal/EditProfileModal';
import Choice from '../../components/common/Choice';
import User from '../../services/User';
import { MyInfoType } from '../../types/user.type';
import { ChoiceData } from '../../types/choice.types';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../services/Auth';
import UserWithdrawalModal from '../../components/modal/UserWithdrawalModal/index';
import ChoiceList from '../../components/common/ChoiceList';
import LogoutModal from '../../components/modal/LogoutModal';
import RemoveChoiceModal from '../../components/modal/RemoveChoiceModal';

const MyPage = () => {
  const [myInfo, setMyInfo] = useState<MyInfoType>();
  const [myPostList, setMyPostList] = useState<ChoiceData[]>();
  const [optionModal, setOptionModal] = useState(false);
  const [userWithdrawalModal, setUserWithdrawalModal] = useRecoilState(
    userWithdrawalModalAtom
  );
  const [removeChoiceModal] = useRecoilState(RemoveChoiceModalAtom);
  const [logoutModal, setLogoutModal] = useRecoilState(logoutModalAtom);
  const [editProfileModal, setEditProfileModal] =
    useRecoilState(editProfileModalAtom);

  const getMyPost = async () => {
    try {
      const res: any = await User.getMyPost();
      console.log(res.data);
      setMyInfo(res.data);
      setMyPostList(res.data.postList);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyPost();
  }, []);

  return (
    <>
      {editProfileModal && (
        <EditProfileModal
          nickname={myInfo?.nickname}
          image={
            myInfo?.profileImageUrl
              ? myInfo.profileImageUrl
              : 'svg/DefaultProfileImage.svg'
          }
        />
      )}
      {userWithdrawalModal && <UserWithdrawalModal />}
      {logoutModal && <LogoutModal />}
      {removeChoiceModal && <RemoveChoiceModal />}
      <Header />

      <S.Layout>
        <div>
          <S.ProfileBox>
            <img
              src={
                myInfo?.profileImageUrl
                  ? myInfo.profileImageUrl
                  : 'svg/DefaultProfileImage.svg'
              }
              alt='profile image'
              className='profileImage'
            />
            <p onClick={() => setEditProfileModal(!editProfileModal)}>
              프로필 수정
            </p>
            <input
              defaultValue={myInfo?.nickname}
              maxLength={6}
              minLength={2}
            />
          </S.ProfileBox>
          {myPostList?.length === 0 ? (
            <S.NonePost>
              <p>😑게시물이 아직 없어요 ...</p>
              <Link to='/makeChoice'>
                <S.MakeChoiceButton>Choice 만들러 가기</S.MakeChoiceButton>
              </Link>
            </S.NonePost>
          ) : (
            <S.PostLayout>
              <ChoiceList choiceList={myPostList} isMine={true} />
            </S.PostLayout>
          )}
        </div>
      </S.Layout>
      <S.OptionBox modalState={optionModal}>
        <S.OptionModal modalState={optionModal}>
          <p onClick={() => setLogoutModal(true)}>로그아웃</p>
          <p
            className='withdrawal'
            onClick={() => setUserWithdrawalModal(true)}
          >
            회원탈퇴
          </p>
        </S.OptionModal>
        <img
          src='svg/Option.svg'
          alt=''
          onClick={() => setOptionModal(!optionModal)}
        />
      </S.OptionBox>
    </>
  );
};

export default MyPage;
