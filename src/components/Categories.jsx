import React from 'react'

export function Categories({ value, onChangeValue }) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className='categories'>
      <ul>
        {categories.map((el, i) => {
          return (
            <li key={i} className={value === i ? 'active' : ''} onClick={() => onChangeValue(i)}>
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
