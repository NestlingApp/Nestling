import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { listingsApi } from "@Services/listings";
import { listingApi } from "@Services/listing";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [listingsApi.reducerPath]: listingsApi.reducer,
    [listingApi.reducerPath]: listingApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(listingsApi.middleware)
      .concat(listingApi.middleware),
});

setupListeners(store.dispatch);
