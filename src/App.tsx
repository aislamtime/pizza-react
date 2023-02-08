import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './scss/app.scss'
import { Header } from './components/Header'
import Home from './pages/Home'
import HotFound from './pages/NotFound'
import Cart from './pages/Cart'
import { PizzaDescription } from './pages/PizzaDescription'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/pizza/:id'} element={<PizzaDescription />} />
          <Route path={'*'} element={<HotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App