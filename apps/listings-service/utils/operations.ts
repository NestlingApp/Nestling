import { createS3Client } from "../db-clients/s3-client";

const {listObjects} = createS3Client({
    BucketName: 'listings-bucket',
    region: 'us-east-1'
});

export const getListings = async () => {
    try{
        const listings = await listObjects('listings');
        return listings;
    } catch (error) {
        console.error('Error getting listings', error);
        return [];
    }
}