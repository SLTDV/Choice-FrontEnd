import React from 'react';
import { Link } from 'react-router-dom';
import { loggedAtom } from '../../../atoms';
import * as S from './style';
import { useRecoilState } from 'recoil';

const Header = () => {
  const [logged] = useRecoilState(loggedAtom);

  return (
    <S.Header>
      <Link to='/'>
        <img src='svg/SmallLogo.svg' alt='' className='logo' />
      </Link>
      {logged ? (
        <Link to='/my'>
          <S.ProfileWrap>
            <p>강민제</p>
            <img src='' alt='' />
          </S.ProfileWrap>
        </Link>
      ) : (
        <S.SigninBox>
          <Link to='/signin'>
            <p>로그인</p>
          </Link>
          <Link to='/signup'>
            <p>회원가입</p>
          </Link>
        </S.SigninBox>
      )}
    </S.Header>
  );
};

export default Header;
