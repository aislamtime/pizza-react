import React from 'react'

import { Link } from 'react-router-dom'
import s from './notFoundBlock.module.scss'

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={s.root}>
      <span className={s.smile}>😕</span>
      <br />
      <h1>Страница не найдена..</h1>
      <br />
      <br />
      <p className={s.description}>
        Страница на которую вы пытаетесь перейти не существует в нашем интернет-магазине
      </p>
      <br />
      <Link className='button' to={'/'}>
        На главную
      </Link>
    </div>
  )
}
