import React from 'react'

import emptyCartPng from '../assets/img/empty-cart.png'

export default function EmptyCart() {
  return (
    <div className='cart cart--empty'>
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCartPng} alt='Empty cart' />
      <a href='/' className='button button--black'>
        <span>Вернуться назад</span>
      </a>
    </div>
  )
}