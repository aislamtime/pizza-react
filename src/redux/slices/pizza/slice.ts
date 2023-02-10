import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPizzas } from './asyncActions'
import { PizzaStateType, PizzaType, Status } from './types'

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
