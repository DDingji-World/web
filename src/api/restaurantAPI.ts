import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Category from '../models/category'
import Restaurant from '../models/restaurant'

export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://3.36.253.255:8080' }),
  endpoints: (builder) => ({
    selectRandomRestaurantByCategory: builder.mutation<Restaurant, Category>({
      query: (category) => ({
        url: `restaurant`,
        method: 'POST',
        params: { category: category.name },
      }),
    }),

    selectRandomRestaurant: builder.mutation<Restaurant, void>({
      query: () => ({
        url: `restaurant/all`,
        method: 'POST',
      }),
    }),
  }),
})
