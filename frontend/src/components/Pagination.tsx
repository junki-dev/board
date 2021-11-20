import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

// pagination 최상위 태그
const PaginateContainer = styled.div`
  width: 1180px;
  overflow: hidden;
`;

// pagination 항목
const PaginateContent = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-size: 12px;

  li a {
    padding: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  .pag-on {
    color: #75cb5d;
  }

  .active {
    background-color: transparent !important;
  }
`;

interface PageProps {
  totalCount: number;
  handleCurrentPage: (page: number) => void;
}

const Pagination = ({ totalCount, handleCurrentPage }: PageProps) => {
  return (
    <PaginateContainer>
      <PaginateContent
        onPageChange={(event) => handleCurrentPage(event.selected + 1)}
        breakLabel={'...'}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(totalCount / 10)}
        previousLabel="«"
        nextLabel="»"
        activeLinkClassName="pag-on"
      />
    </PaginateContainer>
  );
};

export default Pagination;
