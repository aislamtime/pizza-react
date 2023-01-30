import React from 'react'

import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'

export default function Home({ searchValue, setSearchValue }) {
  const [items, setItems] = React.useState([])
  const [isFetching, setIsFetching] = React.useState(true)

  const [activeSort, setActiveSort] = React.useState(0)
  const [categoryId, setCategoryId] = React.useState(0)
  const [isOrderDesc, setOrder] = React.useState(true) // desc- or asc+

  const changeActiveSort = (index) => {
    setActiveSort(index)
  }
  const changeCategoryId = (index) => {
    setCategoryId(index)
  }

  const category = categoryId ? `&category=${categoryId}` : ''
  const sort = `sortBy=${activeSort === 0 ? 'raiting' : activeSort === 1 ? 'price' : activeSort === 2 ? 'title' : ''}`
  const order = 'order=' + (isOrderDesc ? 'desc' : 'asc')

  React.useEffect(() => {
    setIsFetching(true)
    fetch(`https://63d12d27120b32bbe8f2dbf8.mockapi.io/items?${category}&${sort}&${order}`, [])
      .then((res) => res.json())
      .then((items) => {
        setItems(items)
        setIsFetching(false)
      })
  }, [activeSort, categoryId, isOrderDesc])

  const pizzas = items
    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((pizza) => {
      return (
        <>
          <PizzaBlock key={pizza.id} {...pizza} />
        </>
      )
    })

  const sceletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

  return (
    <>
      <div className='content__top'>
        <Categories value={categoryId} onChangeValue={changeCategoryId} />
        <Sort
          activeSort={activeSort}
          setActiveSort={changeActiveSort}
          isOrderDesc={isOrderDesc}
          changeOrder={() => setOrder(!isOrderDesc)}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isFetching ? sceletons : pizzas}</div>
    </>
  )
}
