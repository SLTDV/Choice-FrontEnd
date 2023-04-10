import React from 'react';
import * as S from './style';
const IsMaking = () => {
  return (
    <S.Layout>
      <div>
        <img src='svg/smallLogo.svg' alt='choice' />
        <S.ProgressBarBox>
          <S.ProgressBar />
        </S.ProgressBarBox>
      </div>
    </S.Layout>
  );
};

export default IsMaking;
