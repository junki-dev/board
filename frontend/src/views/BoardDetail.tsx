import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  width: 100%;
`;

const PageTitle = styled.span`
  font-size: 28px;
  font-family: 'InfinitySansBold';

  span {
    color: #4caf50;
  }
`;

const DetailContent = styled.div`
  box-shadow: 0px 3px 10px rgb(0, 10, 10, 0.5);
  padding: 18px;
  margin-top: 24px;

  p {
    font-size: 16px;
    font-family: 'InfinitySansReg';
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 18px;
`;

const Label = styled.label`
  width: 20%;
  font-size: 20px;
  font-family: 'InfinitySansBold';
  margin-bottom: 18px;
`;

const LinkItem = styled(Link)`
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
`;

const ContentContainer = styled.div``;

const BoardDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id === `new`) {
    } else {
    }
  }, [id]);

  return (
    <DetailContainer>
      <PageTitle>
        Detail
        <br />
        Number <span>{id}</span>
      </PageTitle>
      <DetailContent>
        <TitleContainer>
          <Label>TITLE</Label>
          <p>타이틀</p>
        </TitleContainer>
        <ContentContainer>
          <Label>CONTENT</Label>
          <p>내용</p>
        </ContentContainer>

        <LinkItem to="/">BACK</LinkItem>
        <LinkItem to={`/update/1`}>UPDATE</LinkItem>
      </DetailContent>
    </DetailContainer>
  );
};

export default BoardDetail;
