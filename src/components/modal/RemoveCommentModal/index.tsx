import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import { removeCommentModalAtom } from '../../../atoms';
const RemoveCommentModal = () => {
  const [removeCommentModal, setRemoveCommentModal] = useRecoilState(
    removeCommentModalAtom
  );
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <S.Layout>
      <S.ModalBg onClick={() => setRemoveCommentModal(false)} />
      <S.Modal>
        <h1>댓글 삭제</h1>
        <p>정말 댓글을 삭제할까요?</p>
        <button onClick={() => setRemoveCommentModal(false)}>취소</button>
        <button>확인</button>
      </S.Modal>
    </S.Layout>
  );
};

export default RemoveCommentModal;
