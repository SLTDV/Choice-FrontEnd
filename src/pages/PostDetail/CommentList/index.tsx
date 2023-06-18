import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import TextareaAutosize from 'react-textarea-autosize';
import User from '../../../services/User';
import CommentApi from '../../../services/Comment';
import { CommentType } from '../../../types/comment.types';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { commentListAtom, removeCommentModalAtom } from '../../../atoms';
import { useRecoilState } from 'recoil';
import RemoveCommentModal from '../../../components/modal/RemoveCommentModal';
import Comment from './Comment';
import { Spinner } from '../../../components/common/Spinner/style';

const CommentList = () => {
  const [nickname, setNickname] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const postId = useParams() as unknown as { idx: number };
  const [commentList] = useRecoilState(commentListAtom);
  const commentContent = useRef<any>();
  const [profileImage, setProfileImage] = useState(
    'svg/DefaultProfileImage.svg'
  );
  const [removeCommentModal] = useRecoilState(removeCommentModalAtom);
  const queryClient = useQueryClient();
  const getMyProfile = async () => {
    try {
      const { data }: any = await User.getMiniProfile();
      setNickname(data.nickname);
      data.image && setProfileImage(data.image);
    } catch (error: any) {
      console.log(error);
    }
  };

  const onAddComment = async (idx: number) => {
    try {
      setIsLoading(true);
      await CommentApi.addComment(idx, commentContent.current.value);
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: addComment } = useMutation(onAddComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('todaysChoice');
      queryClient.invalidateQueries('comment');
    },
    onSettled: () => {
      setIsLoading(false);
      commentContent.current.value = '';
    },
  });

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      {removeCommentModal && <RemoveCommentModal />}
      <S.CommentLayout>
        <h1>댓글</h1>
        <S.InputWrap isLoading={isLoading}>
          <TextareaAutosize
            placeholder='댓글을 작성해주세요.'
            required
            ref={commentContent}
          />
          <S.Profile>
            <img src={profileImage} alt='' />
            <S.Name>{nickname}</S.Name>
          </S.Profile>
          <div className='btnLayout'>
            <button onClick={() => addComment(postId.idx)} type='button'>
              등록
            </button>
          </div>
        </S.InputWrap>
        {isLoading && (
          <S.SpinnerLayout>
            <Spinner />
          </S.SpinnerLayout>
        )}
        {commentList?.length == 0 ? (
          <S.isNotCommentBox>
            <p>첫 댓글을 입력해 주세요.</p>
          </S.isNotCommentBox>
        ) : (
          <>
            {commentList?.map((comment: CommentType) => (
              <Comment
                key={comment.idx}
                idx={comment.idx}
                content={comment.content}
                nickname={comment.nickname}
                profileImageUrl={comment.profileImageUrl}
                isMine={comment.isMine}
              />
            ))}
          </>
        )}
      </S.CommentLayout>
    </>
  );
};

export default CommentList;
