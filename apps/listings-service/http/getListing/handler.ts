import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getListingByMLS } from '../../utils/operations';

export const main = async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const mls = event.pathParameters?.mls;
    if (!mls) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: 'Missing mls number'
            }),
        };
    }

    try {
        //get listing by mls number
        const listing = await getListingByMLS(mls);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Allow requests from the specified domain
                "Access-Control-Allow-Headers": "Content-Type", // Allow these headers
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allow these methods
            },
            body: JSON.stringify({
                listing
            }),
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: error.message
            }),
        };
    }
}