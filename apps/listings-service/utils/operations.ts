import { Readable } from "stream";
import { createS3Client } from "../db-clients/s3-client";
import { LISTING_BUCKET } from "./constants";

const {listObjects, getObject} = createS3Client({
    BucketName: LISTING_BUCKET,
    region: 'us-east-1'
});

export const getListings = async () => {
    try{
        const listings = await listObjects();

        //process listings
        const processedListings = listings.map(listing => listing.Key);
        return processedListings;
    } catch (error) {
        console.error('Error getting listings', error);
       throw error;
    }
}

// Convert a stream to a string
const streamToString = (stream: Readable): Promise<string> => {
    return new Promise((resolve, reject) => {
      const chunks: any[] = [];
      stream.on('data', chunk => chunks.push(chunk));
      stream.on('error', reject);
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
    });
  }

export const getListingByMLS = async (mls: string) => {
    try {
        const listings = await listObjects(mls);

        if (listings.length === 0) {
            throw new Error(`No listing found under mls number: ${mls}`);
        }

        const objectKey = listings[0].Key;
        const objectData = await getObject(objectKey || '');
            
        // Convert the object data stream to a string
        const objectString = await streamToString(objectData as Readable);
        const objectJson = JSON.parse(objectString);

        return objectJson;
    } catch (error) {
        console.error('Error getting listings', error);
        throw error;
    }
}