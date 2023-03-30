import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChoiceData } from '../../../types/choice.types';
import * as S from './style';
const Choice = (data: ChoiceData) => {
  useEffect(() => {
    console.log(data.imageUrl);
  }, []);
  return (
    <Link to='/post'>
      <S.Post imageUrl={data.imageUrl}>
        <S.InfoBox>
          <h1>{data.title}</h1>
          <p>
            {data.firstVotingOption} vs {data.secondVotingOption}
          </p>
          <S.Info>
            <img src='svg/Comment.svg' alt='comment' />
            <S.Count>{data.commentCount}</S.Count>
            <img src='svg/Vote.svg' alt='vote' />
            <S.Count>{data.participants}</S.Count>
          </S.Info>
        </S.InfoBox>
      </S.Post>
    </Link>
  );
};

export default Choice;
