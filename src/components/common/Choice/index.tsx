import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
const Choice = () => {
  return (
    <Link to='/post'>
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
    </Link>
  );
};

export default Choice;
