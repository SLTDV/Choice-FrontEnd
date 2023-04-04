import React, { useRef, useState } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { editProfileModalAtom } from '../../../atoms/AtomContainer';
import { editProfileType } from '../../../types/user.type';
import User from '../../../services/User';
const EditProfileModal = (data: editProfileType) => {
  const [editProfileModal, setEditProfileModal] =
    useRecoilState(editProfileModalAtom);
  const profileImageRef = useRef<any>();
  const nicknameRef = useRef<any>();
  const [profileImage, setProfileImage] = useState('');

  const saveImage = () => {
    const file = profileImageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(URL.createObjectURL(file));
    };
  };

  const editPropfile = async () => {
    try {
      User.editProfileImage(profileImage);
      User.editNickname(nicknameRef.current.value);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <S.Layout>
      <S.ModalBg onClick={() => setEditProfileModal(!editProfileModal)} />
      <S.Modal>
        <h1>프로필 수정</h1>
        <S.Image
          type='file'
          image={profileImage ? profileImage : data.image}
          ref={profileImageRef}
          onChange={() => saveImage()}
        />
        <S.NicknameInput
          type='text'
          defaultValue={data.nickname}
          ref={nicknameRef}
        />
        <button onClick={() => editPropfile()}>수정 완료</button>
      </S.Modal>
    </S.Layout>
  );
};

export default EditProfileModal;
