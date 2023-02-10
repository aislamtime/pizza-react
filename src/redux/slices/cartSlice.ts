import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartFromLS } from '../../utils/getCartFromLS'
import { RootStateType } from '../store'

export type CartItemType = {
  id: string
  title: string
  imageUrl: string
  price: number
  type: string
  size: number
  count: number
}
export type CartSliceType = {
  totalPrice: number
  totalCount: number
  items: CartItemType[]
}

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
    //setItemsForLocalStorage(state, action) {
    //  state.items = action.payload.items
    //  state.totalCount = action.payload.totalCount
    //  state.totalPrice = action.payload.totalPrice
    //},
    addItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id)

      if (findItem) {
        findItem.count += 1
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }

      state.totalCount += 1
      state.totalPrice += action.payload.price
    },
    decrement(state, action: PayloadAction<string>) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          if (item.count !== 1) {
            state.totalPrice -= item.price
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

export const selectCart = (state: RootStateType): CartSliceType => state.cart

export const { addItem, removeItems, decrement, removeItem } = cartSlice.actions

export default cartSlice.reducer
