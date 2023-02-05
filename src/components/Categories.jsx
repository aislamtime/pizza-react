import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeCategoryId, selectFilter } from '../redux/slices/filterSlice'

export function Categories() {
  const { categoryId } = useSelector(selectFilter)
  const dispatch = useDispatch()

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className='categories'>
      <ul>
        {categories.map((el, i) => {
          return (
            <li key={i} className={categoryId === i ? 'active' : ''} onClick={() => dispatch(changeCategoryId(i))}>
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
