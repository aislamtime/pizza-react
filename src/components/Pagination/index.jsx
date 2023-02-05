import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { changePageNumber, selectFilter } from '../../redux/slices/filterSlice'

import s from './Pagination.module.scss'

export function Pagination() {
  const { pageNumber } = useSelector(selectFilter)
  const dispatch = useDispatch()

  return (
    <ReactPaginate
      className={s.root}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(e) => dispatch(changePageNumber(e.selected + 1))}
      forcePage={pageNumber - 1}
      pageRangeDisplayed={9}
      pageCount={3}
    />
  )
}
