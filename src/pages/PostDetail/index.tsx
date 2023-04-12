import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import Post from '../../services/Post';
import { PostDetailType } from '../../types/choice.types';
import { useParams } from 'react-router-dom';
import TodaysChoice from './TodaysChoice';
import Comment from './Comment';

const PostDetail = () => {
  const postId = useParams() as unknown as { idx: number };
  const [postInfo, setPostInfo] = useState<PostDetailType>();

  const getPostDetail = async () => {
    try {
      const idx: number = postId.idx;
      const res: any = await Post.getPostInfo(idx);
      setPostInfo(res.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostDetail();
  }, []);

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
              <S.ButtonWrap>
                <S.VoteButton>
                  <img src='svg/Check.svg' alt='' />
                </S.VoteButton>
                <S.VoteButton>
                  <img src='svg/Check.svg' alt='' />
                </S.VoteButton>
              </S.ButtonWrap>
            </S.VoteBox>
          </S.Detail>
          <Comment comment={postInfo?.comment} />
        </S.PostDetailSection>
        <TodaysChoice />
      </S.Layout>
    </>
  );
};

export default PostDetail;
