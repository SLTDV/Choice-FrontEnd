import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Header from '../../components/common/Header';
import * as S from './style';
import Choice from '../../components/common/Choice';
import Post from '../../services/Post';
import { ChoiceData, PostDetailType } from '../../types/choice.types';
import { useParams } from 'react-router-dom';
import TodaysChoice from './TodaysChoice';
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
            <img src={postInfo?.profileImageUrl} alt='' />
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
          <S.CommentSection>
            <h1>댓글</h1>
            <S.InputWrap>
              <TextareaAutosize placeholder='댓글을 작성해주세요.' />
              <S.Profile>
                <img src='svg/Vote.svg' alt='' />
                <S.Name>강민제</S.Name>
              </S.Profile>
              <button>등록</button>
            </S.InputWrap>
            {postInfo?.comment.map((comment) => (
              <S.Comments key={comment.idx}>
                <S.CommentBox>
                  <S.Profile>
                    <img src={comment.image} alt='' />
                    <S.Name>{comment.nickname}</S.Name>
                  </S.Profile>
                  <S.Comment>{comment.content}</S.Comment>
                </S.CommentBox>
              </S.Comments>
            ))}
          </S.CommentSection>
        </S.PostDetailSection>
        <TodaysChoice />
      </S.Layout>
    </>
  );
};

export default PostDetail;
