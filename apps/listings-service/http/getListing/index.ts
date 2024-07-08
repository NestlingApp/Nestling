import { LISTING_BUCKET } from "../../utils/constants";

export default {
    handler: './http/getListing/handler.main',
    events:[
        {
            http:{
                method: 'GET',
                path: '/listings-service/listing/{mls}',
                document: {
                    summary: 'Get listing by mls',
                    description: 'Get listing by mls',
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
                's3: ListBucket',
                's3:GetObject',
            ],
            Resource: [
                `arn:aws:s3:::${LISTING_BUCKET}`,
                `arn:aws:s3:::${LISTING_BUCKET}/*`,
            ],
        }
    ]
}