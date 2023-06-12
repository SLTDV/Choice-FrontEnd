import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import {
  commentIdxAtom,
  commentListAtom,
  removeCommentModalAtom,
} from '../../../atoms';
import { useMutation, useQueryClient } from 'react-query';
import CommentApi from '../../../services/Comment';
import { useParams } from 'react-router';
import Layout from '../Layout';
import { Spinner } from '../../common/Spinner/style';

const RemoveCommentModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [, setRemoveCommentModal] = useRecoilState(removeCommentModalAtom);
  const [, setCommentList] = useRecoilState(commentListAtom);
  const [commentIdx] = useRecoilState(commentIdxAtom);
  const queryClient = useQueryClient();
  const postId = useParams() as unknown as { idx: number };

  const onRemoveComment = async () => {
    try {
      setIsLoading(true);
      await CommentApi.removeComment(postId.idx, commentIdx);
      setCommentList((prev) =>
        prev.filter((element) => element.idx !== commentIdx)
      );
      setRemoveCommentModal(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: removeComment } = useMutation(onRemoveComment, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('todaysChoice');
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  return (
    <Layout>
      <S.ModalBg onClick={() => setRemoveCommentModal(false)} />
      <S.Modal>
        <h1>댓글 삭제</h1>
        <p>정말 댓글을 삭제할까요?</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <button onClick={() => removeComment()}>확인</button>
            <button onClick={() => setRemoveCommentModal(false)}>취소</button>
          </>
        )}
      </S.Modal>
    </Layout>
  );
};

export default RemoveCommentModal;
