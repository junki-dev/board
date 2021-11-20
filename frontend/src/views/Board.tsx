import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Pagination from '../components/Pagination';
import { Boards, Board } from '../types/Board';

// Board 최상위 태그
const BoardContainer = styled.div`
  width: 1180px;
`;

// Board 목록 테이블
const TableContainer = styled.table`
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 3px 10px rgb(0, 10, 10, 0.5);
  text-align: center;
`;

// Board 테이블 Header
const TableHeader = styled.thead`
  font-size: 18px;
  font-family: 'InfinitySansBold';

  th {
    padding: 2px;
    border-bottom: 1px solid;
  }
`;

// Board 테이블 Body
const TableBody = styled.tbody`
  font-size: 15px;
  font-family: 'InfinitySansReg';

  td {
    padding: 13px 2px;
  }
`;

// Board 테이블 내 Item
const TableItem = styled.tr`
  :hover {
    cursor: pointer;
    color: #75cb5d;
  }
`;

const BoardView = () => {
  const [boards, setBoards] = useState<Board[]>([]); // 게시글 데이터
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalCount, setTotalCount] = useState(0); // 페이지 전체 개수
  const { data } = useQuery<Boards>(QUERY_BOARDS, { variables: { page: currentPage } }); // 게시글 목록 조회

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (!!boards && data && data.boards.length > 0) {
      setBoards(data.boards);
      setTotalCount(data.boardTotalCount || 0);
    }
  }, [data, boards]);

  return (
    <BoardContainer>
      <Link to="/update/new" className="fill-button">
        글쓰기
      </Link>
      <TableContainer>
        <TableHeader>
          <tr>
            <th>NO.</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </TableHeader>
        <TableBody>
          {boards &&
            boards.map((item: Board) => (
              <TableItem key={item.boardNumber} onClick={() => (window.location.href = `/detail/${item.boardNumber}`)}>
                <td>{item.boardNumber}</td>
                <td>{item.title}</td>
                <td>{dayjs(item.date).format(`YYYY.MM.DD`)}</td>
              </TableItem>
            ))}
        </TableBody>
      </TableContainer>
      <Pagination totalCount={totalCount} handleCurrentPage={handleCurrentPage} />
    </BoardContainer>
  );
};

// Board 목록 조회
const QUERY_BOARDS = gql`
  query Boards($page: Int!) {
    boards: boardByPage(page: $page) {
      boardNumber
      title
      date
    }
    boardTotalCount
  }
`;

export default BoardView;
