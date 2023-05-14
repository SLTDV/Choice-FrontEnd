import React from 'react';
import { ChoiceData } from '../../../types/choice.types';
import Choice from '../Choice';

const ChoiceList = ({
  choiceList,
}: {
  choiceList: ChoiceData[] | undefined;
}) => {
  return (
    <>
      {choiceList?.map((choice) => (
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
    </>
  );
};

export default ChoiceList;
