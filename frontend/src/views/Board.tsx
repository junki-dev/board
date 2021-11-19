import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BoardContainer = styled.div`
  width: 1180px;
`;

const RegisterButton = styled(Link)`
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
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

const TableContainer = styled.table`
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 3px 10px rgb(0, 10, 10, 0.5);
  text-align: center;
`;

const TableHeader = styled.thead`
  font-size: 18px;
  font-family: 'InfinitySansBold';

  th {
    padding: 2px;
    border-bottom: 1px solid;
  }
`;

const TableBody = styled.tbody`
  font-size: 15px;
  font-family: 'InfinitySansReg';

  td {
    padding: 13px 2px;
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;

  :hover {
    color: #75cb5d;
  }
`;

const Board = () => {
  return (
    <BoardContainer>
      <RegisterButton to="/update/new">글쓰기</RegisterButton>
      <TableContainer>
        <TableHeader>
          <tr>
            <th>NO.</th>
            <th>Title</th>
            <th>Contents</th>
            <th>Date</th>
          </tr>
        </TableHeader>
        <TableBody>
          <tr>
            <td>
              <LinkItem to={`/detail/1`}>1</LinkItem>
            </td>
            <td>
              <LinkItem to={`/detail/1`}>제목</LinkItem>
            </td>
            <td>
              <LinkItem to={`/detail/1`}>내용</LinkItem>
            </td>
            <td>2021.11.19</td>
          </tr>
        </TableBody>
      </TableContainer>
    </BoardContainer>
  );
};

export default Board;
