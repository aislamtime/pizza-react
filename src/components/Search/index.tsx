import React from 'react'
import debounce from 'lodash.debounce'

import s from './Search.module.scss'
import { useSelector } from 'react-redux'
import { setSearchValue } from '../../redux/slices/filter/slice'
import { useAppDispatch } from '../../redux/store'
import { selectFilter } from '../../redux/slices/filter/selectors'

export default function Search() {
  const [localInputValue, setLocalInputValue] = React.useState('')
  const { searchValue } = useSelector(selectFilter)
  const dispatch = useAppDispatch()
  const inputRef = React.useRef<HTMLInputElement>(null)

  const search = React.useCallback(
    debounce((value: string) => dispatch(setSearchValue(value)), 500),
    [],
  )

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInputValue(e.currentTarget.value)
    search(localInputValue)
  }

  const onClearInput = () => {
    dispatch(setSearchValue(''))
    setLocalInputValue('')
    inputRef.current?.focus()
  }

  return (
    <div className={s.root}>
      <svg
        className={s.icon}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 30 30'
        width='30px'
        height='30px'>
        <path d='M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z' />
      </svg>
      <input
        ref={inputRef}
        value={localInputValue}
        onChange={changeInputValue}
        className={s.input}
        placeholder='Поиск пиццы..'
        type='text'
      />
      {searchValue ? (
        <svg
          onClick={onClearInput}
          className={s.closeIcon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='48px'
          height='48px'>
          <path d='M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z' />
        </svg>
      ) : (
        ''
      )}
    </div>
  )
}
