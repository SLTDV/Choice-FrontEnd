import React from 'react';
import { ChoiceData } from '../../../types/choice.types';
import Choice from '../Choice';
import * as S from './style';

const ChoiceList = ({
  choiceList,
  isMine,
}: {
  choiceList: ChoiceData[] | undefined;
  isMine?: boolean;
}) => {
  return (
    <>
      {choiceList?.map((choice) => (
        <S.Box key={choice.idx}>
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

          {isMine && (
            <S.DeleteChoice>
              <img src='svg/ChoiceDelete.svg' alt='삭제' />
            </S.DeleteChoice>
          )}
        </S.Box>
      ))}
    </>
  );
};

export default ChoiceList;
