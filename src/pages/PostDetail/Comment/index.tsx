import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import TextareaAutosize from 'react-textarea-autosize';
import User from '../../../services/User';
import CommentApi from '../../../services/Comment';
import { CommentIdxType, CommentType } from '../../../types/comment.types';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { removeCommentModalAtom } from '../../../atoms';
import { useRecoilState } from 'recoil';
import RemoveCommentModal from '../../../components/modal/RemoveCommentModal';

const Comment = ({ comment }: { comment: CommentType[] | undefined }) => {
  const [nickname, setNickname] = useState('');
  const postId = useParams() as unknown as { idx: number };
  const commentContent = useRef<any>();
  const [profileImage, setProfileImage] = useState(
    'svg/DefaultProfileImage.svg'
  );
  const [removeCommentModal, setRemoveCommentModal] = useRecoilState(
    removeCommentModalAtom
  );
  const [commentIdx, setCommentIdx] = useState<CommentIdxType>({
    commentIdx: 0,
  });

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

  const onAddComment = async () => {
    try {
      await CommentApi.addComment(postId.idx, commentContent.current.value);
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
    },
    onSettled: () => {
      commentContent.current.value = '';
    },
  });

  const onRemoveComment = (idx: number) => {
    setCommentIdx({ commentIdx: idx });
    setRemoveCommentModal(true);
  };

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
          <button onClick={() => addComment()} type='button'>
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
              <S.Comments key={comment.idx}>
                <S.CommentBox>
                  <S.Profile>
                    <img
                      src={
                        comment.image
                          ? comment.image
                          : 'svg/DefaultProfileImage.svg'
                      }
                      alt=''
                    />
                    <S.Name>{comment.nickname}</S.Name>
                  </S.Profile>
                  <S.Comment>{comment.content}</S.Comment>
                </S.CommentBox>
                {comment.isMine && (
                  <S.EditBox className='editBox'>
                    <S.Edit>
                      <img src='svg/CommentEdit.svg' alt='edit' />
                      <div className='line' />
                    </S.Edit>
                    <S.DeleteBox onClick={() => onRemoveComment(comment.idx)}>
                      <img
                        src='svg/CommentDeleteTop.svg'
                        alt=''
                        className='top'
                      />
                      <img src='svg/CommentDelete.svg' alt='delete' />
                    </S.DeleteBox>
                  </S.EditBox>
                )}
              </S.Comments>
            ))}
          </>
        )}
      </S.CommentLayout>
    </>
  );
};

export default Comment;
