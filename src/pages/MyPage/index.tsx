import React, { useState } from 'react';
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
import User from '../../services/User';
import { MyInfoType } from '../../types/user.type';
import { ChoiceData } from '../../types/choice.types';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import UserWithdrawalModal from '../../components/modal/UserWithdrawalModal/index';
import ChoiceList from '../../components/common/ChoiceList';
import LogoutModal from '../../components/modal/LogoutModal';
import RemoveChoiceModal from '../../components/modal/RemoveChoiceModal';
import PostSkeleton from '../../components/common/PostSkeleton';
import { toast } from 'react-toastify';

const MyPage = () => {
  const [myInfo, setMyInfo] = useState<MyInfoType>();
  const [myPostList, setMyPostList] = useState<ChoiceData[]>();
  const [optionModal, setOptionModal] = useState(false);
  const navigate = useNavigate();
  const [userWithdrawalModal, setUserWithdrawalModal] = useRecoilState(
    userWithdrawalModalAtom
  );
  const [isLoading, setIsLodaing] = useState(true);
  const skeletonArr = [0, 1, 2, 3, 4, 5];
  const [{ onModal }] = useRecoilState(RemoveChoiceModalAtom);
  const [logoutModal, setLogoutModal] = useRecoilState(logoutModalAtom);
  const [editProfileModal, setEditProfileModal] =
    useRecoilState(editProfileModalAtom);

  const getMyPost = async () => {
    try {
      const res: any = await User.getMyPost();
      setMyInfo(res.data);
      setMyPostList(res.data.postList);
      setIsLodaing(false);
    } catch (error: any) {
      navigate('/signin');
      toast.error('로그인 후 이용해주세요!');
    }
  };

  useQuery({
    queryKey: 'myPost',
    queryFn: getMyPost,
    refetchOnWindowFocus: false,
  });

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
      {onModal && <RemoveChoiceModal />}
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
            <p
              className='editBtn'
              onClick={() => setEditProfileModal(!editProfileModal)}
            >
              프로필 수정
            </p>
            <input
              defaultValue={myInfo?.nickname}
              maxLength={10}
              minLength={2}
            />
            <S.OptionBox modalState={optionModal}>
              <S.OptionModal modalState={optionModal}>
                <p
                  className='editProfile'
                  onClick={() => setEditProfileModal(!editProfileModal)}
                >
                  프로필 수정
                </p>
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
          </S.ProfileBox>
          {myPostList?.length === 0 && (
            <S.NonePost>
              <p>😑게시물이 아직 없어요 ...</p>
              <Link to='/makeChoice'>
                <S.MakeChoiceButton>Choice 만들러 가기</S.MakeChoiceButton>
              </Link>
            </S.NonePost>
          )}
        </div>
      </S.Layout>
      {myPostList?.length !== 0 && (
        <S.PostLayout>
          <ChoiceList choiceList={myPostList} isMine={true} />
          {isLoading && skeletonArr.map((idx) => <PostSkeleton key={idx} />)}
        </S.PostLayout>
      )}
    </>
  );
};

export default MyPage;
