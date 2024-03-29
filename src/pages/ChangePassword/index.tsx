import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import { SignupInterface } from '../../types/auth.types';
import Auth from '../../services/Auth';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  certifiedPhoneNumberPasswordAtom,
  changePasswordAtom,
} from '../../atoms';
import PhoneNumber from '../../components/PhoneNumberAuth';

const ChangePassword = () => {
  const [isError, setIsError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const [isCertifiedPhoneNumberPassword, setIsCertifiedPhoneNumberPassword] =
    useRecoilState(certifiedPhoneNumberPasswordAtom);
  const [, setIsChangePassword] = useRecoilState(changePasswordAtom);

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
        await Auth.changePassword(phoneNumber, data.password);
        navigate('/signin');
        toast.success('비밀번호가 변경되었습니다!');
      } catch (error: any) {
        toast.error('이미 해당 비밀번호를 사용중입니다.', {
          autoClose: 2000,
          theme: 'dark',
          className: 'toast',
        });
      }
    } else {
      setIsError(true);
      setError('passwordCheck', { message: '비밀번호가 일치하지 않습니다.' });
    }
  };
  const inValid = (error: any) => {
    error && setIsError(true);
  };

  useEffect(() => {
    setIsChangePassword(true);
    setIsCertifiedPhoneNumberPassword(false);
  }, []);

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
        <S.SignupLayout>
          {isCertifiedPhoneNumberPassword ? (
            <S.SignupForm onSubmit={handleSubmit(onValid, inValid)}>
              <h1>USER</h1>
              <h3>비밀번호 변경</h3>
              <div>
                <S.ErrorText>{isError && errors.password?.message}</S.ErrorText>
                <S.Label aniDuration={0.6}>비밀번호</S.Label>
                <S.Input
                  {...register('password', {
                    required: '비밀번호를 입력해주세요.',
                    maxLength: {
                      value: 16,
                      message: '16자 이내로 입력해주세요.',
                    },
                    minLength: {
                      value: 8,
                      message: '8자 이상 입력해주세요.',
                    },
                    pattern: {
                      message: '잘못된 비밀번호 형식이에요',
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/,
                    },
                  })}
                  type='password'
                  placeholder='8~16자 영문, 숫자, 특수문자 조합'
                  isError={isError}
                />
              </div>
              <div>
                <S.ErrorText>
                  {isError && errors.passwordCheck?.message}
                </S.ErrorText>
                <S.Label aniDuration={0.3}>비밀번호 확인</S.Label>
                <S.Input
                  {...register('passwordCheck', {
                    required: '비밀번호를 다시 입력해주세요.',
                  })}
                  type='password'
                  isError={isError}
                />
              </div>
              <S.Button>완료</S.Button>
            </S.SignupForm>
          ) : (
            <PhoneNumber setPhoneNumber={setPhoneNumber} />
          )}
        </S.SignupLayout>
      </div>
    </S.Layout>
  );
};

export default ChangePassword;
