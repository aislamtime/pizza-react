import { configureStore } from '@reduxjs/toolkit'

import filter from './slices/filter/slice'
import cart from './slices/cart/slice'
import pizza from './slices/pizza/slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()
