import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceType } from './types'

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

export const { changeActiveSort, changeCategoryId, changeOrder, changePageNumber, setSearchValue } =
  filterSlice.actions

export default filterSlice.reducer
