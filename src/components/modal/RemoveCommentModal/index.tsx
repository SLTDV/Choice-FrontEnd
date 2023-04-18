import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import { removeCommentModalAtom } from '../../../atoms';
import { useMutation, useQueryClient } from 'react-query';
import CommentApi from '../../../services/Comment';
import { useParams } from 'react-router';
import { CommentIdxType } from '../../../types/comment.types';

const RemoveCommentModal = (commentIdx: CommentIdxType) => {
  const [, setRemoveCommentModal] = useRecoilState(removeCommentModalAtom);
  console.log(commentIdx);
  const queryClient = useQueryClient();
  const postId = useParams() as unknown as { idx: number };

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
    <S.Layout>
      <S.ModalBg onClick={() => setRemoveCommentModal(false)} />
      <S.Modal>
        <h1>댓글 삭제</h1>
        <p>정말 댓글을 삭제할까요?</p>
        <button onClick={() => setRemoveCommentModal(false)}>취소</button>
        <button onClick={() => removeComment()}>확인</button>
      </S.Modal>
    </S.Layout>
  );
};

export default RemoveCommentModal;
