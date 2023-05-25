import React, { useState, useRef, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useRecoilState } from 'recoil';
import { commentIdxAtom, removeCommentModalAtom } from '../../../../atoms';
import { CommentType } from '../../../../types/comment.types';
import { useMutation, useQueryClient } from 'react-query';
import CommentApi from '../../../../services/Comment';
import * as S from './style';
import { useParams } from 'react-router-dom';

const Comment = (comment: CommentType) => {
  const [, setRemoveCommentModal] = useRecoilState(removeCommentModalAtom);
  const [, setCommentIdx] = useRecoilState<number>(commentIdxAtom);
  const [isEditing, setIsEditing] = useState(false);
  const commentEditContent = useRef<HTMLTextAreaElement>(null);
  const postId = useParams() as unknown as { idx: number };
  const queryClient = useQueryClient();
  const onRemoveComment = (idx: number) => {
    setCommentIdx(idx);
    setRemoveCommentModal(true);
  };

  const onEditComment = async () => {
    if (commentEditContent.current?.value) {
      setIsEditing(false);
      await CommentApi.editComment(
        postId.idx,
        comment.idx,
        commentEditContent.current?.value
      );
    }
  };

  useEffect(() => {
    if (commentEditContent.current !== null) {
      const len = commentEditContent.current?.textLength;
      commentEditContent.current.focus();
      commentEditContent.current.setSelectionRange(len, len);
    }
  }, [isEditing]);

  const { mutate: editComment } = useMutation(onEditComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
    },
    onSettled: () => {
      queryClient.invalidateQueries('post');
      setIsEditing(false);
    },
  });

  return (
    <S.Comment isEditing={isEditing}>
      <S.CommentBox>
        <S.Profile>
          <img
            src={
              comment.profileImageUrl
                ? comment.profileImageUrl
                : 'svg/DefaultProfileImage.svg'
            }
            alt=''
          />
          <S.Name>{comment.nickname}</S.Name>
        </S.Profile>
        {isEditing ? (
          <TextareaAutosize
            defaultValue={comment.content}
            required
            ref={commentEditContent}
          />
        ) : (
          <S.Content>{comment.content}</S.Content>
        )}
      </S.CommentBox>
      {comment.isMine && (
        <S.EditBox className='editBox'>
          {isEditing ? (
            <button onClick={() => editComment()}>수정</button>
          ) : (
            <>
              <S.Edit onClick={() => setIsEditing(true)}>
                <img src='svg/CommentEdit.svg' alt='edit' />
                <div className='line' />
              </S.Edit>
              <S.DeleteBox onClick={() => onRemoveComment(comment.idx)}>
                <img src='svg/CommentDeleteTop.svg' alt='' className='top' />
                <img src='svg/CommentDelete.svg' alt='delete' />
              </S.DeleteBox>
            </>
          )}
        </S.EditBox>
      )}
    </S.Comment>
  );
};

export default Comment;
