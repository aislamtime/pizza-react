import React from 'react'
import ReactPaginate from 'react-paginate'

import s from './Pagination.module.scss'

export function Pagination({ pageNumber, setPageNumber }) {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(e) => setPageNumber(e.selected)}
      forcePage={pageNumber}
      pageRangeDisplayed={4}
      pageCount={3}
    />
  )
}
