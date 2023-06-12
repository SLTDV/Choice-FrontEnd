import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { userWithdrawalModalAtom } from '../../../atoms';
import User from '../../../services/User';
import { Spinner } from '../../common/Spinner/style';
import Layout from '../Layout';
import * as S from './style';
const UserWithdrawalModal = () => {
  const navigate = useNavigate();
  const [, setUserWithdrawalModal] = useRecoilState(userWithdrawalModalAtom);
  const [isLoading, setIsLoading] = useState(false);

  const withdrawal = async () => {
    try {
      setIsLoading(true);
      await User.userWithdrawal();
      navigate('/', { replace: true });
      window.localStorage.clear();
      toast.success('회원탈퇴 되었습니다.');
      setUserWithdrawalModal(false);
    } catch (error: any) {
      console.log(error);
      setUserWithdrawalModal(false);
    }
  };

  return (
    <Layout>
      <S.ModalBg onClick={() => setUserWithdrawalModal(false)} />
      <S.Modal>
        <h3>회원탈퇴</h3>
        <p>정말 회원을 탈퇴할까요?</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.Button onClick={() => withdrawal()}>확인</S.Button>
            <S.Button onClick={() => setUserWithdrawalModal(false)}>
              취소
            </S.Button>
          </>
        )}
      </S.Modal>
    </Layout>
  );
};

export default UserWithdrawalModal;
