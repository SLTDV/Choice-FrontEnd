import React from 'react';
import * as S from './style';
const Post = () => {
  return (
    <S.Post>
      <S.InfoBox>
        <h1>가장 좋아하는 음식</h1>
        <p>스테이크 vs 떡볶이</p>
        <S.Info>
          <img src='svg/Comment.svg' alt='' />
          <S.Count>00</S.Count>
          <img src='svg/Vote.svg' alt='' />
          <S.Count>42</S.Count>
        </S.Info>
      </S.InfoBox>
    </S.Post>
  );
};

export default Post;
