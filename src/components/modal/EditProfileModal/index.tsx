import React from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { editProfileModalAtom } from '../../../atoms/AtomContainer';
const EditProfileModal = () => {
  const [editProfileModal, setEditProfileModal] =
    useRecoilState(editProfileModalAtom);
  return (
    <S.Layout onClick={() => setEditProfileModal(!editProfileModal)}>
      <S.Modal></S.Modal>
    </S.Layout>
  );
};

export default EditProfileModal;
