import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter'
import {modeSlice} from "./mode";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    mode : modeSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
