import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as I from '../../asset/svg';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <S.Layout>
      <S.LogoLayout>
        <S.LogoWrap>
          <I.Logo />
          <p>선택의 고민을 한 번에</p>
        </S.LogoWrap>
      </S.LogoLayout>
      <S.SigninLayout>
        <S.SigninForm>
          <h1>LOG IN</h1>
          <h3>Choice 회원로그인</h3>
          <S.LoginInput>
            <input required type='text' />
            <div className='label'>아이디</div>
          </S.LoginInput>
          <S.LoginInput>
            <input required type='text' />
            <div className='label'>비밀번호</div>
          </S.LoginInput>
          <S.Button>로그인</S.Button>
          <S.GoSignup>
            <Link to='/signup'>회원가입</Link>
          </S.GoSignup>
        </S.SigninForm>
      </S.SigninLayout>
    </S.Layout>
  );
};

export default Signin;
