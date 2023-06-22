import React from 'react';
import { Link } from 'react-router-dom';
import { ChoiceData } from '../../../types/choice.types';
import * as S from './style';
const Choice = (data: ChoiceData) => {
  return (
    <Link to={`/` + data.idx}>
      <S.Post imageUrl={data.imageUrl}>
        <S.InfoBox>
          <h1>{data.title}</h1>
          <p>
            {data.firstVotingOption} vs {data.secondVotingOption}
          </p>
          <S.Info>
            <img src='svg/Vote.svg' alt='vote' />
            <S.Count>{data.participants}</S.Count>
            <img src='svg/Comment.svg' alt='comment' />
            <S.Count>{data.commentCount}</S.Count>
          </S.Info>
        </S.InfoBox>
      </S.Post>
    </Link>
  );
};

export default Choice;
