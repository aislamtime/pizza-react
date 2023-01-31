import React from 'react'
import { useSelector } from 'react-redux'

import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import { Pagination } from '../components/Pagination'
import { SearchContext } from '../App'

export default function Home() {
  const { activeSort, categoryId, isOrderDesc, pageNumber } = useSelector((state) => state.filter)

  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([]) // all pizzas
  const [isFetching, setIsFetching] = React.useState(true)

  const category = categoryId ? `&category=${categoryId}` : ''
  const sort = `sortBy=${activeSort === 0 ? 'raiting' : activeSort === 1 ? 'price' : activeSort === 2 ? 'title' : ''}`
  const order = 'order=' + (isOrderDesc ? 'desc' : 'asc') // desc - по убыванию, asc - по возрастанию
  const page = `p=${pageNumber}&l=4` // +1 добавил потому что pageNumber = 0 а запросить можно тока от 1

  React.useEffect(() => {
    setIsFetching(true)
    fetch(`https://63d12d27120b32bbe8f2dbf8.mockapi.io/items?${category}&${page}&${sort}&${order}`, [])
      .then((res) => res.json())
      .then((items) => {
        setItems(items)
        setIsFetching(false)
      })
  }, [activeSort, categoryId, isOrderDesc, pageNumber])

  const pizzas = items
    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)

  const sceletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isFetching ? sceletons : pizzas}</div>
      <Pagination />
    </>
  )
}
