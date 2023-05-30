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
      setTodaysPostList(res.data.todayPostList);
    } catch (error: any) {
      console.log(error);
    }
  };

  useQuery({
    queryKey: 'todaysChoice',
    queryFn: getTodaysPost,
    refetchOnWindowFocus: false,
  });

  return (
    <S.TodaysChoice>
      <S.Todays>오늘의 Choice</S.Todays>
      <S.TodaysChoiceLayout>
        {todaysPostList?.length == 0 ? (
          <S.NotPost>오늘 새롭게 올라온 Choice가 없어요.😥</S.NotPost>
        ) : (
          todaysPostList?.map((choice) => (
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
          ))
        )}
      </S.TodaysChoiceLayout>
    </S.TodaysChoice>
  );
};

export default TodaysChoice;
