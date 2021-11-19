import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, css } from 'styled-components';

const GlobalCSS = css`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }
  body,
  html {
    max-width: 1180px;
    height: 100%;
    margin: 0 auto;
    background: #e0ded8;
  }
`;

const GlobalStyleComponent = createGlobalStyle`${GlobalCSS}`;

const GlobalStyle = () => (
  <>
    <Helmet>
      <title>JUNKI KIM</title>
    </Helmet>
    <GlobalStyleComponent />
  </>
);

export default GlobalStyle;
