import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { blockUserModalAtom } from '../../../atoms';
import User from '../../../services/User';
import { Spinner } from '../../common/Spinner/style';
import Layout from '../Layout';
import * as S from './style';
const BlockUserModal = ({ nickname }: { nickname?: string }) => {
  const navigate = useNavigate();
  const [, setblockUserModal] = useRecoilState(blockUserModalAtom);
  const [isLoading, setIsLoading] = useState(false);
  const postId = useParams() as unknown as { idx: number };

  const blockUser = async () => {
    try {
      setIsLoading(true);
      await User.blockUser(postId.idx);
      navigate('/', { replace: true });
      toast.success(`${nickname}님을 차단했습니다.`);
      setblockUserModal(false);
    } catch (error: any) {
      console.log(error);
      setblockUserModal(false);
    }
  };

  return (
    <Layout>
      <S.ModalBg onClick={() => setblockUserModal(false)} />
      <S.Modal>
        <h3>차단</h3>
        <p>해당 유저를 차단할까요?</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.Button onClick={() => blockUser()}>확인</S.Button>
            <S.Button onClick={() => setblockUserModal(false)}>취소</S.Button>
          </>
        )}
      </S.Modal>
    </Layout>
  );
};

export default BlockUserModal;
