import React, { useEffect, useState, useRef, useCallback } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import Choice from '../../components/common/Choice';
import { Link } from 'react-router-dom';
import Post from '../../services/Post';
import { ChoiceData } from '../../types/choice.types';

const Main = () => {
  const [choiceList, setChoiceList] = useState<ChoiceData[]>([]);
  const [popularChoiceList, setPopularChoiceList] = useState<ChoiceData[]>([]);
  const [category, setCategory] = useState<'latest' | 'popularity'>('latest');
  const [hasMoreChoice, setHasMoreCoice] = useState(true);
  const [hasMorePopularChoice, setHasMorePopularChoice] = useState(true);
  const latestPage = useRef(0);
  const popularPage = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const observerTargetEl = useRef<HTMLDivElement>(null);

  const getPost = useCallback(async () => {
    setIsLoading(true);
    try {
      if (category == 'latest') {
        const res: any = await Post.getPost(latestPage.current, 12);
        setChoiceList((prevChoice) => [...prevChoice, ...res.data.posts]);
        if (res.data.postList.length !== 12) setHasMoreCoice(false);
        latestPage.current += 1;
      } else if (category == 'popularity') {
        const res: any = await Post.getPopularPost(popularPage.current, 12);
        setPopularChoiceList((prevChoice) => [
          ...prevChoice,
          ...res.data.posts,
        ]);
        if (res.data.postList.length !== 12) setHasMorePopularChoice(false);
        popularPage.current += 1;
      }
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (!observerTargetEl.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) getPost();
    });
    io.observe(observerTargetEl.current);
    return () => io.disconnect();
  }, [hasMoreChoice, hasMorePopularChoice, getPost, isLoading]);

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
            <S.LatestChoiceLastLine
              ref={observerTargetEl}
              hidden={!hasMoreChoice}
            />
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
            <S.PopularityChoiceLastLine
              ref={observerTargetEl}
              hidden={!hasMorePopularChoice}
            />
          </S.PostLayout>
        )}
      </div>
    </S.Layout>
  );
};

export default Main;
