import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeCategoryId, FilterStateType, selectFilter } from '../redux/slices/filterSlice'

export function Categories() {
  const { categoryId }: FilterStateType = useSelector(selectFilter)
  const dispatch = useDispatch()

  const categories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

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
