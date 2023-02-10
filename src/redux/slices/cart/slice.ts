import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { calcTotalCount } from '../../../utils/calcTotalCount'
import { calcTotalPrice } from '../../../utils/calcTotalPrice'
import { getCartFromLS } from '../../../utils/getCartFromLS'
import { CartSliceType } from './types'

const { items, totalCount, totalPrice } = getCartFromLS()

const initialState: CartSliceType = {
  totalPrice,
  totalCount,
  items,
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

      state.totalCount += 1 //calcTotalCount(state.items)
      state.totalPrice += action.payload.price //calcTotalPrice(state.items)
    },
    decrement(state, action: PayloadAction<string>) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          if (item.count !== 1) {
            state.totalPrice -= item.price
            state.totalCount -= 1
            item.count -= 1
          } else {
            return
          }
        }
      })
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          state.totalPrice -= item.price * item.count
          state.totalCount -= item.count
        }
      })
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeItems(state) {
      state.items = []
      state.totalCount = 0
      state.totalPrice = 0
    },
  },
})

export const { addItem, removeItems, decrement, removeItem } = cartSlice.actions

export default cartSlice.reducer
