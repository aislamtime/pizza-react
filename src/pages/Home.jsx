import React from 'react'

import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'

export default function Home() {
  const [pizzas, setPizzas] = React.useState([])
  const [isFetching, setIsFetching] = React.useState(true)

  const [activeSort, setActiveSort] = React.useState(0)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const changeActiveSort = (index) => {
    setActiveSort(index)
  }
  const changeActiveIndex = (index) => {
    setActiveIndex(index)
  }

  React.useEffect(() => {
    fetch(`https://63d12d27120b32bbe8f2dbf8.mockapi.io/items?&{}`, [])
      .then((res) => res.json())
      .then((items) => {
        setPizzas(items)
        setIsFetching(false)
      })
  }, [])
  return (
    <>
      <div className='content__top'>
        <Categories activeIndex={activeIndex} setActiveIndex={changeActiveIndex} />
        <Sort activeSort={activeSort} setActiveSort={changeActiveSort} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isFetching
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map((pizza) => {
              return (
                <>
                  <PizzaBlock key={pizza.id} {...pizza} />
                </>
              )
            })}
      </div>
    </>
  )
}
