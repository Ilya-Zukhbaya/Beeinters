import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './styles.module.scss';

export const Pagination = ({ onChangePage }) => {
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={8}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />;
};
