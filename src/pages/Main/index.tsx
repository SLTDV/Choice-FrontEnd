import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import Choice from '../../components/common/Choice';
import { Link } from 'react-router-dom';
import Post from '../../services/Post';
import { ChoiceData } from '../../types/choice.types';

const Main = () => {
  const [choiceList, setChoiceList] = useState<ChoiceData[]>();
  const [popularChoiceList, setPopularChoiceList] = useState<ChoiceData[]>();
  const [category, setCategory] = useState<'latest' | 'popularity'>('latest');
  const [hasMoreChoice, setHasMoreCoice] = useState(true);
  const latestPage = useRef(0);
  const popularPage = useRef(0);
  const [isLoading, setIsLoading] = useState(false);

  const getPost = async () => {
    setIsLoading(true);
    try {
      if (category == 'latest') {
        const res: any = await Post.getPost(latestPage.current, 12);
        setChoiceList(res.data.posts);
        if (res.data.posts.length !== 12) setHasMoreCoice(false);
      } else if (category == 'popularity') {
        const res: any = await Post.getPopularPost(popularPage.current, 12);
        setPopularChoiceList(res.data.posts);
        if (res.data.posts.length !== 12) setHasMoreCoice(false);
      }
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [category]);

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
              <S.Latest mode={category} onClick={() => setCategory('latest')}>
                최신순
              </S.Latest>
              <S.popularity
                mode={category}
                onClick={() => setCategory('popularity')}
              >
                인기순
              </S.popularity>
            </S.CategoryModal>
          </S.Category>
        </S.Nav>
        {category == 'latest' ? (
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
        ) : (
          <S.PostLayout>
            {popularChoiceList?.map((choice) => (
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
        )}
      </div>
    </S.Layout>
  );
};

export default Main;
