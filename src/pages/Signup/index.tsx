import React from 'react';
import * as S from './style';
import * as I from '../../asset/svg';
const Signup = () => {
  return (
    <S.Layout>
      <S.LogoLayout>
        <S.LogoWrap>
          <I.Logo />
          <p>선택과 고민을 한 번에</p>
        </S.LogoWrap>
      </S.LogoLayout>
    </S.Layout>
  );
};

export default Signup;
