import React from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { editProfileModalAtom } from '../../../atoms/AtomContainer';
const EditProfileModal = () => {
  const [editProfileModal, setEditProfileModal] =
    useRecoilState(editProfileModalAtom);
  return (
    <S.Layout>
      <S.ModalBg onClick={() => setEditProfileModal(!editProfileModal)} />
      <S.Modal>
        <h1>프로필 수정</h1>
        <S.Image type='file' image='post.png' />
        <S.NicknameInput type='text' defaultValue='양세련' />
        <button>수정 완료</button>
      </S.Modal>
    </S.Layout>
  );
};

export default EditProfileModal;
