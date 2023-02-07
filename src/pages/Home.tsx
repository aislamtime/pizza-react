import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import { Pagination } from '../components/Pagination'
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice'
import { selectFilter } from '../redux/slices/filterSlice'

export default function Home() {
  const { items, status } = useSelector(selectPizzaData)
  const { activeSort, categoryId, isOrderDesc, pageNumber, searchValue } = useSelector(selectFilter)
  const dispatch = useDispatch()

  const category = categoryId ? `&category=${categoryId}` : ''
  const sort = `&sortBy=${activeSort === 0 ? 'raiting' : activeSort === 1 ? 'price' : activeSort === 2 ? 'title' : ''}`
  const order = '&order=' + (isOrderDesc ? 'desc' : 'asc') // desc - по убыванию, asc - по возрастанию
  const page = `&p=${pageNumber}&l=9` // +1 добавил потому что pageNumber = 0 а запросить можно тока от 1
  const search = `&search=${searchValue}`

  React.useEffect(() => {
    dispatch(fetchPizzas({ category, page, sort, order, search }))
    window.scrollTo(0, 0)
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
