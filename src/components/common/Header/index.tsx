import React from 'react';
import * as S from './style';

const Header = () => {
  return (
    <S.Header>
      <img src='svg/SmallLogo.svg' alt='' className='logo' />
      <S.ProfileWrap>
        <p>강민제</p>
        <img src='' alt='' />
      </S.ProfileWrap>
    </S.Header>
  );
};

export default Header;
