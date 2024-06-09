import { RCAListing } from "@Data/reatlorca/types";
import data from "../properties.json";


interface ParamsPayload {
  params:{
    listingId?: string;
}

}
export async function loader(payload: ParamsPayload) {
    const listing = await getListing(payload.params?.listingId);
    const listingIds = await getListingIds();
    return { listing,listingIds };
  }

  //TODO: move this else where
export async function getListing(listingId?:string,required = true) {
    const listings: RCAListing[] = data.properties;
    const listing: RCAListing = listings.find((l) => l.MlsNumber === listingId);
    if (!listing && required) {
        throw new Response("", {
          status: 404,
          statusText: "Not Found",
        });
      }
    return listing;
  }

  export async function getListingIds() {
    const listings: RCAListing[] = data.properties;
    const ids: string[] = listings.map((l) => l.MlsNumber);
    return ids;
  }

