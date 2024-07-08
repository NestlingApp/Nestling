import { LISTING_BUCKET } from "../../utils/constants";

export default {
    handler: './http/getListings/handler.main',
    events:[
        {
            http:{
                method: 'GET',
                path: '/listings-service/listings',
                document: {
                    summary: 'Get all listings',
                    description: 'Get all listings',
                    methodResponses: [
                        {
                            statusCode: '200',
                            responseModels: {
                                'application/json': 'Listing'
                            }
                        },
                        {
                            statusCode: '400',
                            responseModels: {
                                'application/json': 'Error'
                            }
                        }
                    ],
                }
            }
        }
    ],
    iamRoleStatements: [
        {
            Effect: 'Allow',
            Action: [
                's3:GetObject',
                's3: ListBucket',
            ],
            Resource: [
                `arn:aws:s3:::${LISTING_BUCKET}`,
                `arn:aws:s3:::${LISTING_BUCKET}/*`,
            ],
        }
    ]
}