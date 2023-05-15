import React from 'react';
import { useRecoilState } from 'recoil';
import { RemoveChoiceModalAtom } from '../../../atoms';
import Layout from '../Layout';
import * as S from './style';

const RemoveChoiceModal = () => {
  const [, setRemoveChoiceModalAtom] = useRecoilState(RemoveChoiceModalAtom);
  return (
    <Layout>
      <S.ModalBg onClick={() => setRemoveChoiceModalAtom(false)} />
      <S.Modal>
        <h1>게시물 삭제</h1>
        <p>정말 게시물을 삭제할까요?</p>
        <button>확인</button>
        <button onClick={() => setRemoveChoiceModalAtom(false)}>취소</button>
      </S.Modal>
    </Layout>
  );
};

export default RemoveChoiceModal;
