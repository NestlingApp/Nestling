import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getListings } from '../../utils/operations';

export const main = async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    //get all listings from s3 bucket
    const listings = await getListings();

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow requests from the specified domain
            "Access-Control-Allow-Headers": "Content-Type", // Allow these headers
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allow these methods
        },
        body: JSON.stringify({
            listings
        }),
    };
}