import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 40px;
  height: 40px;
  padding: 12px 0;
`;

const FooterTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-family: 'InfinitySansBold';
`;

const FooterContent = styled.p`
  text-align: center;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>CONTACT ME</FooterTitle>
      <FooterContent>EMAIL | kjgcde@gmail.com</FooterContent>
      <FooterContent>PHONE | 010.2326.771</FooterContent>
    </FooterContainer>
  );
};

export default Footer;
