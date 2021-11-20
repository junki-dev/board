import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Board } from '../types/Board';
import CustomModal from '../components/DeleteModal';

// Board 상세 페이지 최상위 태그
const DetailContainer = styled.div`
  width: 100%;
`;

// Board 상세 페이지 제목
const PageTitle = styled.span`
  font-size: 28px;
  font-family: 'InfinitySansBold';

  span {
    color: #4caf50;
  }
`;

// Board 상세 페이지 내용
const DetailContent = styled.div`
  box-shadow: 0px 3px 10px rgb(0, 10, 10, 0.5);
  padding: 18px;
  margin-top: 24px;

  p {
    font-size: 16px;
  }
`;

// Board 제목
const TitleContainer = styled.div`
  margin-bottom: 18px;
`;

// Board 항목 이름
const Label = styled.label`
  width: 20%;
  font-size: 20px;
  font-family: 'InfinitySansBold';
  margin-bottom: 18px;
`;

interface BoardData {
  board: Board;
}

const BoardDetail = () => {
  const { id } = useParams(); // 게시글 번호 파라미터
  const boardNumber = id ? parseInt(id) : 0; // 게시글 번호 초기화
  const [password, setPassword] = useState(``); // 비밀번호
  const { data } = useQuery<BoardData>(QUERY_BOARD, { variables: { boardNumber: boardNumber } }); // 게시글 번호로 게시글 데이터 조회
  const [deleteBoard] = useMutation(DELETE_BOARD); // 게시글 삭제

  const handleDeleteItem = async (response: boolean) => {
    if (response) {
      await deleteBoard({ variables: { boardNumber: boardNumber, password: password } })
        .then(() => {
          alert(`삭제 되었습니다.`);
          window.location.href = '/';
        })
        .catch((error) => {
          alert(`삭제에 실패했습니다. \n ${error}`);
        });
    }
  };

  const handlePassword = (modalPassword: string) => {
    setPassword(modalPassword);
  };

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
          <p>{data?.board.title}</p>
        </TitleContainer>
        <div>
          <Label>CONTENT</Label>
          <div dangerouslySetInnerHTML={{ __html: `${data?.board.content}` }} />
        </div>

        <Link to="/" className="fill-button">
          BACK
        </Link>
        <CustomModal name="DELETE" response={handleDeleteItem} changePassword={handlePassword} />
        <Link to={`/update/${id}`} className="fill-button">
          UPDATE
        </Link>
      </DetailContent>
    </DetailContainer>
  );
};

// 게시글 상세 조회
const QUERY_BOARD = gql`
  query Board($boardNumber: Int!) {
    board: boardByNumber(boardNumber: $boardNumber) {
      title
      content
    }
  }
`;

// 게시글 삭제
const DELETE_BOARD = gql`
  mutation DeleteBoard($boardNumber: Int!, $password: String!) {
    deleteBoard(boardNumber: $boardNumber, password: $password)
  }
`;

export default BoardDetail;
