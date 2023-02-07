import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    changeActiveSort(state, action) {
      state.activeSort = action.payload
    },
    changeCategoryId(state, action) {
      state.categoryId = action.payload
    },
    changeOrder(state) {
      state.isOrderDesc = !state.isOrderDesc
    },
    changePageNumber(state, action) {
      state.pageNumber = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
  },
})

export const selectFilter = (state) => state.filter

export const { changeActiveSort, changeCategoryId, changeOrder, changePageNumber, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
