import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function PizzaDescription() {
  const [pizza, setPizza] = React.useState()
  const { id } = useParams()

  useEffect(() => {
    async function fetchPizzaById() {
      try {
        const { data } = await axios.get(`https://63d12d27120b32bbe8f2dbf8.mockapi.io/items/${id}`)
        setPizza(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPizzaById()
  }, [])

  if (!pizza) return <h2>Загрузка..</h2>

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt='' />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} ₽</span>
    </div>
  )
}
