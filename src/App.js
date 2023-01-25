import React from 'react'
import Skeleton from './components/PizzaBlock/Skeleton'

import './scss/app.scss'

import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Sort } from './components/Sort'
import { PizzaBlock } from './components/PizzaBlock'

function App() {
  const [pizzas, setPizzas] = React.useState([])
  const [isFetching, setIsFetching] = React.useState(true)

  React.useEffect(() => {
    fetch('https://63d12d27120b32bbe8f2dbf8.mockapi.io/items', [])
      .then((res) => res.json())
      .then((items) => {
        setPizzas(items)
        setIsFetching(false)
      })
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
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
        </div>
      </div>
    </div>
  )
}

export default App
