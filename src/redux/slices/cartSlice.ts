import { createSlice } from '@reduxjs/toolkit'

export type CartItemType = {}

export type CartType = {
  currentPrice: number
  currentCount: number
  items: CartItemType[]
}

const initialState = {
  currentPrice: 0,
  currentCount: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id)

      if (findItem) {
        findItem.count += 1
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }

      state.currentCount += 1
      state.currentPrice += action.payload.price
    },
    decrement(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          if (item.count !== 1) {
            state.currentPrice -= item.price
            item.count -= 1
          } else {
            return
          }
        }
      })
    },
    removeItem(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          state.currentPrice -= item.price * item.count
          state.currentCount -= item.count
        }
      })
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeItems(state) {
      state.items = []
      state.currentCount = 0
      state.currentPrice = 0
    },
  },
})

export const selectCart = (state) => state.cart

export const { addItem, removeItems, decrement, removeItem } = cartSlice.actions

export default cartSlice.reducer
