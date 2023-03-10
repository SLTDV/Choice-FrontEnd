import { css, Global } from '@emotion/react';
import React from 'react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        body {
          font-family: ' AppleSDGothicNeo ', ' Noto Sans KR', sans-serif;
        }
      `}
    ></Global>
  );
};

export default GlobalStyle;
