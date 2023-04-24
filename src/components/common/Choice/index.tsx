import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChoiceData } from '../../../types/choice.types';
import * as S from './style';
const Choice = (data: ChoiceData) => {
  const navigate = useNavigate();

  return (
    <S.Post
      imageUrl={data.imageUrl}
      onClick={() =>
        navigate('/' + data.idx, {
          state: {
            idx: data.idx,
          },
        })
      }
    >
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
  );
};

export default Choice;
