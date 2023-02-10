import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { PizzaType } from './types'

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
