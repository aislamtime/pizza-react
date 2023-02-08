import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { addItem, CartItemType, selectCart } from '../../redux/slices/cartSlice'

type PizzaBlockPropsType = {
  id: string
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

export const PizzaBlock: React.FC<PizzaBlockPropsType> = ({ id, imageUrl, title, types, sizes, price }) => {
  const { items } = useSelector(selectCart)
  const dispatch = useDispatch()

  const [activeSize, setActiveSize] = React.useState(26)
  const [activeType, setActiveType] = React.useState(0)

  const pizzaType: string[] = ['Тонкое', 'Традиционное']

  const onAddItemClick = () => {
    const item = {
      id,
      title,
      imageUrl,
      price,
      type: pizzaType[activeType],
      size: activeSize,
    }
    dispatch(addItem(item))
  }

  const currentItem = items.find((item) => item.id === id)

  return (
    <div className='pizza-block-wrapper'>
      <div className='pizza-block'>
        <Link to={`pizza/${id}`}>
          <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
          <h4 className='pizza-block__title'>{title}</h4>
        </Link>
        <div className='pizza-block__selector'>
          <ul>
            {types.map((index) => {
              return (
                <li key={index} className={activeType === index ? 'active' : ''} onClick={() => setActiveType(index)}>
                  {pizzaType[index]}
                </li>
              )
            })}
          </ul>
          <ul>
            {sizes.map((s, i) => {
              return (
                <li key={i} className={activeSize === s ? 'active' : ''} onClick={() => setActiveSize(s)}>
                  {s} см.
                </li>
              )
            })}
          </ul>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__price'>от {price} ₽</div>
          <button className='button button--outline button--add' onClick={onAddItemClick}>
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                fill='white'
              />
            </svg>
            <span>Добавить</span>
            {currentItem ? <i>{currentItem.count}</i> : ''}
          </button>
        </div>
      </div>
    </div>
  )
}