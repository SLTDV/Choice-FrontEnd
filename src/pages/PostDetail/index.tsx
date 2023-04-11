import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Header from '../../components/common/Header';
import * as S from './style';
import Choice from '../../components/common/Choice';
import Post from '../../services/Post';
import { ChoiceData } from '../../types/choice.types';
const PostDetail = () => {
  const [todaysPostList, setTodaysPostList] = useState<ChoiceData[]>();
  const getTodaysPost = async () => {
    try {
      const res: any = await Post.getTodaysPost();
      setTodaysPostList(res.data.todayPosts);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodaysPost();
  }, []);
  return (
    <>
      <Header />
      <S.Layout>
        <S.PostDetailSection>
          <S.ProfileBox>
            <img src='svg/Vote.svg' alt='' />
            <p>강민제</p>
          </S.ProfileBox>
          <h1>오늘 저녁 메뉴</h1>
          <S.Detail>
            <S.Description>
              오늘 저녁 메뉴를 골라주세요! 썸녀랑 첫 데이트 나왔는데 뭐가 더
              좋을까요?????? 오늘 저녁 골라줘
            </S.Description>
            <S.VoteBox>
              <S.OptionBox>
                <S.Option className='first'>
                  <S.HoverBox>
                    <S.OptionName>
                      <p>스테이크</p>
                    </S.OptionName>
                  </S.HoverBox>
                </S.Option>
                <p>VS</p>
                <S.Option className='second'>
                  <S.HoverBox>
                    <S.OptionName>
                      <p>스테이크</p>
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
            <S.Comments>
              <S.CommentBox>
                <S.Profile>
                  <img src='svg/Vote.svg' alt='' />
                  <S.Name>강민제</S.Name>
                </S.Profile>
                <S.Comment>dansfbasnd</S.Comment>
              </S.CommentBox>
            </S.Comments>
          </S.CommentSection>
        </S.PostDetailSection>
        <S.TodaysPosts>
          <S.Todays>오늘의 Choice</S.Todays>
          <S.TodaysPostsLayout>
            {todaysPostList?.map((choice) => (
              <Choice
                key={choice.idx}
                idx={choice.idx}
                imageUrl={choice.imageUrl}
                title={choice.title}
                participants={choice.participants}
                commentCount={choice.commentCount}
                firstVotingOption={choice.firstVotingOption}
                secondVotingOption={choice.secondVotingOption}
              />
            ))}
          </S.TodaysPostsLayout>
        </S.TodaysPosts>
      </S.Layout>
    </>
  );
};

export default PostDetail;
