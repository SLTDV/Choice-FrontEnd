import React, { useState } from 'react';
import * as S from './style';
import * as I from '../../asset/svg';
import { useForm } from 'react-hook-form';
import { SignupInterface } from '../../types/auth';
const Signup = () => {
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupInterface>();

  const onValid = async (data: any) => {
    if (data.password === data.passwordCheck) {
      try {
        setIsError(false);
      } catch (error: any) {
        console.log(error);
      }
    } else {
      setIsError(true);
      setError('passwordCheck', { message: '비밀번호가 일치하지 않습니다.' });
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
      <S.SignupLayout>
        <S.SignupWrap>
          <S.LabelWrap>
            <S.Label aniDuration={1.2}>닉네임</S.Label>
            <S.Label aniDuration={0.9}>이메일</S.Label>
            <S.Label aniDuration={0.6}>비밀번호</S.Label>
            <S.Label aniDuration={0.3}>비밀번호 확인</S.Label>
          </S.LabelWrap>
          <S.SignupForm onSubmit={handleSubmit(onValid, inValid)}>
            <h1>SIGN UP</h1>
            <h3>Choice 회원가입</h3>
            <div>
              <S.ErrorText isError={isError}>
                {isError && errors.nickname?.message}
              </S.ErrorText>
              <S.Input
                {...register('nickname', {
                  required: '이름을 입력해주세요.',
                  maxLength: {
                    value: 6,
                    message: '6자 이내로 입력해주세요.',
                  },
                  minLength: {
                    value: 2,
                    message: '2자 이상 입력해주세요.',
                  },
                })}
                type='text'
                isError={isError}
              />
            </div>
            <div>
              <S.ErrorText isError={isError}>
                {isError && errors.email?.message}
              </S.ErrorText>
              <S.Input
                {...register('email', {
                  required: '이메일을 입력해주세요.',
                })}
                type='text'
                isError={isError}
              />
            </div>
            <div>
              <S.ErrorText isError={isError}>
                {isError && errors.password?.message}
              </S.ErrorText>
              <S.Input
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                })}
                type='password'
                isError={isError}
              />
            </div>
            <div>
              <S.ErrorText isError={isError}>
                {isError && errors.passwordCheck?.message}
              </S.ErrorText>
              <S.Input
                {...register('passwordCheck', {
                  required: '비밀번호를 다시 입력해주세요.',
                })}
                type='password'
                isError={isError}
              />
            </div>
            <S.Button>회원가입</S.Button>
          </S.SignupForm>
        </S.SignupWrap>
      </S.SignupLayout>
    </S.Layout>
  );
};

export default Signup;
