import React from 'react';
import * as S from './style';
import * as I from '../../../asset/svg';

const Header = () => {
  return (
    <S.Header>
      <I.SmallLogo />
      <S.ProfileWrap>
        <p>강민제</p>
        <img src='' alt='' />
      </S.ProfileWrap>
    </S.Header>
  );
};

export default Header;
