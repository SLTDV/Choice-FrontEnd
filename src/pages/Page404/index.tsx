import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
const Page404 = () => {
  return (
    <S.Layout>
      <div>
        <img src='svg/404.svg' alt='404' />
        <S.Content>
          <img src='svg/SmallLogo.svg' alt='' />
          <h1>404</h1>
          <span>
            <p>입력하신 주소를 다시 확인해주세요.</p>
            <Link to='/'>Choice페이지→</Link>
          </span>
        </S.Content>
      </div>
    </S.Layout>
  );
};

export default Page404;
