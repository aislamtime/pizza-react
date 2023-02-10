import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { PizzaStateType, PizzaType, Status } from './types'

//type FetchPizzasArgsType = Record<string, string>
export const fetchPizzas = createAsyncThunk<PizzaType[], Record<string, string>>(
  'pizza/fetchPizzas',
  async (params) => {
    const { category, page, sort, order, search } = params
    const { data } = await axios.get<PizzaType[]>(
      `https://63d12d27120b32bbe8f2dbf8.mockapi.io/items?${category}${page}${sort}${order}${search}`,
    )
    return data // as PizzaType[]
  },
)

const initialState: PizzaStateType = {
  items: [],
  status: Status.LOADING,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<PizzaType[]>) => {
      action.payload.length === 0 ? (state.status = Status.ERROR) : (state.status = Status.SUCCESS)
      state.items = action.payload
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR
      state.items = []
    })
  },
})

export default pizzaSlice.reducer
