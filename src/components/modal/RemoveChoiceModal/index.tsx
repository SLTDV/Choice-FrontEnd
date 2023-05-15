import React from 'react';
import { useRecoilState } from 'recoil';
import { RemoveChoiceModalAtom } from '../../../atoms';
import Post from '../../../services/Post';
import Layout from '../Layout';
import * as S from './style';

const RemoveChoiceModal = () => {
  const [{ choiceIdx }, setRemoveChoiceModalAtom] = useRecoilState(
    RemoveChoiceModalAtom
  );
  const removeChoice = async () => {
    try {
      await Post.removeChoice(choiceIdx);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <S.ModalBg
        onClick={() => setRemoveChoiceModalAtom({ onModal: false, choiceIdx })}
      />
      <S.Modal>
        <h1>게시물 삭제</h1>
        <p>정말 게시물을 삭제할까요?</p>
        <button onClick={removeChoice}>확인</button>
        <button
          onClick={() =>
            setRemoveChoiceModalAtom({ onModal: false, choiceIdx })
          }
        >
          취소
        </button>
      </S.Modal>
    </Layout>
  );
};

export default RemoveChoiceModal;
