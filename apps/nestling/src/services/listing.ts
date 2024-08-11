
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RCAListing } from '@Data/reatlorca/types'

// Define a service using a base URL and expected endpoints
export const listingApi = createApi({
  reducerPath: 'listingApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' https://hb63mtl83i.execute-api.us-east-1.amazonaws.com/dev/listings-service/listings' }),
  endpoints: (builder) => ({
    getListings: builder.query<RCAListing, void>({
        query: () => '',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListingsQuery } = listingApi