import React, { useRef, useState, Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { certifiedPhoneNumberAtom } from '../../../atoms';
import Auth from '../../../services/Auth';
import Timer from '../Timer';
import * as S from './style';

interface Props {
  setPhoneNumber: Dispatch<SetStateAction<string>>;
}

const PhoneNumber = ({ setPhoneNumber }: Props) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [, setIsCertifiedPhoneNumber] = useRecoilState(
    certifiedPhoneNumberAtom
  );
  const [phoneNumError, setPhoneNumError] = useState(false);
  const [authNumError, setAuthNumError] = useState(false);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const authenticationNumber = useRef<HTMLInputElement>(null);

  const getAuthenticationNumber = async () => {
    try {
      if (
        phoneNumber.current?.value.length == 11 &&
        phoneNumber.current?.value.substring(0, 3) == '010'
      ) {
        await Auth.getAuthenticationNumber(String(phoneNumber.current.value));
        setIsTimerRunning(true);
        toast.success('인증번호가 전송되었습니다.', { autoClose: 2000 });
        setPhoneNumError(false);
      } else {
        setPhoneNumError(true);
      }
    } catch (error: any) {
      if (error.response.status == 409)
        toast.error('이미 인증된 전화번호입니다.');
    }
  };

  const checkAuthenticationNumber = async () => {
    try {
      if (authenticationNumber.current?.value && phoneNumber.current?.value) {
        await Auth.checkAuthenticationNumber(
          String(phoneNumber.current.value),
          String(authenticationNumber.current.value)
        );
        setPhoneNumber(phoneNumber.current.value);
        setIsCertifiedPhoneNumber(true);
        setIsTimerRunning(false);
        toast.success('인증되었습니다!', { autoClose: 2000 });
      } else {
        setAuthNumError(true);
        setPhoneNumError(true);
      }
    } catch (error: any) {
      setAuthNumError(true);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <S.Layout>
      <h1>SIGN UP</h1>
      <h3>Choice 회원가입</h3>
      <S.InputWrap onSubmit={handleSubmit}>
        {phoneNumError && <S.ErrorText>전화번호를 확인해주세요.</S.ErrorText>}
        <S.Label aniDuration={1}>전화번호</S.Label>
        <S.Input
          maxLength={11}
          width='30rem'
          ref={phoneNumber}
          isError={phoneNumError}
        />
        <S.Button onClick={getAuthenticationNumber}>전송</S.Button>
      </S.InputWrap>
      <S.InputWrap onSubmit={handleSubmit}>
        <div>
          {authNumError && <S.ErrorText>인증번호를 확인해주세요.</S.ErrorText>}
          <S.Label aniDuration={0.5}>인증번호</S.Label>
          <S.Input
            maxLength={4}
            ref={authenticationNumber}
            isError={authNumError}
          />
        </div>
        {isTimerRunning && (
          <S.TimerLayout>
            <Timer />
          </S.TimerLayout>
        )}
        <S.NextButton onClick={checkAuthenticationNumber}>다음</S.NextButton>
      </S.InputWrap>
    </S.Layout>
  );
};

export default PhoneNumber;
