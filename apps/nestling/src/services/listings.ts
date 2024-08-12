import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NListing } from "@Data/nestling/NListing";

type ListingsPayload = {
  listings?: NListing[];
};

// Define a service using a base URL and expected endpoints
export const listingsApi = createApi({
  reducerPath: "listingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://hb63mtl83i.execute-api.us-east-1.amazonaws.com/dev/listings-service/listings",
  }),
  endpoints: (builder) => ({
    getListings: builder.query<ListingsPayload, void>({
      query: () => "",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListingsQuery } = listingsApi;
