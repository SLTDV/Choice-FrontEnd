import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Header = () => {
  return (
    <S.Header>
      <img src='svg/SmallLogo.svg' alt='' className='logo' />
      <Link to='/my'>
        <S.ProfileWrap>
          <p>강민제</p>
          <img src='' alt='' />
        </S.ProfileWrap>
      </Link>
    </S.Header>
  );
};

export default Header;
