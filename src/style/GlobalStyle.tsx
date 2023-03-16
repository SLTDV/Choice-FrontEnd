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
          font-size: 10px;
        }
        h1 {
          margin: 0;
        }
        p {
          margin: 0;
        }
        .toast {
          * {
            font-size: 1.5rem !important;
          }
        }
      `}
    ></Global>
  );
};

export default GlobalStyle;
