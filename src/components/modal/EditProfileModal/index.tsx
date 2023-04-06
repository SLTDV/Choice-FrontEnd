import React, { useRef, useState } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { editProfileModalAtom } from '../../../atoms/AtomContainer';
import { editProfileType } from '../../../types/user.type';
import User from '../../../services/User';
import Image from '../../../services/Image';
const EditProfileModal = (data: editProfileType) => {
  const [editProfileModal, setEditProfileModal] =
    useRecoilState(editProfileModalAtom);
  const profileImageRef = useRef<any>();
  const nicknameRef = useRef<any>();
  const [profileImage, setProfileImage] = useState('');
  const [isError, setIsError] = useState(false);

  const saveImage = async (e: any) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const res: any = await Image.uploadImage(formData);
    setProfileImage(res.data.profileImageUrl);
  };

  const editPropfile = async () => {
    try {
      const nickname = nicknameRef.current.value;
      if (nickname.length > 1 && nickname.length < 7) {
        setIsError(false);
        User.editProfileImage(profileImage ? profileImage : data.image);
        User.editNickname(nickname);
        window.location.reload();
      } else {
        setIsError(true);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <S.Layout>
      <S.ModalBg onClick={() => setEditProfileModal(!editProfileModal)} />
      <S.Modal>
        <h1>프로필 수정</h1>
        <S.Close onClick={() => setEditProfileModal(false)}>닫기</S.Close>
        <S.Image
          type='file'
          image={profileImage ? profileImage : data.image}
          ref={profileImageRef}
          onChange={saveImage}
          accept='image/*'
        />
        <S.NicknameInput
          type='text'
          defaultValue={data.nickname}
          ref={nicknameRef}
        />
        <img src='svg/Edit.svg' alt='' className='edit' />
        <S.ErrorMessage isError={isError}>
          닉네임은 2~6글자 입니다.
        </S.ErrorMessage>
        <button onClick={() => editPropfile()}>수정 완료</button>
      </S.Modal>
    </S.Layout>
  );
};

export default EditProfileModal;
