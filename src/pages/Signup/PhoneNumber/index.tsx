import React, { useRef, Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { certifiedPhoneNumberAtom } from '../../../atoms';
import Auth from '../../../services/Auth';
import * as S from './style';

interface Props {
  setPhoneNumber: Dispatch<SetStateAction<string>>;
}

const PhoneNumber = ({ setPhoneNumber }: Props) => {
  const [isCertifiedPhoneNumber, setIsCertifiedPhoneNumber] = useRecoilState(
    certifiedPhoneNumberAtom
  );
  const phoneNumber = useRef<HTMLInputElement>(null);
  const authenticationNumber = useRef<HTMLInputElement>(null);

  const getAuthenticationNumber = async () => {
    try {
      phoneNumber.current &&
        (await Auth.getAuthenticationNumber(String(phoneNumber.current.value)));
      toast.success('인증메일이 전송되었습니다.', { autoClose: 2000 });
    } catch (error: any) {
      console.log(error);
    }
  };

  const checkAuthenticationNumber = async () => {
    try {
      if (authenticationNumber.current && phoneNumber.current) {
        await Auth.checkAuthenticationNumber(
          String(phoneNumber.current.value),
          String(authenticationNumber.current.value)
        );
      }
      phoneNumber.current && setPhoneNumber(phoneNumber.current.value);
      setIsCertifiedPhoneNumber(true);
      toast.success('인증되었습니다!', { autoClose: 2000 });
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
        <S.Input ref={authenticationNumber} />
      </S.InputWrap>
      <S.NextButton onClick={checkAuthenticationNumber}>다음</S.NextButton>
    </S.Layout>
  );
};

export default PhoneNumber;
