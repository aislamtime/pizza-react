import React from 'react'

export function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className='categories'>
      <ul>
        {categories.map((el, i) => {
          return (
            <li key={i} className={activeIndex === i ? 'active' : ''} onClick={() => setActiveIndex(i)}>
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
