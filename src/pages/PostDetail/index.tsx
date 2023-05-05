import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import Post from '../../services/Post';
import { PostDetailType } from '../../types/choice.types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TodaysChoice from './TodaysChoice';
import CommentList from './CommentList';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CommentType } from '../../types/comment.types';

const PostDetail = () => {
  const [postInfo, setPostInfo] = useState<PostDetailType>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const postId = useParams() as unknown as { idx: number };
  const [participants, setParticipants] = useState(0);
  const [comment, setComment] = useState<CommentType[]>([]);
  const page = useRef(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerTargetEl = useRef<HTMLDivElement>(null);

  const getComments = useCallback(async () => {
    setIsLoading(true);
    const res: any = await Post.getPostInfo(postId.idx, page.current, 10);
    setComment((prevComments: CommentType[]) => [
      ...prevComments,
      ...res.data.comment,
    ]);
    setHasMore(res.data.comment.length === 10);
    setIsLoading(false);
    if (res.data.comment.length) {
      page.current += 1;
    }
  }, []);

  const getPostDetail = async () => {
    try {
      const res: any = await Post.getPostInfo(postId.idx, 0, 10);
      setPostInfo(res.data);
      setParticipants(res.data.firstVotingCount + res.data.secondVotingCount);
      if (res.data.comment.length !== 10) {
        setHasMore(false);
      }
    } catch (error: any) {
      if (error) navigate('/error/404');
    }
  };

  const onVote = async (choice: number) => {
    return await Post.vote(postId.idx, choice);
  };

  const { mutate: vote } = useMutation(onVote, {
    onMutate: async (newData) => {
      await queryClient.cancelQueries('post');
      const snapshotOfPreviousData = queryClient.getQueryData('post');
      queryClient.setQueryData('post', (oldData: any) => ({
        newData,
        ...oldData,
      }));

      return {
        snapshotOfPreviousData,
      };
    },

    onError: ({ snapshotOfPreviousData }) => {
      queryClient.setQueryData('post', snapshotOfPreviousData);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries('todaysChoice');
      await queryClient.invalidateQueries('post');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries('todaysChoice');
      await queryClient.invalidateQueries('post');
    },
  });

  useQuery(['post', postId.idx], () => getPostDetail(), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!observerTargetEl.current || !hasMore) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        getComments();
      }
    });

    io.observe(observerTargetEl.current);
    return () => io.disconnect();
  }, [hasMore, getComments, !isLoading]);

  return (
    <>
      <Header />
      <S.Layout>
        <span>
          <S.PostDetailSection>
            <S.ProfileBox>
              <img
                src={
                  postInfo?.profileImageUrl
                    ? postInfo.profileImageUrl
                    : 'svg/DefaultProfileImage.svg'
                }
                alt='프로필 이미지'
              />
              <p>{postInfo?.writer}</p>
            </S.ProfileBox>
            <h1>{postInfo?.title}</h1>
            <S.Detail>
              <S.Description>{postInfo?.content}</S.Description>
              <S.VoteBox>
                <S.OptionBox votingState={Number(postInfo?.votingState)}>
                  <S.Option image={postInfo?.firstImageUrl} className='first'>
                    <S.HoverBox>
                      <S.OptionName>
                        <p>{postInfo?.firstVotingOption}</p>
                      </S.OptionName>
                    </S.HoverBox>
                  </S.Option>
                  <p>VS</p>
                  <S.Option image={postInfo?.secondImageUrl} className='second'>
                    <S.HoverBox>
                      <S.OptionName>
                        <p>{postInfo?.secondVotingOption}</p>
                      </S.OptionName>
                    </S.HoverBox>
                  </S.Option>
                </S.OptionBox>
                {postInfo?.votingState === 0 ? (
                  <S.ButtonWrap>
                    <S.VoteButton onClick={() => vote(1)}>
                      <img src='svg/Check.svg' alt='' />
                    </S.VoteButton>
                    <S.VoteButton onClick={() => vote(2)}>
                      <img src='svg/Check.svg' alt='' />
                    </S.VoteButton>
                  </S.ButtonWrap>
                ) : (
                  <S.ButtonWrap votingState={postInfo?.votingState}>
                    <S.VoteButton
                      onClick={() => postInfo?.votingState !== 1 && vote(1)}
                      className='firstBtn'
                    >
                      <h1>
                        {postInfo &&
                          Math.round(
                            (postInfo.firstVotingCount / participants) * 100
                          )}
                        %
                      </h1>
                      <p>{postInfo?.firstVotingCount}명</p>
                    </S.VoteButton>
                    <S.VoteButton
                      onClick={() => postInfo?.votingState !== 2 && vote(2)}
                      className='secondBtn'
                    >
                      <h1>
                        {postInfo &&
                          Math.round(
                            (postInfo.secondVotingCount / participants) * 100
                          )}
                        %
                      </h1>
                      <p>{postInfo?.secondVotingCount}명</p>
                    </S.VoteButton>
                  </S.ButtonWrap>
                )}
              </S.VoteBox>
            </S.Detail>
            <CommentList
              comment={comment.length == 0 ? postInfo?.comment : comment}
            />
            <S.LastCommentLine ref={observerTargetEl} hidden={!hasMore} />
            <S.Spinner isLoading={isLoading} />
          </S.PostDetailSection>
          <TodaysChoice />
        </span>
      </S.Layout>
    </>
  );
};

export default PostDetail;
