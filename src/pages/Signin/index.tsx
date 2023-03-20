import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as I from '../../asset/svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signin = () => {
  const { handleSubmit } = useForm();
  const [isError, setIsError] = useState(false);
  const onValid = async (data: any) => {
    try {
      setIsError(false);
    } catch (error: any) {
      console.log(error);
      setIsError(true);
    }
  };

  const inValid = (error: any) => {
    error && setIsError(true);
  };
  return (
    <S.Layout>
      <S.LogoLayout>
        <S.LogoWrap>
          <I.Logo />
          <p>선택의 고민을 한 번에</p>
        </S.LogoWrap>
      </S.LogoLayout>
      <S.SigninLayout>
        <S.SigninForm onSubmit={handleSubmit(onValid, inValid)}>
          <h1>LOG IN</h1>
          <h3>Choice 회원로그인</h3>
          <S.LoginInput>
            <input required type='text' autoComplete='new-password' />
            <div className='label'>이메일</div>
          </S.LoginInput>
          <S.LoginInput>
            <input required type='password' autoComplete='new-password' />
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
