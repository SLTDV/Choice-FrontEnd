import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Post from '../../components/common/Choice';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { editProfileModalAtom } from '../../atoms/AtomContainer';
import EditProfileModal from '../../components/modal/EditProfileModal';
import Choice from '../../components/common/Choice';
import User from '../../services/User';
import { myInfoType } from '../../types/user.type';
import { ChoiceData } from '../../types/choice.types';
import { Link, useNavigate } from 'react-router-dom';
import tokenService from '../../utils/tokenService';
import Auth from '../../services/Auth';
const MyPage = () => {
  const [myInfo, setMyInfo] = useState<myInfoType>();
  const [myPostList, setMyPostList] = useState<ChoiceData[]>();
  const [optionModal, setOptionModal] = useState(false);
  const navigate = useNavigate();
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

  const withdrawal = async () => {
    try {
      await User.userWithdrawal();
      window.localStorage.clear();
      navigate('/', { replace: true });
      window.location.reload();
    } catch (error: any) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await Auth.logout();
      window.localStorage.clear();
      navigate('/', { replace: true });
      window.location.reload();
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyPost();
  }, []);

  return (
    <>
      {editProfileModal && <EditProfileModal />}
      <Header />
      <S.OptionBox modalState={optionModal}>
        <S.OptionModal modalState={optionModal}>
          <p onClick={() => logout()}>로그아웃</p>
          <p className='withdrawal' onClick={() => withdrawal()}>
            회원탈퇴
          </p>
        </S.OptionModal>
        <img
          src='svg/Option.svg'
          alt=''
          onClick={() => setOptionModal(!optionModal)}
        />
      </S.OptionBox>
      <S.Layout>
        <div>
          <S.ProfileBox>
            <img
              src={myInfo?.image ? myInfo.image : 'svg/DefaultProfileImage.svg'}
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
              {myPostList?.map((choice) => (
                <Choice
                  key={choice.idx}
                  idx={choice.idx}
                  imageUrl={choice.imageUrl}
                  title={choice.title}
                  participants={choice.participants}
                  commentCount={choice.commentCount}
                  firstVotingOption={choice.firstVotingOption}
                  secondVotingOption={choice.secondVotingOption}
                />
              ))}
            </S.PostLayout>
          )}
        </div>
      </S.Layout>
    </>
  );
};

export default MyPage;
