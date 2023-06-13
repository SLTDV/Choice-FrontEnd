import React, { useRef, useState } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { editProfileModalAtom } from '../../../atoms/AtomContainer';
import { EditProfileType } from '../../../types/user.type';
import User from '../../../services/User';
import Image from '../../../services/Image';
import Layout from '../Layout';

const EditProfileModal = (data: EditProfileType) => {
  const [editProfileModal, setEditProfileModal] =
    useRecoilState(editProfileModalAtom);
  const nicknameRef = useRef<any>();
  const [profileImage, setProfileImage] = useState(data.image ?? '');
  const [isError, setIsError] = useState(false);

  const saveImage = async (e: any) => {
    try {
      console.log(profileImage);
      const formData = new FormData();
      formData.append('profileImage', e.target.files[0]);
      const res: any = await Image.uploadImage(formData);
      console.log('success');
      setProfileImage(res.data.profileImageUrl);
    } catch (error: any) {
      console.log(error);
    }
  };

  const editPropfile = async () => {
    try {
      const nickname = nicknameRef.current.value;
      if (nickname.length > 1 && nickname.length < 11) {
        setIsError(false);
        await User.editProfileImage(profileImage ? profileImage : data.image);
        await User.editNickname(nickname);
        window.location.reload();
      } else {
        setIsError(true);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <S.ModalBg onClick={() => setEditProfileModal(!editProfileModal)} />
      <S.Modal>
        <h1>프로필 수정</h1>
        <S.Close onClick={() => setEditProfileModal(false)}>닫기</S.Close>
        <S.Image
          type='file'
          image={profileImage}
          onChange={saveImage}
          accept='image/*'
        />
        <S.NicknameInput
          type='text'
          defaultValue={data.nickname}
          ref={nicknameRef}
        />
        <img
          src='svg/Edit.svg'
          alt=''
          className='edit'
          onClick={() => nicknameRef.current.focus()}
        />
        <S.ErrorMessage isError={isError}>
          닉네임은 2~10글자 입니다.
        </S.ErrorMessage>
        <button onClick={() => editPropfile()}>수정 완료</button>
      </S.Modal>
    </Layout>
  );
};

export default EditProfileModal;
