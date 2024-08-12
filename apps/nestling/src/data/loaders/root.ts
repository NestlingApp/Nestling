import { listingsApi } from "@Services/listings";
import { store } from "@/store";

type ParamsPayload = {
  params: {
    listingId?: string;
  };
};

export const loader = async (payload: ParamsPayload) => {
  const { listingId } = payload.params;
  const result = await store.dispatch(
    listingsApi.endpoints.getListings.initiate()
  );
  store.dispatch(listingsApi.util.resetApiState());

  // Handle possible errors
  if (result.error) {
    throw new Response("Failed to fetch listing", { status: 500 });
  }

  const listingIds =
    result.data?.listings?.map((listing) => listing.listing_id) || [];

  return { listingIds, listingId };
};
