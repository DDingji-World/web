import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter'
import {modeSlice} from "./mode";
import {categorySlice} from "./category";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    mode : modeSlice.reducer,
    category : categorySlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
