import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NListing } from "@Data/nestling/NListing";

interface ListingPayload {
  listing: NListing;
}

// Define a service using a base URL and expected endpoints
export const listingApi = createApi({
  reducerPath: "listingApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://hb63mtl83i.execute-api.us-east-1.amazonaws.com/dev/listings-service/",
  }),
  endpoints: (builder) => ({
    getListing: builder.query<ListingPayload, string>({
      query: (id: string) => `listing/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListingQuery } = listingApi;
