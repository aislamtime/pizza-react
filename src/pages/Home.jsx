import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import { Pagination } from '../components/Pagination'
import { SearchContext } from '../App'
import { fetchPizzas } from '../redux/slices/pizzaSlice'

export default function Home() {
  const dispatch = useDispatch()
  const { items, status } = useSelector((state) => state.pizza)

  const { activeSort, categoryId, isOrderDesc, pageNumber } = useSelector((state) => state.filter)

  const { searchValue } = React.useContext(SearchContext)
  //const [items, setItems] = React.useState([]) // all pizzas
  const [isFetching, setIsFetching] = React.useState(true)

  const category = categoryId ? `&category=${categoryId}` : ''
  const sort = `&sortBy=${activeSort === 0 ? 'raiting' : activeSort === 1 ? 'price' : activeSort === 2 ? 'title' : ''}`
  const order = '&order=' + (isOrderDesc ? 'desc' : 'asc') // desc - по убыванию, asc - по возрастанию
  const page = `&p=${pageNumber}&l=4` // +1 добавил потому что pageNumber = 0 а запросить можно тока от 1
  const search = `&search=${searchValue}`

  React.useEffect(() => {
    //setIsFetching(true)
    dispatch(fetchPizzas({ category, page, sort, order, search }))
    window.scrollTo(0, 0)
    //setIsFetching(false)
    //axios
    //  .get(`https://63d12d27120b32bbe8f2dbf8.mockapi.io/items?${category}${page}${sort}${order}${search}`)
    //  .then((res) => {
    //    setItems(res.data)
    //    setIsFetching(false)
    //  })
  }, [activeSort, categoryId, isOrderDesc, pageNumber, searchValue])

  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)

  const sceletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      {status !== 'error' ? (
        <div className='content__items'>{status === 'loading' ? sceletons : pizzas}</div>
      ) : (
        <div className='content__error'>
          <h2>
            Произошла ошибка при получении питсы <span>😕</span>
          </h2>
          <p>
            Не уходите без своей, космически вкусной питсы
            <br />
            Попробуйте еще раз чуть позже..
          </p>
        </div>
      )}
      <Pagination />
    </>
  )
}
