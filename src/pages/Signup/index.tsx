import React from 'react';
import * as S from './style';
import * as I from '../../asset/svg';
const Signup = () => {
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
          <S.PlaceholderWrap>
            <S.Placeholder aniDuration={1.2}>닉네임</S.Placeholder>
            <S.Placeholder aniDuration={0.9}>이메일</S.Placeholder>
            <S.Placeholder aniDuration={0.6}>비밀번호</S.Placeholder>
            <S.Placeholder aniDuration={0.3}>비밀번호 확인</S.Placeholder>
          </S.PlaceholderWrap>
          <S.InputWrap>
            <h1>SIGN UP</h1>
            <p>Choice 회원가입</p>
            <S.Input />
            <S.Input />
            <S.Input />
            <S.Input />
            <S.Button>
              <span>
                <p>회원가입</p>
                <p>SIGN UP!</p>
              </span>
            </S.Button>
          </S.InputWrap>
        </S.SignupWrap>
      </S.SignupLayout>
    </S.Layout>
  );
};

export default Signup;
