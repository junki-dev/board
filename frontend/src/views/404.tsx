import React from 'react';
import styled from 'styled-components';

// 페이지 최상위 태그
const PageContainer = styled.div`
  width: 100%;
  height: 550px;
`;

// 메시지 내용
const InfoText = styled.h1`
  margin-top: 70px;
  font-family: 'InfinitySansBold';
`;

const NotFound = () => {
  return (
    <PageContainer>
      <InfoText>404 Page Not Found</InfoText>
    </PageContainer>
  );
};

export default NotFound;
