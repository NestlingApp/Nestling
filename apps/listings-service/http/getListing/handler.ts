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