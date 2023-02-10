import React from 'react'
import { useWhyDidYouUpdate } from 'ahooks'

type CategoriesPropsType = {
  categoryId: number
  changeCategory: (i: number) => void
}

export const Categories: React.FC<CategoriesPropsType> = React.memo(
  ({ categoryId, changeCategory }) => {
    const categories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

    useWhyDidYouUpdate('Categories', { categoryId, changeCategory })

    return (
      <div className='categories'>
        <ul>
          {categories.map((el, i) => {
            return (
              <li
                key={i}
                className={categoryId === i ? 'active' : ''}
                onClick={() => changeCategory(i)}>
                {el}
              </li>
            )
          })}
        </ul>
      </div>
    )
  },
)
