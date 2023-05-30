import React, { useState, useRef, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useRecoilState } from 'recoil';
import {
  commentIdxAtom,
  commentListAtom,
  removeCommentModalAtom,
} from '../../../../atoms';
import { CommentType } from '../../../../types/comment.types';
import CommentApi from '../../../../services/Comment';
import * as S from './style';
import { useParams } from 'react-router-dom';

const Comment = (commentInfo: CommentType) => {
  const [, setRemoveCommentModal] = useRecoilState(removeCommentModalAtom);
  const [commentList, setCommentList] = useRecoilState(commentListAtom);
  const [, setCommentIdx] = useRecoilState<number>(commentIdxAtom);
  const [isEditing, setIsEditing] = useState(false);
  const commentEditContent = useRef<HTMLTextAreaElement>(null);
  const postId = useParams() as unknown as { idx: number };
  const onRemoveComment = (idx: number) => {
    setCommentIdx(idx);
    setRemoveCommentModal(true);
  };

  const editComment = async () => {
    if (commentEditContent.current?.value) {
      const editedComment = commentEditContent.current.value;
      setIsEditing(false);
      await CommentApi.editComment(postId.idx, commentInfo.idx, editedComment);
      setCommentList(
        commentList?.map((comment) =>
          comment.idx === commentInfo.idx
            ? { ...comment, content: editedComment }
            : comment
        )
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

  return (
    <S.Comment isEditing={isEditing}>
      <S.CommentBox>
        <S.Profile>
          <img
            src={
              commentInfo.profileImageUrl
                ? commentInfo.profileImageUrl
                : 'svg/DefaultProfileImage.svg'
            }
            alt=''
          />
          <S.Name>{commentInfo.nickname}</S.Name>
        </S.Profile>
        {isEditing ? (
          <TextareaAutosize
            defaultValue={commentInfo.content}
            required
            ref={commentEditContent}
          />
        ) : (
          <S.Content>{commentInfo.content}</S.Content>
        )}
      </S.CommentBox>
      {commentInfo.isMine && (
        <S.EditBox className='editBox'>
          {isEditing ? (
            <button onClick={() => editComment()}>수정</button>
          ) : (
            <>
              <S.Edit onClick={() => setIsEditing(true)}>
                <img src='svg/CommentEdit.svg' alt='edit' />
                <div className='line' />
              </S.Edit>
              <S.DeleteBox onClick={() => onRemoveComment(commentInfo.idx)}>
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
