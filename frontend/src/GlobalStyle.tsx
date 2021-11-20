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
    font-family: 'InfinitySansReg';
  }
  body,
  html {
    max-width: 1180px;
    height: 100%;
    margin: 0 auto;
    background: #e0ded8;
  }

  .fill-button {
    border: none;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    font-family: 'InfinitySansBold';
    display: inline-block;
    float: right;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: #e0ded8;
    color: black;
    border: 2px solid #9e9a9a;
    :hover {
      background-color: #4caf50;
      color: white;
    }
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
