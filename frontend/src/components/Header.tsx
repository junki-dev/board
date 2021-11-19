import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  line-height: 120px;
  height: 120px;
`;

const Title = styled.a`
  text-align: center;
  font-size: 42px;
  color: #75cb5d;
  margin-bottom: 12px;
  font-family: 'InfinitySansCBold';
  text-decoration: underline;
  text-decoration-color: #4caf50;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title href="/">BOARD</Title>
    </HeaderContainer>
  );
};

export default Header;
