import React from 'react'

type CategoriesPropsType = {
  categoryId: number
  changeCategory: (i: number) => void
}

export const Categories: React.FC<CategoriesPropsType> = ({ categoryId, changeCategory }) => {
  const categories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className='categories'>
      <ul>
        {categories.map((el, i) => {
          return (
            <li key={i} className={categoryId === i ? 'active' : ''} onClick={() => changeCategory(i)}>
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
