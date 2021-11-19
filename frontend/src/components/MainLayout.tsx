import React from 'react';
import GlobalStyle from '../GlobalStyle';
import Router from '../router/Router';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default MainLayout;
