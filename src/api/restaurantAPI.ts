import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Category from '../models/category'
import Restaurant from '../models/restaurant'

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], Category>({
      query: (category) => ({
        url: `/restaurants`,
        method: 'GET',
        params: { category: category.name },
      }),
    }),
  }),
})
