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
        <S.Image type='file' image='post.png' />
        <span>
          <p
            className='cancel'
            onClick={() => setEditProfileModal(!editProfileModal)}
          >
            취소
          </p>
          <p>완료</p>
        </span>
      </S.Modal>
    </S.Layout>
  );
};

export default EditProfileModal;
