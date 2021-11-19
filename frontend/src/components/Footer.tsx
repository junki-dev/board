import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 40px;
  height: 40px;
  padding: 12px 0;
`;

const FooterContent = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: 'InfinitySansCBold';
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>CONTACT ME</FooterContent>
    </FooterContainer>
  );
};

export default Footer;
