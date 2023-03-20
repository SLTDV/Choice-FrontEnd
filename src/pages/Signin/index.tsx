import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as I from '../../asset/svg';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Auth from '../../services/Auth';
import { SigninInterface } from '../../types/auth.types';
import { toast } from 'react-toastify';

const Signin = () => {
  const { register, handleSubmit } = useForm<SigninInterface>();
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const onValid = async (data: any) => {
    try {
      setIsError(false);
      await Auth.signin(data);
      navigate('/');
    } catch (error: any) {
      console.log(error);
      setIsError(true);
      toast.error('사용자 정보를 다시 확인해주세요.', {
        autoClose: 2000,
        theme: 'dark',
      });
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
          <S.LoginInput isError={isError}>
            <input
              required
              type='text'
              autoComplete='new-password'
              {...register('email')}
            />
            <div className='label'>이메일</div>
          </S.LoginInput>
          <S.LoginInput isError={isError}>
            <input
              required
              type='password'
              autoComplete='new-password'
              {...register('password')}
            />
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
