import React, { useEffect } from 'react';
import * as S from './style';
const IsMaking = () => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

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
