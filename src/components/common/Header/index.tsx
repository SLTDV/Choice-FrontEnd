import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loggedAtom } from '../../../atoms';
import * as S from './style';
import { useRecoilState } from 'recoil';
import User from '../../../services/User';
import tokenService from '../../../utils/tokenService';

const Header = () => {
  const [logged] = useRecoilState(loggedAtom);
  const [nickname, setNickname] = useState();
  const [profileImageUrl, setProfileImageUrl] = useState();
  const getMiniProfile = async () => {
    if (logged) {
      try {
        const res: any = await User.getMiniProfile();
        setNickname(res.data.nickname);
        setProfileImageUrl(res.data.image);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getMiniProfile();
  }, []);
  return (
    <S.Header>
      <Link to='/'>
        <img src='svg/SmallLogo.svg' alt='' className='logo' />
      </Link>
      {logged ? (
        <Link to='/my'>
          <S.ProfileWrap>
            <p>{nickname}</p>
            <img src={profileImageUrl} alt='' />
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
