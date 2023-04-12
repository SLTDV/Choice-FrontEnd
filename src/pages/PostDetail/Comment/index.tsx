import React, { useEffect, useState } from 'react';
import * as S from './style';
import TextareaAutosize from 'react-textarea-autosize';
import { CommentType } from '../../../types/choice.types';
import User from '../../../services/User';

const Comment = ({ comment }: { comment: CommentType[] | undefined }) => {
  const [nickname, setNickname] = useState('');
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

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <S.CommentSection>
      <h1>댓글</h1>
      <S.InputWrap>
        <TextareaAutosize placeholder='댓글을 작성해주세요.' required />
        <S.Profile>
          <img src={profileImage} alt='' />
          <S.Name>{nickname}</S.Name>
        </S.Profile>
        <button>등록</button>
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
    </S.CommentSection>
  );
};

export default Comment;
