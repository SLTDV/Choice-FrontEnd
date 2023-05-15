import React from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import { removeCommentModalAtom } from '../../../atoms';
import { useMutation, useQueryClient } from 'react-query';
import CommentApi from '../../../services/Comment';
import { useParams } from 'react-router';
import { CommentIdxType } from '../../../types/comment.types';
import Layout from '../Layout';

const RemoveCommentModal = (commentIdx: CommentIdxType) => {
  const [, setRemoveCommentModal] = useRecoilState(removeCommentModalAtom);
  const queryClient = useQueryClient();
  const postId = useParams() as unknown as { idx: number };

  const onRemoveComment = async () => {
    try {
      await CommentApi.removeComment(postId.idx, commentIdx.commentIdx);
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: removeComment } = useMutation(onRemoveComment, {
    onMutate: async (newComment) => {
      await queryClient.cancelQueries('post');
      const snapshotOfPreviousData = queryClient.getQueryData('post');
      queryClient.setQueryData('post', (oldComment: any) => ({
        newComment,
        ...oldComment,
      }));

      return {
        snapshotOfPreviousData,
      };
    },

    onError: ({ snapshotOfPreviousData }) => {
      queryClient.setQueryData('post', snapshotOfPreviousData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('post');
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
        <button onClick={() => setRemoveCommentModal(false)}>취소</button>
        <button onClick={() => removeComment()}>확인</button>
      </S.Modal>
    </Layout>
  );
};

export default RemoveCommentModal;
