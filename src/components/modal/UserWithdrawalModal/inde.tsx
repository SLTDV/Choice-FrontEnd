import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userWithdrawalModalAtom } from '../../../atoms';
import User from '../../../services/User';
import * as S from './style';
const UserWithdrawalModal = () => {
  const navigate = useNavigate();
  const [, setUserWithdrawalModal] = useRecoilState(userWithdrawalModalAtom);

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

  return (
    <S.Layout>
      <S.ModalBg onClick={() => setUserWithdrawalModal(false)} />
      <S.Modal>
        <h3>회원탈퇴</h3>
        <p>정말 회원을 탈퇴할까요?</p>
        <S.Button onClick={() => withdrawal()}>확인</S.Button>
        <S.Button onClick={() => setUserWithdrawalModal(false)}>취소</S.Button>
      </S.Modal>
    </S.Layout>
  );
};

export default UserWithdrawalModal;
