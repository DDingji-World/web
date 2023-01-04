import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Category from '../models/category'
import Restaurant from '../models/restaurant'

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_RESTAURANT_SERVER_URL,
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], Category | void>({
      query: (category?) => ({
        url: `/restaurants`,
        method: 'GET',
        params: category ? { category: category.name } : {},
      }),
    }),
  }),
})
