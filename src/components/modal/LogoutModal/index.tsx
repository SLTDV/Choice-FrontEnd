import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { logoutModalAtom } from '../../../atoms';
import Auth from '../../../services/Auth';
import { Spinner } from '../../common/Spinner/style';
import Layout from '../Layout';
import * as S from './style';
const LogoutModal = () => {
  const navigate = useNavigate();
  const [, setLogoutModal] = useRecoilState(logoutModalAtom);
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    try {
      setIsLoading(true);
      await Auth.logout();
      navigate('/', { replace: true });
      window.localStorage.clear();
      setLogoutModal(false);
    } catch (error: any) {
      setLogoutModal(false);
    }
  };

  return (
    <Layout>
      <S.ModalBg onClick={() => setLogoutModal(false)} />
      <S.Modal>
        <h3>로그아웃</h3>
        <p>정말 로그아웃 하시겠습니까?</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.Button onClick={() => logout()}>확인</S.Button>
            <S.Button onClick={() => setLogoutModal(false)}>취소</S.Button>
          </>
        )}
      </S.Modal>
    </Layout>
  );
};

export default LogoutModal;
