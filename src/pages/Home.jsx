import React from 'react'

import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'

export default function Home() {
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
    <>
      {isFetching
        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
        : pizzas.map((pizza) => {
            return (
              <>
                <PizzaBlock key={pizza.id} {...pizza} />
              </>
            )
          })}
    </>
  )
}
