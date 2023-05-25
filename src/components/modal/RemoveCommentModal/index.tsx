import React, { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import { commentIdxAtom, removeCommentModalAtom } from '../../../atoms';
import { useMutation, useQueryClient } from 'react-query';
import CommentApi from '../../../services/Comment';
import { useParams } from 'react-router';
import { CommentType } from '../../../types/comment.types';
import Layout from '../Layout';

interface RemoveCommentModalProps {
  setCommentList: Dispatch<SetStateAction<CommentType[]>>;
}

const RemoveCommentModal = ({ setCommentList }: RemoveCommentModalProps) => {
  const [, setRemoveCommentModal] = useRecoilState(removeCommentModalAtom);
  const [commentIdx] = useRecoilState(commentIdxAtom);
  const queryClient = useQueryClient();
  const postId = useParams() as unknown as { idx: number };

  const onRemoveComment = async () => {
    try {
      await CommentApi.removeComment(postId.idx, commentIdx);
      setCommentList((prev) =>
        prev.filter((value) => value.idx !== commentIdx)
      );
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: removeComment } = useMutation(onRemoveComment, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('todaysChoice');
    },
    onSettled: () => {
      setRemoveCommentModal(false);
    },
  });

  return (
    <Layout>
      <S.ModalBg onClick={() => setRemoveCommentModal(false)} />
      <S.Modal>
        <h1>댓글 삭제</h1>
        <p>정말 댓글을 삭제할까요?</p>
        <button onClick={() => removeComment()}>확인</button>
        <button onClick={() => setRemoveCommentModal(false)}>취소</button>
      </S.Modal>
    </Layout>
  );
};

export default RemoveCommentModal;
