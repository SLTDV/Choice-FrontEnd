import { css, Global } from '@emotion/react';
import React from 'react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'AppleSDGothicNeoM';
          font-style: normal;
          src: url('/font/AppleSDGothicNeoM.woff') format('woff');
        }
        @font-face {
          font-family: 'AppleSDGothicNeoUL';
          font-style: normal;
          src: url('/font/AppleSDGothicNeoUL.woff') format('woff');
        }
        * {
          font-family: 'AppleSDGothicNeoM';
        }
      `}
    ></Global>
  );
};

export default GlobalStyle;
