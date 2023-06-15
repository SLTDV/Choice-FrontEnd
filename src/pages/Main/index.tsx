import React, { useEffect, useState, useRef, useCallback } from 'react';
import Header from '../../components/common/Header';
import * as S from './style';
import { Link } from 'react-router-dom';
import Post from '../../services/Post';
import { ChoiceData } from '../../types/choice.types';
import PostSkeleton from '../../components/common/PostSkeleton';
import ChoiceList from '../../components/common/ChoiceList';

interface GetPostData {
  page: number;
  postList: ChoiceData[];
}

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
  const skeletonArr = [0, 1, 2, 3, 4, 5];

  const getPost = useCallback(async () => {
    setIsLoading(true);
    try {
      if (category == 'latest') {
        const res: any = await Post.getPost(latestPage.current, 12);
        const data: GetPostData = {
          page: res.data.page,
          postList: res.data.postList ? res.data.postList : [],
        };
        setChoiceList((prevChoice) => [...prevChoice, ...data.postList]);
        setHasMoreCoice(data.postList.length == 12);
        latestPage.current += 1;
      } else if (category == 'popularity') {
        const res: any = await Post.getPopularPost(popularPage.current, 12);
        const data: GetPostData = {
          page: res.data.page,
          postList: res.data.postList ? res.data.postList : [],
        };
        setPopularChoiceList((prevChoice) => [...prevChoice, ...data.postList]);
        setHasMorePopularChoice(data.postList.length == 12);
        popularPage.current += 1;
      }
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  }, [category]);

  useEffect(() => {
    if (
      !observerTargetEl.current ||
      (category == 'latest' && !hasMoreChoice) ||
      (category == 'popularity' && !hasMorePopularChoice)
    )
      return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) getPost();
    });
    io.observe(observerTargetEl.current);
    return () => io.disconnect();
  }, [hasMoreChoice, getPost, isLoading, category]);

  return (
    <S.Layout>
      <Header />
      <div className='layout'>
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
            <ChoiceList choiceList={choiceList} />
            {isLoading && skeletonArr.map((idx) => <PostSkeleton key={idx} />)}
          </S.PostLayout>
        ) : (
          <S.PostLayout>
            <ChoiceList choiceList={popularChoiceList} />
            {isLoading && skeletonArr.map((idx) => <PostSkeleton key={idx} />)}
          </S.PostLayout>
        )}
        <S.LastChoiceLine ref={observerTargetEl} />
      </div>
    </S.Layout>
  );
};

export default Main;
