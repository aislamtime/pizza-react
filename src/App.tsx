import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './scss/app.scss'
import { Header } from './components'
import Home from './pages/Home'

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'))
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'))
const PizzaDescription = React.lazy(
  () => import(/* webpackChunkName: "PizzaDescription" */ './pages/PizzaDescription'),
)

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route
            path={'/cart'}
            element={
              <Suspense fallback={<div>Идет загрузка корзины...</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path={'/pizza/:id'}
            element={
              <Suspense fallback={<div>Идет загрузка...</div>}>
                <PizzaDescription />
              </Suspense>
            }
          />
          <Route
            path={'*'}
            element={
              <Suspense fallback={<div>Идет загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
