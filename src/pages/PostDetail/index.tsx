import React from 'react';
import Header from '../../components/common/Header';
import Post from '../../components/common/Post';
import * as S from './style';
const PostDetail = () => {
  return (
    <>
      <Header />
      <S.Layout>
        <S.PostDetailSection>
          <h1>오늘 저녁 메뉴</h1>
          <S.Detail>
            <S.Description>
              오늘 저녁 메뉴를 골라주세요! 썸녀랑 첫 데이트 나왔는데 뭐가 더
              좋을까요?????? 오늘 저녁 골라줘
            </S.Description>
            <S.VoteBox>
              <S.OptionBox>
                <S.Option className='first'>
                  <S.OptionName>
                    <p>스테이크</p>
                  </S.OptionName>
                </S.Option>
                <p>VS</p>
                <S.Option className='second'>
                  <S.OptionName>
                    <p>스테이크</p>
                  </S.OptionName>
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
        </S.PostDetailSection>
      </S.Layout>
    </>
  );
};

export default PostDetail;
