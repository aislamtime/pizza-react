import { createSlice } from '@reduxjs/toolkit'
import { RootStateType } from '../store'

export type FilterStateType = {
  activeSort: number
  categoryId: number
  isOrderDesc: boolean
  pageNumber: number
  searchValue: string
}

const initialState: FilterStateType = {
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
    changeActiveSort(state: FilterStateType, action) {
      state.activeSort = action.payload
    },
    changeCategoryId(state: FilterStateType, action) {
      state.categoryId = action.payload
    },
    changeOrder(state: FilterStateType) {
      state.isOrderDesc = !state.isOrderDesc
    },
    changePageNumber(state: FilterStateType, action) {
      state.pageNumber = action.payload
    },
    setSearchValue(state: FilterStateType, action) {
      state.searchValue = action.payload
    },
  },
})

export const selectFilter = (state: RootStateType): FilterStateType => state.filter

export const { changeActiveSort, changeCategoryId, changeOrder, changePageNumber, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
