import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async function (category, page, sort, order, search) {
  return await axios.get(
    `https://63d12d27120b32bbe8f2dbf8.mockapi.io/items?${category}${page}${sort}${order}${search}`,
  ).data
})

const initialState = { items: [] }

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, action) => {
      console.log('Pending')
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      console.log('Fullfield')
    },
    [fetchPizzas.rejected]: (state, action) => {
      console.log('Error ', err)
    },
  },
})
export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
