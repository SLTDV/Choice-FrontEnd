import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Auth from '../../services/Auth';
import { SigninInterface } from '../../types/auth.types';
import { toast } from 'react-toastify';
import tokenService from '../../utils/tokenService';
import { useRecoilState } from 'recoil';
import { loggedAtom } from '../../atoms';
import User from '../../services/User';
import { Spinner } from '../../components/common/Spinner/style';

const Signin = () => {
  const { register, handleSubmit } = useForm<SigninInterface>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [logged, setLogged] = useRecoilState(loggedAtom);
  useEffect(() => {
    if (logged) navigate('/');
  }, []);

  const onValid = async (data: SigninInterface) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const res: any = await Auth.signin(data);
      tokenService.setUser(res.data);
      const profile: any = await User.getMiniProfile();
      setLogged(true);
      navigate('/');
      toast.success(`${profile.data.nickname}님 환영합니다!`);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsError(true);
      toast.error('사용자 정보를 다시 확인해주세요.', {
        autoClose: 2000,
        theme: 'dark',
      });
      setIsLoading(false);
    }
  };

  const inValid = (error: any) => {
    error && setIsError(true);
  };
  return (
    <S.Layout>
      <div className='layout'>
        <S.LogoLayout>
          <S.LogoWrap>
            <Link to='/'>
              <img src='svg/Logo.svg' alt='' />
            </Link>
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
                {...register('phoneNumber')}
              />
              <div className='label'>전화번호</div>
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
            <S.ForgetPassword>
              <Link to='/password'>비밀번호를 잊어버리셨나요?</Link>
            </S.ForgetPassword>
            <S.Button isLoading={isLoading}>로그인</S.Button>
            {isLoading && (
              <S.SpinnerLayout>
                <Spinner />
              </S.SpinnerLayout>
            )}
            <S.GoSignup>
              <Link to='/signup'>회원가입</Link>
            </S.GoSignup>
          </S.SigninForm>
        </S.SigninLayout>
      </div>
    </S.Layout>
  );
};

export default Signin;
