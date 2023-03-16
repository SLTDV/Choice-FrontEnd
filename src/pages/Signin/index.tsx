import React from 'react';
import * as S from './style';
import * as I from '../../asset/svg';

const Signin = () => {
  return (
    <S.Layout>
      <S.LogoLayout>
        <S.LogoWrap>
          <I.Logo />
          <p>선택의 고민을 한 번에</p>
        </S.LogoWrap>
      </S.LogoLayout>
    </S.Layout>
  );
};

export default Signin;
