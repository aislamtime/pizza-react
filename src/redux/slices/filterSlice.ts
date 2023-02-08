import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../store'

export type FilterSliceType = {
  activeSort: number
  categoryId: number
  isOrderDesc: boolean
  pageNumber: number
  searchValue: string
}

const initialState: FilterSliceType = {
  activeSort: 0,
  categoryId: 0,
  isOrderDesc: true,
  pageNumber: 1,
  searchValue: '',
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeActiveSort(state, action: PayloadAction<number>) {
      state.activeSort = action.payload
    },
    changeCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    changeOrder(state) {
      state.isOrderDesc = !state.isOrderDesc
    },
    changePageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
  },
})

export const selectFilter = (state: RootStateType): FilterSliceType => state.filter

export const { changeActiveSort, changeCategoryId, changeOrder, changePageNumber, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
