import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function PizzaDescription() {
  const [pizza, setPizza] = React.useState<any>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPizzaById() {
      try {
        const { data } = await axios.get(`https://63d12d27120b32bbe8f2dbf8.mockapi.io/items/${id}`)
        setPizza(data)
      } catch (error) {
        alert('Не удалось получить аиццу..')
        navigate('/')
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
