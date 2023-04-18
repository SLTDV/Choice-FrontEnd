import React from 'react';
import { useRecoilState } from 'recoil';
import { commentIdxAtom, removeCommentModalAtom } from '../../../../atoms';
import { CommentIdxType, CommentType } from '../../../../types/comment.types';
import * as S from './style';
const Comment = (comment: CommentType) => {
  const [, setRemoveCommentModal] = useRecoilState(removeCommentModalAtom);
  const [, setCommentIdx] = useRecoilState<CommentIdxType>(commentIdxAtom);

  const onRemoveComment = (idx: number) => {
    setCommentIdx({ commentIdx: idx });
    setRemoveCommentModal(true);
  };

  return (
    <S.Comment key={comment.idx}>
      <S.CommentBox>
        <S.Profile>
          <img
            src={comment.image ? comment.image : 'svg/DefaultProfileImage.svg'}
            alt=''
          />
          <S.Name>{comment.nickname}</S.Name>
        </S.Profile>
        <S.Content>{comment.content}</S.Content>
      </S.CommentBox>
      {comment.isMine && (
        <S.EditBox className='editBox'>
          <S.Edit>
            <img src='svg/CommentEdit.svg' alt='edit' />
            <div className='line' />
          </S.Edit>
          <S.DeleteBox onClick={() => onRemoveComment(comment.idx)}>
            <img src='svg/CommentDeleteTop.svg' alt='' className='top' />
            <img src='svg/CommentDelete.svg' alt='delete' />
          </S.DeleteBox>
        </S.EditBox>
      )}
    </S.Comment>
  );
};

export default Comment;
