
import { getListing,getListingIds } from "./listings";
interface ParamsPayload {
  params:{
    listingId?: string;
  }
}

export async function loader(payload: ParamsPayload) {

  
      const listing = await getListing(payload.params?.listingId,false);
      const listingIds = await getListingIds();
      return { listing,listingIds };
    }

