import { listingApi } from "@Services/listing";
import { store } from "@/store";
import { NListing } from "@Data/nestling/NListing";
import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";

type ParamsPayload = {
  listingId: string;
};

type LoaderData = {
  listing: NListing | undefined;
};

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const { listingId } = params;
  if (listingId === undefined) {
    throw new Response("Listing ID undefined", { status: 500 });
  }

  const result = await store.dispatch(
    listingApi.endpoints.getListing.initiate(listingId)
  );

  store.dispatch(listingApi.util.resetApiState());

  // Handle possible errors
  if (result.error) {
    throw new Response("Failed to fetch listing", { status: 500 });
  }

  const listing = result.data?.listing || undefined;
  return { listing } as LoaderData;
};
