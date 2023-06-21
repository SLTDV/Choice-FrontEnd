import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import Post from '../../services/Post';
import { PostDetailType } from '../../types/choice.types';
import { useNavigate, useParams } from 'react-router-dom';
import TodaysChoice from './TodaysChoice';
import CommentList from './CommentList';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CommentType } from '../../types/comment.types';
import { useRecoilState } from 'recoil';
import {
  blockUserModalAtom,
  commentListAtom,
  reportPostModalAtom,
} from '../../atoms';
import { toast } from 'react-toastify';
import { Spinner } from '../../components/common/Spinner/style';
import ReportPostModal from '../../components/modal/ReportPostModal';
import BlockUserModal from '../../components/modal/BlockUserModal';

const PostDetail = () => {
  const [postInfo, setPostInfo] = useState<PostDetailType>();
  const [reportChoiceModal, setReportChoiceModal] = useState<
    boolean | 'default'
  >('default');
  const [blockUserModal, setblockUserModal] =
    useRecoilState(blockUserModalAtom);
  const [reportPostModal, setReportPostModal] =
    useRecoilState(reportPostModalAtom);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const postId = useParams() as unknown as { idx: number };
  const [participants, setParticipants] = useState(0);
  const [, setCommentList] = useRecoilState(commentListAtom);
  const page = useRef(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firstOptionHoverd, setFirstOptionHoverd] = useState<boolean>(false);
  const [secondOptionHoverd, setSecondOptionHoverd] = useState<boolean>(false);
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const getComments = useCallback(async () => {
    setIsLoading(true);
    const { data }: any = await Post.getPostInfo(postId.idx, page.current, 10);
    setCommentList((prevCommentList: CommentType[]) => [
      ...prevCommentList,
      ...data.commentList,
    ]);
    setHasMore(data.commentList.length === 10);
    setIsLoading(false);
    if (data.commentList.length) {
      page.current += 1;
    }
  }, []);

  const getPostDetail = async () => {
    try {
      const { data }: any = await Post.getPostInfo(
        postId.idx,
        page.current,
        10
      );
      setPostInfo(data);
      setParticipants(data.firstVotingCount + data.secondVotingCount);
    } catch (error: any) {
      if (error.response.status === 400) {
        navigate('/');
        navigate('/signin');
        toast.error('로그인 후 이용해주세요.');
      }
      if (error.response.status === 404) navigate('/error/404');
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
  });

  const kebobModalHandler = () => {
    if (reportChoiceModal == 'default') {
      setReportChoiceModal(true);
    } else setReportChoiceModal(!reportChoiceModal);
  };

  const setComments = async () => {
    const { data }: any = await Post.getPostInfo(postId.idx, 0, 10);
    setCommentList(data.commentList);
    setHasMore(data.commentList.length === 10);
    page.current = 1;
  };

  useQuery(['post', postId.idx], () => getPostDetail(), {
    refetchOnWindowFocus: false,
  });

  useQuery(['comment', postId.idx], () => setComments(), {
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
      {blockUserModal && <BlockUserModal nickname={postInfo?.writer} />}
      {reportPostModal && <ReportPostModal />}
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
            <h1 className='title'>{postInfo?.title}</h1>
            {!postInfo?.isMine && (
              <>
                <S.Kebob onClick={kebobModalHandler}>
                  <img src='svg/Kebob.svg' alt='' />
                </S.Kebob>
                <S.KebobModal isOpen={reportChoiceModal}>
                  <p onClick={() => setblockUserModal(true)}>차단</p>
                  <p onClick={() => setReportPostModal(true)}>게시물 신고</p>
                </S.KebobModal>
              </>
            )}

            <S.Detail>
              <S.Description>{postInfo?.content}</S.Description>
              <S.VoteBox>
                <S.OptionBox votingState={Number(postInfo?.votingState)}>
                  <S.Option image={postInfo?.firstImageUrl} className='first'>
                    <S.OptionTitle>{postInfo?.firstVotingOption}</S.OptionTitle>
                    <S.HoverBox>
                      <S.OptionName isHoverd={firstOptionHoverd}>
                        <p>{postInfo?.firstVotingOption}</p>
                      </S.OptionName>
                    </S.HoverBox>
                  </S.Option>
                  <p className='vs'>VS</p>
                  <S.Option image={postInfo?.secondImageUrl} className='second'>
                    <S.OptionTitle>
                      {postInfo?.secondVotingOption}
                    </S.OptionTitle>
                    <S.HoverBox>
                      <S.OptionName isHoverd={secondOptionHoverd}>
                        <p>{postInfo?.secondVotingOption}</p>
                      </S.OptionName>
                    </S.HoverBox>
                  </S.Option>
                </S.OptionBox>
                {postInfo?.votingState === 0 ? (
                  <S.ButtonWrap>
                    <S.VoteButton
                      onClick={() => vote(1)}
                      onMouseOver={() => setFirstOptionHoverd(true)}
                      onMouseOut={() => setFirstOptionHoverd(false)}
                    >
                      <img src='svg/Check.svg' alt='' />
                    </S.VoteButton>
                    <S.VoteButton
                      onClick={() => vote(2)}
                      onMouseEnter={() => setSecondOptionHoverd(true)}
                      onMouseLeave={() => setSecondOptionHoverd(false)}
                    >
                      <img src='svg/Check.svg' alt='' />
                    </S.VoteButton>
                  </S.ButtonWrap>
                ) : (
                  <S.ButtonWrap votingState={postInfo?.votingState}>
                    <S.VoteButton
                      onClick={() => postInfo?.votingState !== 1 && vote(1)}
                      className='firstBtn'
                      onMouseOver={() => setFirstOptionHoverd(true)}
                      onMouseOut={() => setFirstOptionHoverd(false)}
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
                      onMouseEnter={() => setSecondOptionHoverd(true)}
                      onMouseLeave={() => setSecondOptionHoverd(false)}
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
            <CommentList />
            <S.LastCommentLine ref={observerTargetEl} hidden={!hasMore} />
            {isLoading && (
              <S.SpinnerLayout>
                <Spinner />
              </S.SpinnerLayout>
            )}
          </S.PostDetailSection>
          <TodaysChoice />
        </span>
      </S.Layout>
    </>
  );
};

export default PostDetail;
