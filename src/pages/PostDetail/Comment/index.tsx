import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import TextareaAutosize from 'react-textarea-autosize';
import User from '../../../services/User';
import CommentApi from '../../../services/Comment';
import { CommentType } from '../../../types/comment.types';
import { useParams } from 'react-router-dom';

const Comment = ({ comment }: { comment: CommentType[] | undefined }) => {
  const [nickname, setNickname] = useState('');
  const postId = useParams() as unknown as { idx: number };
  const commentContent = useRef<any>();
  const [profileImage, setProfileImage] = useState(
    'svg/DefaultProfileImage.svg'
  );

  const getMyProfile = async () => {
    try {
      const res: any = await User.getMiniProfile();
      setNickname(res.data.nickname);
      res.data.image && setProfileImage(res.data.image);
    } catch (error: any) {
      console.log(error);
    }
  };

  const addComment = async () => {
    try {
      await CommentApi.addComment(postId.idx, commentContent.current.value);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <S.CommentLayout>
      <h1>댓글</h1>
      <S.InputWrap>
        <TextareaAutosize
          placeholder='댓글을 작성해주세요.'
          required
          ref={commentContent}
        />
        <S.Profile>
          <img src={profileImage} alt='' />
          <S.Name>{nickname}</S.Name>
        </S.Profile>
        <button onClick={() => addComment()}>등록</button>
      </S.InputWrap>
      {comment?.map((comment: any) => (
        <S.Comments key={comment.idx}>
          <S.CommentBox>
            <S.Profile>
              <img
                src={
                  comment.image ? comment.image : 'svg/DefaultProfileImage.svg'
                }
                alt=''
              />
              <S.Name>{comment.nickname}</S.Name>
            </S.Profile>
            <S.Comment>{comment.content}</S.Comment>
          </S.CommentBox>
        </S.Comments>
      ))}
    </S.CommentLayout>
  );
};

export default Comment;
