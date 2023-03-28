import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
const Page404 = () => {
  return (
    <S.Layout>
      <div>
        <S.Content>
          <img src='svg/SmallLogo.svg' alt='' />
          <h1>404</h1>
          <div>
            <p>입력하신 주소를 다시 확인해주세요.</p>
            <Link to='/'>Choice페이지→</Link>
          </div>
        </S.Content>
      </div>
    </S.Layout>
  );
};

export default Page404;
