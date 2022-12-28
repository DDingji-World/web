import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '..'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 1,
  reducers: {
    UP: (state, action) => {
      return state + action.payload
    },
  },
})

export const useCounterSelector = () =>
  useSelector((state: RootState) => state.counter)
