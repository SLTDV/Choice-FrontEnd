import React, { useEffect, useState } from 'react';
import Post from '../../../services/Post';
import { ChoiceData } from '../../../types/choice.types';
import Choice from '../../../components/common/Choice';
import * as S from './style';
import { useQuery } from 'react-query';

const TodaysChoice = () => {
  const [todaysPostList, setTodaysPostList] = useState<ChoiceData[]>();

  const getTodaysPost = async () => {
    try {
      const res: any = await Post.getTodaysPost();
      setTodaysPostList(res.data.todayPosts);
    } catch (error: any) {
      console.log(error);
    }
  };

  useQuery({
    queryKey: 'todaysChoice',
    queryFn: getTodaysPost,
  });

  useEffect(() => {
    getTodaysPost();
  }, []);

  return (
    <S.TodaysChoice>
      <S.Todays>오늘의 Choice</S.Todays>
      <S.TodaysChoiceLayout>
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
      </S.TodaysChoiceLayout>
    </S.TodaysChoice>
  );
};

export default TodaysChoice;
