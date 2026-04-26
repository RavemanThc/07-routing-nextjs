"use client";

import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export default function Pagination({
  pageCount,
  onPageChange,
  currentPage,
}: PaginationProps) {
  const handlePageChange = (event: { selected: number }): void => {
    onPageChange(event.selected + 1);
  };

  return (
    <ReactPaginate
      className={css.pagination}
      pageCount={pageCount}
      onPageChange={handlePageChange}
      forcePage={currentPage - 1}
      previousLabel="Prev"
      nextLabel="Next"
      activeClassName={css.active}
    />
  );
}