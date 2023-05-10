import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import TextareaAutosize from 'react-textarea-autosize';
import User from '../../../services/User';
import CommentApi from '../../../services/Comment';
import { CommentIdxType, CommentType } from '../../../types/comment.types';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { commentIdxAtom, removeCommentModalAtom } from '../../../atoms';
import { useRecoilState } from 'recoil';
import RemoveCommentModal from '../../../components/modal/RemoveCommentModal';
import Comment from './Comment';

const CommentList = ({ comment }: { comment: CommentType[] | undefined }) => {
  const [nickname, setNickname] = useState('');
  const postId = useParams() as unknown as { idx: number };
  const commentContent = useRef<any>();
  const [profileImage, setProfileImage] = useState(
    'svg/DefaultProfileImage.svg'
  );
  const [removeCommentModal] = useRecoilState(removeCommentModalAtom);
  const [commentIdx] = useRecoilState<CommentIdxType>(commentIdxAtom);
  const queryClient = useQueryClient();

  const getMyProfile = async () => {
    try {
      const res: any = await User.getMiniProfile();
      setNickname(res.data.nickname);
      res.data.image && setProfileImage(res.data.image);
    } catch (error: any) {
      console.log(error);
    }
  };

  const onAddComment = async (idx: number) => {
    try {
      await CommentApi.addComment(idx, commentContent.current.value);
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: addComment } = useMutation(onAddComment, {
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
      queryClient.invalidateQueries('todaysChoice');
    },
    onSettled: () => {
      queryClient.invalidateQueries('post');
      queryClient.invalidateQueries('todaysChoice');
      commentContent.current.value = '';
    },
  });

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      {removeCommentModal && (
        <RemoveCommentModal commentIdx={commentIdx.commentIdx} />
      )}
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
          <button onClick={() => addComment(postId.idx)} type='button'>
            등록
          </button>
        </S.InputWrap>
        {comment?.length == 0 ? (
          <S.isNotCommentBox>
            <p>첫 댓글을 입력해 주세요.</p>
          </S.isNotCommentBox>
        ) : (
          <>
            {comment?.map((comment: CommentType) => (
              <Comment
                key={comment.idx}
                idx={comment.idx}
                profileImageUrl={comment.profileImageUrl}
                nickname={comment.nickname}
                content={comment.content}
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
