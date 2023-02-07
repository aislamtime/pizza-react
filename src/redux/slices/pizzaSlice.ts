import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (params) => {
  const { category, page, sort, order, search } = params
  const { data } = await axios.get(
    `https://63d12d27120b32bbe8f2dbf8.mockapi.io/items?${category}${page}${sort}${order}${search}`,
  )
  return data
})

const initialState = {
  items: [],
  status: 'pending', // 'loading' | 'success' | 'error'
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading'
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error'
      state.items = []
    })
  },
})

export const selectPizzaData = (state) => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
