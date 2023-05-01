import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import Post from '../../services/Post';
import { PostDetailType } from '../../types/choice.types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TodaysChoice from './TodaysChoice';
import CommentList from './CommentList';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const PostDetail = () => {
  const [postInfo, setPostInfo] = useState<PostDetailType>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const postId = useParams() as unknown as { idx: number };
  const [participants, setParticipants] = useState(0);

  const getPostDetail = async (postId: number) => {
    try {
      const res: any = await Post.getPostInfo(postId);
      setPostInfo(res.data);
      setParticipants(res.data.firstVotingCount + res.data.secondVotingCount);
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

  useQuery(['post', postId.idx], () => getPostDetail(postId.idx), {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Header />
      <S.Layout>
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
          <CommentList comment={postInfo?.comment} />
        </S.PostDetailSection>
        <TodaysChoice />
      </S.Layout>
    </>
  );
};

export default PostDetail;
