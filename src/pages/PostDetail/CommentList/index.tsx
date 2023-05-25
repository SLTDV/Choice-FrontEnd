import React, {
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import * as S from './style';
import TextareaAutosize from 'react-textarea-autosize';
import User from '../../../services/User';
import CommentApi from '../../../services/Comment';
import { CommentType } from '../../../types/comment.types';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { commentIdxAtom, removeCommentModalAtom } from '../../../atoms';
import { useRecoilState } from 'recoil';
import RemoveCommentModal from '../../../components/modal/RemoveCommentModal';
import Comment from './Comment';

interface CommentListProps {
  commentList?: CommentType[];
  setCommentList: Dispatch<SetStateAction<CommentType[]>>;
}

const CommentList = ({ commentList, setCommentList }: CommentListProps) => {
  const [nickname, setNickname] = useState('');
  const postId = useParams() as unknown as { idx: number };
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
    },
    onSettled: () => {
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
        <RemoveCommentModal setCommentList={setCommentList} />
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
