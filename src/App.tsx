import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './scss/app.scss'
import { Header } from './components/Header'
import Home from './pages/Home'

const Cart = React.lazy(() => import('./pages/Cart'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const PizzaDescription = React.lazy(() => import('./pages/PizzaDescription'))

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
              <Suspense>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path={'/pizza/:id'}
            element={
              <Suspense>
                <PizzaDescription />
              </Suspense>
            }
          />
          <Route
            path={'*'}
            element={
              <Suspense>
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
