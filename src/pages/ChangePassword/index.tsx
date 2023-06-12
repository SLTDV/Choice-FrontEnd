import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  certifiedPhoneNumberPasswordAtom,
  changePasswordAtom,
} from '../../atoms';
import PhoneNumber from '../../components/PhoneNumberAuth';

const ChangePassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const [isCertifiedPhoneNumberPassword] = useRecoilState(
    certifiedPhoneNumberPasswordAtom
  );
  const [, setIsChangePassword] = useRecoilState(changePasswordAtom);

  useEffect(() => {
    setIsChangePassword(true);
  }, []);

  return (
    <S.Layout>
      <div className='layout'>
        <S.SignupLayout>
          {isCertifiedPhoneNumberPassword ? (
            <S.SignupForm></S.SignupForm>
          ) : (
            <PhoneNumber setPhoneNumber={setPhoneNumber} />
          )}
        </S.SignupLayout>
      </div>
    </S.Layout>
  );
};

export default ChangePassword;
