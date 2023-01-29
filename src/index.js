import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'

//import NotFound from './pages/NotFound'
//import Cart from './pages/Cart'
//import Home from './pages/Home'

//const router = createBrowserRouter([
//  {
//    path: '/',
//    element: <App />,
//    errorElement: <NotFound />,
//    children: [
//      {
//        path: '',
//        element: <Home />,
//      },
//      {
//        path: 'cart',
//        element: <Cart />,
//      },
//    ],
//  },
//])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
