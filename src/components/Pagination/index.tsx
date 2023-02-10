import React from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { selectFilter } from '../../redux/slices/filter/selectors'
import { changePageNumber } from '../../redux/slices/filter/slice'
import { useAppDispatch } from '../../redux/store'

import s from './Pagination.module.scss'

export function Pagination() {
  const { pageNumber } = useSelector(selectFilter)
  const dispatch = useAppDispatch()

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
