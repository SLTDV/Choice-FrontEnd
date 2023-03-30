import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import Choice from '../../components/common/Choice';
import { Link } from 'react-router-dom';
import Post from '../../services/Post';
import tokenService from '../../utils/tokenService';
import { ChoiceData } from '../../types/choice.types';
const Main = () => {
  const [choiceList, setChoiceList] = useState<ChoiceData[]>();
  const [category, setCategory] = useState<'latest' | 'popularity'>('latest');
  const getPost = async () => {
    try {
      setCategory('latest');
      const res: any = await Post.getPost();
      setChoiceList(res.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getPopularPost = async () => {
    try {
      setCategory('popularity');
      const res: any = await Post.getPopularPost();
      setChoiceList(res.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <S.Layout>
      <div>
        <Header />
        <S.Nav>
          <Link to='makeChoice'>
            <S.MakeChoiceBtn>Choice만들기</S.MakeChoiceBtn>
          </Link>
          <S.Category>
            <img src='svg/Category.svg' alt='' />
            <p>{category == 'latest' ? '최신순' : '인기순'}</p>
            <S.CategoryModal>
              <S.Latest mode={category} onClick={getPost}>
                최신순
              </S.Latest>
              <S.popularity mode={category} onClick={getPopularPost}>
                인기순
              </S.popularity>
            </S.CategoryModal>
          </S.Category>
        </S.Nav>
        <S.PostLayout>
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
        </S.PostLayout>
      </div>
    </S.Layout>
  );
};

export default Main;
