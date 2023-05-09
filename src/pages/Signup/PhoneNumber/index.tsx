import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { certifiedPhoneNumberAtom } from '../../../atoms';
import Auth from '../../../services/Auth';
import * as S from './style';
const PhoneNumber = () => {
  const [isCertifiedPhoneNumber, setIsCertifiedPhoneNumber] = useRecoilState(
    certifiedPhoneNumberAtom
  );
  const phoneNumber = useRef<HTMLInputElement>(null);

  const getAuthenticationNumber = async () => {
    try {
      phoneNumber.current &&
        (await Auth.getAuthenticationNumber(String(phoneNumber.current.value)));
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <S.Layout>
      <h1>SIGN UP</h1>
      <h3>Choice 회원가입</h3>
      <S.InputWrap>
        <S.Label aniDuration={1}>전화번호</S.Label>
        <S.Input width='30rem' ref={phoneNumber} />
        <S.Button onClick={getAuthenticationNumber}>전송</S.Button>
      </S.InputWrap>
      <S.InputWrap>
        <S.Label aniDuration={0.5}>인증번호</S.Label>
        <S.Input />
      </S.InputWrap>
      <S.NextButton
        onClick={() => setIsCertifiedPhoneNumber(!isCertifiedPhoneNumber)}
      >
        다음
      </S.NextButton>
    </S.Layout>
  );
};

export default PhoneNumber;
