import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getListings } from '../../../utils/operations';

export const main = async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    //get all listings from s3 bucket
    const listings = await getListings();

    return {
        statusCode: 200,
        body: JSON.stringify({
            listings
        }),
    };
}