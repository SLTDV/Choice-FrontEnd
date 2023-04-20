import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import Post from '../../services/Post';
import { PostDetailType } from '../../types/choice.types';
import { useLocation, useNavigate } from 'react-router-dom';
import TodaysChoice from './TodaysChoice';
import CommentList from './CommentList';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const PostDetail = () => {
  const [postInfo, setPostInfo] = useState<PostDetailType>();
  const [votingState, setvotingState] = useState();
  const [participants, setParticipants] = useState(0);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const idx: number = location.state.idx;

  const getPostDetail = async () => {
    try {
      const res: any = await Post.getPostInfo(idx);
      setPostInfo(res.data);
      setvotingState(res.data.votingState);
      setParticipants(res.data.firstVotingCount + res.data.secondVotingCount);
    } catch (error: any) {
      error.response.status == 404 && navigate('/error/404');
    }
  };

  const onVote = async (choice: number) => {
    try {
      await Post.vote(idx, choice);
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate: vote } = useMutation(onVote, {
    onSettled: () => {
      queryClient.invalidateQueries('post');
      queryClient.invalidateQueries('todaysChoice');
    },
  });

  useQuery({
    queryKey: 'post',
    queryFn: getPostDetail,
  });

  useEffect(() => {
    getPostDetail();
  }, [postInfo]);

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
              alt=''
            />
            <p>{postInfo?.writer}</p>
          </S.ProfileBox>
          <h1>{postInfo?.title}</h1>
          <S.Detail>
            <S.Description>{postInfo?.content}</S.Description>
            <S.VoteBox>
              <S.OptionBox>
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
              {votingState == 0 ? (
                <S.ButtonWrap>
                  <S.VoteButton onClick={() => vote(1)}>
                    <img src='svg/Check.svg' alt='' />
                  </S.VoteButton>
                  <S.VoteButton onClick={() => vote(2)}>
                    <img src='svg/Check.svg' alt='' />
                  </S.VoteButton>
                </S.ButtonWrap>
              ) : (
                <S.ButtonWrap>
                  <S.VoteButton
                    onClick={() => postInfo?.votingState !== 1 && onVote(1)}
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
                    onClick={() => postInfo?.votingState !== 2 && onVote(2)}
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
