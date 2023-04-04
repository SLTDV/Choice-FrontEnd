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
import { Link } from 'react-router-dom';
const MyPage = () => {
  const [myInfo, setMyInfo] = useState<myInfoType>();
  const [myPostList, setMyPostList] = useState<ChoiceData[]>();
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
      {editProfileModal ? <EditProfileModal /> : ''}
      <Header />
      <S.LogoutBox>
        <p>로그아웃</p>
        <p>회원탈퇴</p>
      </S.LogoutBox>
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
