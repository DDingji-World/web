import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { counterSlice } from './counter'
import {modeSlice} from "./mode";
import {categorySlice} from "./category";
import { restaurantApi } from '../api/restaurantAPI';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    mode : modeSlice.reducer,
    category : categorySlice.reducer,
    [restaurantApi.reducerPath]: restaurantApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
